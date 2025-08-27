import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";

export default function VehiclePage({
  params,
}: {
  params: { vehicle: string };
}) {
  const { vehicle } = params;

  const vehicleData = products[vehicle];
  if (!vehicleData) {
    return <div className="p-10 text-center">Vehicle not found</div>;
  }

  // Hero background (fallback: generic stock image per vehicle)
  const heroImage =
    vehicle === "tundra"
      ? "/images/tundra/toyota-tundra-1st-generation-pickup-truck.jpeg"
      : vehicle === "4runner"
      ? "/images/4runner/4runner-4th-gen-stock.jpg"
      : vehicle === "tacoma"
      ? "/images/tacoma/tacoma-3rd-gen-trd-stock.webp"
      : "/placeholder.svg";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src={heroImage}
            alt={vehicle}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-20 px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight uppercase">
            TOYOTA {vehicle}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Premium Off-Road Accessories for Every Generation
          </p>
        </div>
      </section>

      {/* Generations */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              SELECT YOUR GENERATION
            </h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
            <p className="text-lg text-gray-600 pt-4">
              Choose your {vehicle} generation to explore our custom-engineered
              accessories designed specifically for your truck.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(vehicleData).map(([generationKey, genData]) => {
              const displayGen = generationKey.replace("-", " ").toUpperCase();

              // generation-level image fallback
              const genImage =
                genData.image ||
                "/images/generic/offroad-truck-placeholder.jpeg";

              // detect whether there are products inside this generation
              const hasProducts =
                Object.keys(genData.categories || {}).length > 0;

              return (
                <Link
                  key={generationKey}
                  href={`/products/${vehicle}/${generationKey}`}
                  className="block group"
                >
                  <Card className="bg-zinc-800 border-zinc-700 overflow-hidden hover:scale-[1.02] transition-all duration-300">
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={genImage}
                        alt={`${displayGen} ${vehicle}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            hasProducts ? "text-green-400" : "text-yellow-400"
                          } bg-black/70`}
                        >
                          {hasProducts ? "Available" : "Coming Soon"}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                          {displayGen} {vehicle.toUpperCase()}
                        </h3>
                        <div className="flex items-center text-gray-400">
                          {/* <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">Years TBD</span> */}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">
                        {hasProducts
                          ? `Browse our accessories for the ${displayGen} ${vehicle}.`
                          : `Accessories for the ${displayGen} ${vehicle} are coming soon.`}
                      </p>
                      <div className="flex items-center text-red-500 group-hover:text-red-400 transition-colors">
                        <span className="font-medium">
                          {hasProducts ? "Explore Products" : "Stay Tuned"}
                        </span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
