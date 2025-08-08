import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  price?: string;
  image?: string;
  category?: string;
  href?: string;
  description?: string;
  inStock?: boolean;
  comingSoon?: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
  href = "#",
  description,
  inStock = true,
  comingSoon = false,
}: ProductCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-w-3 aspect-h-2 bg-gray-200 sm:aspect-none sm:h-60 relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={400}
          height={400}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />

        {/* Out of Stock badge */}
        {!inStock && (
          <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
            Out of Stock
          </div>
        )}

        {/* Coming Soon overlay */}
        {comingSoon && (
          <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
            <span className="text-lg font-bold text-gray-900">Coming Soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col space-y-2 p-4">
        {category && (
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            {category}
          </p>
        )}
        <h3 className="text-sm font-medium text-gray-900">
          <Link href={href}>
            <span aria-hidden="true" className="absolute inset-0" />
            {name}
          </Link>
        </h3>
        {description && <p className="text-sm text-gray-500">{description}</p>}
        <div className="flex flex-1 flex-col justify-end">
          {price && (
            <p className="text-base font-semibold text-gray-900">{price}</p>
          )}
        </div>
      </div>
    </div>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// interface ProductCardProps {
//   product: {
//     id: string;
//     name: string;
//     price?: string;
//     image?: string;
//     category?: string;
//     href?: string;
//     description?: string;
//     inStock?: boolean;
//   };
//   comingSoon?: boolean;
// }

// export default function ProductCard({
//   product,
//   comingSoon = false,
// }: ProductCardProps) {
//   const img = product.image || "/placeholder.svg";
//   const canLink = !!product.href && !comingSoon; // don’t link if coming soon or href missing

//   return (
//     <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
//       <div className="aspect-w-3 aspect-h-2 bg-gray-200 sm:aspect-none sm:h-60">
//         <Image
//           src={img}
//           alt={product.name}
//           width={400}
//           height={400}
//           className="h-full w-full object-cover object-center sm:h-full sm:w-full"
//         />
//       </div>

//       <div className="flex flex-1 flex-col space-y-2 p-4">
//         <h3 className="text-sm font-medium text-gray-900">
//           {canLink ? (
//             <Link href={product.href!}>
//               <span aria-hidden="true" className="absolute inset-0" />
//               {product.name}
//             </Link>
//           ) : (
//             <span>{product.name}</span>
//           )}
//         </h3>

//         {product.description && (
//           <p className="text-sm text-gray-500">{product.description}</p>
//         )}

//         <div className="flex flex-1 flex-col justify-end">
//           {product.price ? (
//             <p className="text-base font-semibold text-gray-900">
//               {product.price}
//             </p>
//           ) : comingSoon ? (
//             <p className="text-sm text-gray-500">Pricing to be announced</p>
//           ) : null}
//         </div>
//       </div>

//       {comingSoon && (
//         <div className="absolute inset-0 bg-white/75 flex items-center justify-center">
//           <span className="text-lg font-bold text-gray-900">Coming Soon</span>
//         </div>
//       )}
//     </div>
//   );
// }
