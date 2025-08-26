import { products, Product } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";
import ApparelProductDetail from "@/components/ApparelProductDetail";

export default function ProductDetailPage({
  params,
}: {
  params: { vehicle: string; generation: string; category: string; id: string };
}) {
  const { vehicle, generation, category, id } = params;

  // Direct lookup using the 4-level dictionary
  const product: Product | undefined =
    products[vehicle]?.[generation]?.[category]?.[id];

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  // If product has options (like t-shirts), use Apparel layout
  return product.options ? (
    <ApparelProductDetail product={product} />
  ) : (
    <ProductDetail product={product} />
  );
}
