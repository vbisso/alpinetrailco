import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TundraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="/images/tundra/toyota-tundra-1st-generation-pickup-truck.jpeg"
            alt="Toyota Tundra"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-20 px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            TOYOTA TUNDRA
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Premium off-road accessories for your Toyota Tundra
          </p>
        </div>
      </section>

      {/* Generations */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              CHOOSE YOUR GENERATION
            </h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link href="/vehicles/tundra/1st-gen" className="block group">
              <div className="relative h-80 rounded-xl overflow-hidden mb-4 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img
                  src="/images/tundra/toyota-tundra-1st-generation-pickup-truck.jpeg"
                  alt="1st Gen Toyota Tundra"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    1ST GEN
                  </h3>
                  <p className="text-gray-200 mb-4">2000-2006</p>
                  <div className="flex items-center text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                    <span>Shop Now</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
