import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  // This would be replaced with actual data fetching in a real application
  const galleryItems = [
    {
      id: 1,
      image: "/placeholder.svg?height=600&width=800",
      vehicle: "Tacoma",
      products: ["Front Bumper", "Rock Sliders"],
      year: "2021",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=600&width=800",
      vehicle: "4Runner",
      products: ["Front Bumper", "Roof Rack"],
      year: "2020",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=600&width=800",
      vehicle: "Tacoma",
      products: ["Rear Bumper", "Bed Rack"],
      year: "2019",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=600&width=800",
      vehicle: "4Runner",
      products: ["Rock Sliders", "Skid Plates"],
      year: "2022",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=600&width=800",
      vehicle: "Tacoma",
      products: ["Complete Package"],
      year: "2020",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=600&width=800",
      vehicle: "4Runner",
      products: ["Front Bumper", "Rear Bumper"],
      year: "2021",
    },
    {
      id: 7,
      image: "/placeholder.svg?height=600&width=800",
      vehicle: "Tacoma",
      products: ["Rock Sliders", "Roof Rack"],
      year: "2022",
    },
    {
      id: 8,
      image: "/placeholder.svg?height=600&width=800",
      vehicle: "4Runner",
      products: ["Complete Package"],
      year: "2019",
    },
  ]

  return (
    <div className="container px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">CUSTOMER BUILDS GALLERY</h1>
      <p className="text-gray-300 mb-8">
        Check out these amazing builds featuring our products. Get inspired for your next off-road adventure.
      </p>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="bg-zinc-800">
          <TabsTrigger value="all">All Builds</TabsTrigger>
          <TabsTrigger value="tacoma">Tacoma</TabsTrigger>
          <TabsTrigger value="4runner">4Runner</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div key={item.id} className="group">
                <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden mb-2">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.year} ${item.vehicle} with ${item.products.join(" and ")}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-bold text-white">
                  {item.year} {item.vehicle}
                </h3>
                <p className="text-gray-400 text-sm">{item.products.join(", ")}</p>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="tacoma" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems
              .filter((item) => item.vehicle === "Tacoma")
              .map((item) => (
                <div key={item.id} className="group">
                  <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden mb-2">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={`${item.year} ${item.vehicle} with ${item.products.join(" and ")}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-bold text-white">
                    {item.year} {item.vehicle}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.products.join(", ")}</p>
                </div>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="4runner" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems
              .filter((item) => item.vehicle === "4Runner")
              .map((item) => (
                <div key={item.id} className="group">
                  <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden mb-2">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={`${item.year} ${item.vehicle} with ${item.products.join(" and ")}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-bold text-white">
                    {item.year} {item.vehicle}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.products.join(", ")}</p>
                </div>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
