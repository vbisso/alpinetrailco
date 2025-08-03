import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Truck, Shield, Clock, Zap } from "lucide-react"
import Link from "next/link"

export default function FourRunnerRockSlidersPage() {
  const product = {
    id: 1,
    name: "4th Gen 4Runner Heavy Duty Rock Sliders",
    price: "$899.99",
    images: [
      "/images/4runner-rock-sliders-1.jpeg",
      "/images/4runner-rock-sliders-2.jpeg",
      "/images/4runner-rock-sliders-installed-1.jpeg",
      "/images/4runner-rock-sliders-installed-2.jpeg",
    ],
    description:
      "Our heavy-duty rock sliders for the 4th Gen 4Runner provide maximum rocker panel protection while maintaining excellent ground clearance. Designed, cut, and welded entirely in-house in America from premium American steel tubing. Precision-engineered with integrated kick-out steps for easy vehicle access and built to withstand the most demanding off-road conditions.",
    features: [
      "100% American made - designed, cut, and welded in-house",
      "Premium American DOM steel tubing construction",
      "Powder-coated textured black finish for maximum durability",
      "Integrated kick-out step for easy access",
      "Body-mounted design for maximum strength",
      "Heavy-duty mounting brackets with reinforced steel",
      "Maintains factory ground clearance",
      "Designed for optimal approach and departure angles",
      "Easy bolt-on installation with no cutting required",
      "Compatible with factory running boards removal",
      "Includes all Grade 8 American-made mounting hardware",
      "Proudly fabricated in Teton County, Idaho",
    ],
    specs: {
      material: "Premium American DOM Steel Tubing",
      finish: "Textured Powder Coat",
      weight: "85 lbs (pair)",
      mounting: "Body-mounted to frame",
      stepHeight: '8" from ground',
      compatibleYears: "2003-2009 Toyota 4Runner",
      leadTime: "4-6 weeks",
      madeIn: "100% American Made",
      fabricatedIn: "Teton County, Idaho",
      includedHardware: "Yes, Grade 8 American hardware included",
      groundClearance: "Maintains factory clearance",
    },
    installationNotes:
      "Professional installation recommended but not required. Installation requires removal of factory running boards (if equipped). All necessary hardware and detailed instructions included.",
    compatibility: [
      "All 4th Gen 4Runner models (2003-2009)",
      "SR5, Sport, Limited trims",
      "2WD and 4WD variants",
      "Compatible with most aftermarket bumpers",
      "Works with factory and aftermarket skid plates",
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
        <Link href="/vehicles/4runner/4th-gen/rock-sliders" className="hover:text-charcoal-600">
          Rock Sliders
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
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 relative">
            <div className="absolute top-2 right-2">
              <img src="/images/usa-flag.jpg" alt="American Flag" className="h-6 w-8 rounded shadow-sm" />
            </div>
            <div className="flex items-center">
              <img src="/images/usa-flag.jpg" alt="American Flag" className="h-6 w-8 mr-3 rounded shadow-sm" />
              <div>
                <h3 className="font-bold text-blue-800">100% AMERICAN MADE</h3>
                <p className="text-blue-700 text-sm">Designed, cut, and welded in-house in Teton County, Idaho</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-orange-600 mr-2" />
              <span className="text-orange-800 font-medium">Made to Order - 4-6 week lead time</span>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="space-y-6 mb-8">
            <div className="flex items-center text-gray-600">
              <img src="/images/usa-flag.jpg" alt="American Flag" className="h-5 w-7 mr-2 rounded shadow-sm" />
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
              <span>Body-mounted for maximum strength and protection</span>
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
                  <li>Remove factory running boards (if equipped)</li>
                  <li>Position rock sliders and mark mounting points</li>
                  <li>Install mounting brackets using provided hardware</li>
                  <li>Mount rock sliders to brackets</li>
                  <li>Torque all hardware to specification</li>
                  <li>Final inspection and testing</li>
                </ol>
              </div>
            </TabsContent>
            <TabsContent value="compatibility" className="mt-4">
              <p className="text-gray-600 mb-4">These rock sliders are compatible with:</p>
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
