import { products, Product } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";
import ApparelProductDetail from "@/components/ApparelProductDetail";

export default function ProductDetailPage({
  params,
}: {
  params: { vehicle: string; generation: string; id: string };
}) {
  const { vehicle, generation, id } = params;

  const genData = products[vehicle]?.[generation];
  if (!genData) {
    return <div className="p-10 text-center">Generation not found</div>;
  }

  let product: Product | undefined;
  for (const categoryKey of Object.keys(genData.categories)) {
    const categoryProducts = genData.categories[categoryKey];
    if (categoryProducts[id]) {
      product = categoryProducts[id];
      break;
    }
  }

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return product.options ? (
    <ApparelProductDetail product={product} />
  ) : (
    <ProductDetail product={product} />
  );
}
