"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight, ShoppingCart, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/contexts/cart-context";
import { useToast } from "@/components/ui/use-toast";

const product = {
  id: "center-console-molle-panel",
  name: "4th Gen Toyota 4Runner Center Console MOLLE Panel",
  price: 129.99,
  images: [
    {
      id: 1,
      src: "/images/4runner-molle-panel-installed-1.jpeg",
      alt: "Center Console MOLLE Panel installed",
    },
    {
      id: 2,
      src: "/images/4runner-molle-panel-installed-2.jpeg",
      alt: "Center Console MOLLE Panel with gear",
    },
  ],
  description:
    "Add accessible storage to your center console with these easy-to-install CNC cut steel panels. Perfect for mounting pouches, holsters, phone holders, and other small gear, keeping your essentials within arm's reach.",
  includedHardware: [
    "2pc: Front Molle Panel (Driver's side + Passenger's Side)",
    "8pc: Stainless Steel Screws (4 per Panel)",
    "8pc: Nylon Spacers (4 per Panel)",
  ],
  installationGuide: [
    "Hold the panel in place to your liking on the driver/passenger side of the center console. Use a punch or Philips head screwdriver to apply pressure and mark the 4 mounting holes in the plastic.",
    "Once pilot holes are marked, you can remove the panel and start to hand drill the screws into the location you have just marked. Do not over-tighten or strip the plastic. Then remove the screws to prep for final installation.",
    "Once holes are marked, place the panel in line with the holes and place the provided spacers behind the panel. You can then start to thread the screws into the plastic with a screwdriver until all (4) are snug.",
  ],
  installationTip:
    "Do not use a power drill to avoid stripping the plastic. Hand tightening is recommended.",
};

export default function CenterConsoleMollePage() {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0].src,
      // category: product.category,
      quantity: 1,
    };
    addItem(itemToAdd);
    toast({
      title: "Added to cart",
      description: `${itemToAdd.name} has been added to your cart.`,
      action: (
        <Link href="/cart">
          <Button variant="outline">View Cart</Button>
        </Link>
      ),
    });
  };
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/vehicles/4runner/4th-gen">4th Gen 4Runner</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/vehicles/4runner/4th-gen/interior">Interior</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className={`relative aspect-video rounded-lg overflow-hidden border-2 ${
                    selectedImage.id === image.id
                      ? "border-red-600"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-3xl font-bold text-red-600 mb-6">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-700 mb-6">{product.description}</p>

            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full bg-red-600 hover:bg-red-700 text-white mb-8"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>

            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  Included Hardware
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {product.includedHardware.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  Installation Guide
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal list-inside space-y-4 text-gray-700">
                    {product.installationGuide.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                  <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded-r-lg">
                    <div className="flex">
                      <div className="py-1">
                        <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3" />
                      </div>
                      <div>
                        <p className="font-bold">Tip</p>
                        <p>{product.installationTip}</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
