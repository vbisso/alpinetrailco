import { products, Product } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";
import ApparelProductDetail from "@/components/ApparelProductDetail";

export default function ProductDetailPage({
  params,
}: {
  params: { vehicle: string; category: string; id: string };
}) {
  const { vehicle, category, id } = params;
  const product: Product | undefined = products[vehicle]?.[category]?.[id];

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  // If product has options (like t-shirts), use Apparel layout
  if (product.options) {
    return <ApparelProductDetail product={product} />;
  }

  return <ProductDetail product={product} />;
}
