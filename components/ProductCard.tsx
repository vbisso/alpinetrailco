import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProductCardProps {
  id: string
  name: string
  price: string
  image: string
  description?: string
  badge?: string
  href: string
  category?: string
  inStock?: boolean
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  description,
  badge,
  href,
  category,
  inStock = true,
}: ProductCardProps) {
  return (
    <Link href={href} className={`block ${!inStock ? "pointer-events-none" : ""}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {badge && <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-700">{badge}</Badge>}
          {!inStock && (
            <Badge variant="secondary" className="absolute top-2 right-2">
              Out of Stock
            </Badge>
          )}
        </div>

        <CardContent className="p-4">
          <div className="space-y-2">
            {category && <p className="text-sm text-muted-foreground uppercase tracking-wide">{category}</p>}
            <h3 className="font-semibold text-lg leading-tight group-hover:text-red-600 transition-colors">{name}</h3>
            {description && <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>}
            <p className="text-xl font-bold text-red-600">{price}</p>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <div className="w-full text-center text-sm text-muted-foreground group-hover:text-red-600 transition-colors">
            {inStock ? "Click to view details →" : "Notify when available"}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
