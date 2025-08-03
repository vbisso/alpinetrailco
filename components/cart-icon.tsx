"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

export default function CartIcon() {
  const { state } = useCart()

  return (
    <Link href="/cart" className="relative p-2 text-gray-700 hover:text-red-600 transition-colors">
      <ShoppingCart className="h-6 w-6" />
      {state.itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {state.itemCount > 99 ? "99+" : state.itemCount}
        </span>
      )}
    </Link>
  )
}
