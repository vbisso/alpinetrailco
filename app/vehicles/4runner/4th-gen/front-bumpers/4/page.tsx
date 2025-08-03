import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Truck, Shield, Clock, Zap, Flag } from "lucide-react"
import Link from "next/link"

export default function FourRunnerExpeditionBumperPage() {
  const product = {
    id: 4,
    name: "4th Gen 4Runner Expedition Front Bumper",
    price: "$1,499.99",
    images: [
      "/placeholder.svg?height=600&width=800&text=Product+Image",
      "/placeholder.svg?height=600&width=800&text=Product+Image",
      "/placeholder.svg?height=600&width=800&text=Product+Image",
      "/placeholder.svg?height=600&width=800&text=Product+Image",
    ],
    description:
      "Our premium expedition front bumper for the 4th Gen 4Runner is built for serious off-road adventures. Designed, cut, and welded entirely in-house in America from premium American steel. This heavy-duty bumper features integrated LED light mounts, a full skid plate, and robust recovery points. Designed for maximum protection and functionality while maintaining an aggressive expedition-ready appearance.",
    features: [
      "100% American made - designed, cut, and welded in-house",
      "Premium American steel construction with reinforced mounting points",
      "Powder-coated textured black finish for maximum durability",
      'Integrated LED light bar mount (up to 32")',
      "Multiple auxiliary light mounting points",
      'Heavy-duty 1/4" steel winch plate - compatible up to 12,000 lbs with integrated fairlead mount',
      'Heavy-duty recovery points with 3/4" shackle mounts',
      "Full-coverage skid plate for maximum protection",
      "Maintains factory fog light functionality",
      "Expedition-style design with aggressive styling",
      "Easy bolt-on installation with detailed instructions",
      "Compatible with factory air conditioning",
      "Includes all Grade 8 American-made mounting hardware",
      "Proudly fabricated in Teton County, Idaho",
    ],
    specs: {
      material: "Premium American Steel with reinforcements",
      winchPlate: '1/4" American Steel',
      finish: "Textured Powder Coat",
      weight: "165 lbs",
      winchCapacity: "12,000 lbs",
      lightBarSize: 'Up to 32"',
      compatibleYears: "2003-2009 Toyota 4Runner",
      leadTime: "6-8 weeks",
      madeIn: "100% American Made",
      fabricatedIn: "Teton County, Idaho",
      includedHardware: "Yes, Grade 8 American hardware included",
      approachAngle: "Optimized for off-road performance",
    },
    installationNotes:
      "Professional installation recommended due to weight and complexity. Detailed installation instructions included with all necessary hardware. May require removal of factory components. Compatible with most aftermarket winches and light bars.",
    compatibility: [
      "All 4th Gen 4Runner models (2003-2009)",
      "SR5, Sport, Limited trims",
      "2WD and 4WD variants",
      "Compatible with factory air conditioning",
      "Works with most aftermarket skid plates",
      "Compatible with aftermarket suspension systems",
    ],
  }

  return (
    <div className="container px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-charcoal-600">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/vehicles/4runner" className="hover:text-charcoal-600">
          4Runner
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/vehicles/4runner/4th-gen" className="hover:text-charcoal-600">
          4th Gen
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/vehicles/4runner/4th-gen/front-bumpers" className="hover:text-charcoal-600">
          Front Bumpers
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-600">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <p className="text-2xl text-charcoal-600 font-bold mb-6">{product.price}</p>

          {/* American Made Badge */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <Flag className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <h3 className="font-bold text-blue-800">100% AMERICAN MADE</h3>
                <p className="text-blue-700 text-sm">Designed, cut, and welded in-house in Teton County, Idaho</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-orange-600 mr-2" />
              <span className="text-orange-800 font-medium">Made to Order - 6-8 week lead time</span>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="space-y-6 mb-8">
            <div className="flex items-center text-gray-600">
              <Flag className="h-5 w-5 mr-2 text-blue-600" />
              <span>100% American made with premium American steel</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Truck className="h-5 w-5 mr-2 text-charcoal-600" />
              <span>Free shipping on orders over $500</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Shield className="h-5 w-5 mr-2 text-charcoal-600" />
              <span>Lifetime warranty against manufacturing defects</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Zap className="h-5 w-5 mr-2 text-charcoal-600" />
              <span>Heavy-duty 1/4" steel winch plate with full skid protection</span>
            </div>
          </div>

          <Button className="w-full bg-charcoal-700 hover:bg-charcoal-600 text-white text-lg py-6 mb-6">
            ORDER NOW
          </Button>

          <Tabs defaultValue="features" className="mt-8">
            <TabsList className="grid grid-cols-4 bg-gray-100">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="mt-4">
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="specs" className="mt-4">
              <div className="space-y-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2 border-b border-gray-200 py-2">
                    <span className="text-gray-500">
                      {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                    </span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="installation" className="mt-4">
              <p className="text-gray-600 mb-4">{product.installationNotes}</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Installation Overview:</h4>
                <ol className="list-decimal pl-5 space-y-1 text-gray-600">
                  <li>Remove factory bumper and components</li>
                  <li>Install mounting brackets using provided hardware</li>
                  <li>Mount bumper to brackets (requires 2+ people due to weight)</li>
                  <li>Connect fog lights (if equipped)</li>
                  <li>Install winch and light bar (optional)</li>
                  <li>Final inspection and testing</li>
                </ol>
              </div>
            </TabsContent>
            <TabsContent value="compatibility" className="mt-4">
              <p className="text-gray-600 mb-4">This bumper is compatible with:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {product.compatibility.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">
                  <strong>Note:</strong> Please verify your specific model year and trim level before ordering. Contact
                  us if you have any questions about compatibility.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
