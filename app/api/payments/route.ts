export const runtime = "nodejs"; // Next.js App Router
import { NextResponse, NextRequest } from "next/server";
import { SquareClient, SquareEnvironment, SquareError } from "square";

const client = new SquareClient({
  token: process.env.SQUARE_ACCESS_TOKEN!,
  environment:
    process.env.SQUARE_ENV === "production"
      ? SquareEnvironment.Production
      : SquareEnvironment.Sandbox,
});

export async function POST(req: Request) {
  try {
    const {
      sourceId, // from Web Payments SDK tokenize()
      items, // [{ name, quantity, unitAmount }]
      shippingCents = 0,
      taxCents = 0,
      email,
      shippingAddress, // { addressLine1, locality, ... }
      idempotencyKey,
    } = await req.json();

    if (!sourceId) {
      return NextResponse.json(
        { ok: false, error: "Missing sourceId" },
        { status: 400 }
      );
    }
    if (!items?.length) {
      return NextResponse.json(
        { ok: false, error: "Empty cart" },
        { status: 400 }
      );
    }

    // Build Square order
    const lineItems = items.map((i: any) => ({
      name: i.name,
      quantity: String(i.quantity),
      basePriceMoney: { amount: BigInt(i.unitAmount), currency: "USD" },
    }));

    const orderBody: any = {
      locationId: process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID!,
      lineItems,
    };

    // Add shipping/tax as service charges (cleaner reporting)
    const serviceCharges: any[] = [];
    if (taxCents > 0) {
      serviceCharges.push({
        name: "Tax",
        amountMoney: { amount: BigInt(taxCents), currency: "USD" },
        calculationPhase: "TOTAL_PHASE",
        taxable: false,
      });
    }
    if (shippingCents > 0) {
      serviceCharges.push({
        name: "Shipping",
        amountMoney: { amount: BigInt(shippingCents), currency: "USD" },
        calculationPhase: "TOTAL_PHASE",
        taxable: false,
      });
    }
    if (serviceCharges.length) orderBody.serviceCharges = serviceCharges;

    const orderRes = await client.orders.create({
      idempotencyKey: idempotencyKey ?? crypto.randomUUID(),
      order: orderBody,
    });

    const order = orderRes.order;
    if (!order?.totalMoney?.amount) {
      return NextResponse.json(
        { ok: false, error: "Order total not calculated" },
        { status: 400 }
      );
    }

    const paymentRes = await client.payments.create({
      sourceId,
      idempotencyKey: idempotencyKey ?? crypto.randomUUID(),
      amountMoney: {
        amount: order.totalMoney.amount,
        currency: order.totalMoney.currency ?? "USD",
      },
      locationId: process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID!,
      orderId: order.id,
      buyerEmailAddress: email,
      shippingAddress,
    });

    const payment = paymentRes.payment;

    return NextResponse.json({
      ok: true,
      orderId: order.id,
      paymentId: payment?.id ?? null,
      status: payment?.status ?? null,
      totalAmount: order.totalMoney.amount.toString(), // <- stringify bigint
      currency: order.totalMoney.currency ?? "USD",
    });
  } catch (err: any) {
    if (err instanceof SquareError) {
      return NextResponse.json(
        { ok: false, error: err.errors?.[0]?.detail ?? "Square API error" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Unexpected error" },
      { status: 500 }
    );
  }
}
