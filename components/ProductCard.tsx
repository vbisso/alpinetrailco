import Image from "next/image";
import Link from "next/link";

export interface ProductCardProps {
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
    <div
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white h-full"
      data-product-id={id}
    >
      {/* Image container with fixed aspect ratio */}
      <div className="aspect-w-3 aspect-h-2 bg-gray-200 sm:aspect-none sm:h-60 relative">
        {comingSoon ? (
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={400}
            height={400}
            className="h-full w-full object-cover object-center"
          />
        ) : href && href !== "#" ? (
          <Link href={href} aria-label={`View ${name}`}>
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={400}
              height={400}
              className="h-full w-full object-cover object-center"
            />
          </Link>
        ) : (
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={400}
            height={400}
            className="h-full w-full object-cover object-center"
          />
        )}

        {!inStock && (
          <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
            Out of Stock
          </div>
        )}

        {comingSoon && (
          <div className="absolute inset-0 bg-white/75 flex items-center justify-center">
            <span className="text-lg font-bold text-gray-900">Coming Soon</span>
          </div>
        )}
      </div>

      {/* Content area */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
          {comingSoon || !href || href === "#" ? (
            <span>{name}</span>
          ) : (
            <Link href={href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          )}
        </h3>

        {/* Lock description height to keep cards aligned */}
        {description && (
          <p className="text-sm text-gray-500 mb-4 line-clamp-3 min-h-[48px]">
            {description}
          </p>
        )}

        <div className="mt-auto">
          {price && (
            <p className="text-base font-semibold text-gray-900">{price}</p>
          )}
        </div>
      </div>
    </div>
  );
}
