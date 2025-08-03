import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Wrench, Shield, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ABOUT ALPINE TRAIL CO.</h1>
          <div className="flex items-center justify-center mb-6">
            <img src="/images/usa-flag.jpg" alt="American Flag" className="h-8 w-12 mr-3 rounded shadow-sm" />
            <span className="text-2xl font-bold text-gray-900">100% AMERICAN MADE</span>
            <img src="/images/usa-flag.jpg" alt="American Flag" className="h-8 w-12 ml-3 rounded shadow-sm" />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every single product is designed, cut, and welded entirely in-house at our facility in Teton County, Idaho
          </p>
        </div>

        {/* Hero Image with Flag Overlay */}
        <div className="relative rounded-lg overflow-hidden mb-10 h-64">
          <img
            src="/images/hero-background-4.jpg"
            alt="Alpine Trail Co. workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <img src="/images/usa-flag.jpg" alt="Made in USA" className="h-12 w-16 rounded shadow-lg" />
          </div>
        </div>

        {/* Industry Credentials */}
        <section className="mb-12">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center relative">
            <div className="absolute top-4 left-4">
              <img src="/images/usa-flag.jpg" alt="American Flag" className="h-8 w-12 rounded shadow-sm opacity-75" />
            </div>
            <div className="flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-charcoal-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">INDUSTRY RECOGNIZED</h2>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <img src="/images/sema-member-logo.png" alt="SEMA Member" className="h-24 mx-auto mb-4" />
                <p className="text-gray-600 max-w-xs">
                  Proud member of the Specialty Equipment Market Association, the premier trade association for the
                  automotive aftermarket industry.
                </p>
              </div>
              <div className="text-center">
                <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden">
                  <img src="/images/usa-flag.jpg" alt="Made in USA Flag" className="w-full h-full object-cover" />
                </div>
                <p className="text-gray-600 max-w-xs">
                  <span className="font-bold text-red-600">Made in USA</span> certified facility with complete in-house
                  manufacturing capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">OUR STORY</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2024 by a passionate off-road enthusiast, Alpine Trail Co. began with a simple mission: to create
            high-quality, functional off-road accessories that could withstand the toughest terrains while enhancing the
            capability and appearance of Toyota trucks and SUVs.
          </p>
          <p className="text-gray-600 mb-4">
            As a sole proprietor and fabricator, every product is personally designed, cut, and welded with meticulous
            attention to detail. This hands-on approach ensures that each piece meets the highest standards of quality
            and craftsmanship. Every product is tested extensively in real-world conditions before it reaches customers.
          </p>
          <p className="text-gray-600">
            The focus on Toyota Tacomas and 4Runners allows for specialization and perfection of designs specifically
            for these vehicles, ensuring the best fit, function, and appearance possible - all while keeping production{" "}
            <span className="font-bold text-red-600">100% in America</span> with personal oversight of every step.
          </p>
        </section>

        {/* Our Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">OUR IN-HOUSE PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="text-charcoal-600 font-bold text-xl mb-2">01. DESIGN</div>
              <p className="text-gray-600">
                Every product begins with careful in-house design, considering protection, clearance, weight, and
                aesthetics. We use advanced 3D modeling to ensure perfect fitment for each specific vehicle generation.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="text-charcoal-600 font-bold text-xl mb-2">02. FABRICATION</div>
              <p className="text-gray-600">
                Using <span className="font-semibold text-red-600">premium American steel</span> and state-of-the-art
                plasma cutting equipment, each component is personally cut, bent, and welded with precision and care -
                all in the <span className="font-semibold text-red-600">Teton County facility</span> with complete
                hands-on control.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="text-charcoal-600 font-bold text-xl mb-2">03. FINISHING</div>
              <p className="text-gray-600">
                The multi-stage finishing process includes thorough cleaning, premium powder coating, and personal
                quality control inspection before shipping - ensuring every product meets the highest{" "}
                <span className="font-semibold text-red-600">American-made standards</span>.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden h-80">
            <img
              src="/images/hero-background-2.jpg"
              alt="Alpine Trail Co. fabrication process"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">WHY CHOOSE ALPINE TRAIL CO.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex items-start">
              <img
                src="/images/usa-flag.jpg"
                alt="American Flag"
                className="h-6 w-8 mr-3 flex-shrink-0 mt-0.5 rounded shadow-sm"
              />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">100% American Made</h3>
                <p className="text-gray-600">
                  All products designed, cut, welded, and shipped from our Idaho facility using American steel
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Wrench className="h-6 w-6 text-charcoal-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Personal Craftsmanship</h3>
                <p className="text-gray-600">
                  Every product is personally designed, fabricated, and inspected for consistent quality
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-charcoal-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Premium Materials</h3>
                <p className="text-gray-600">American steel with high-grade hardware and professional powder coating</p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-charcoal-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Lifetime Warranty</h3>
                <p className="text-gray-600">Confidence in our products with industry-leading warranty coverage</p>
              </div>
            </div>
            <div className="flex items-start">
              <Award className="h-6 w-6 text-charcoal-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Industry Recognized</h3>
                <p className="text-gray-600">SEMA member with proven expertise in automotive aftermarket products</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-charcoal-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Direct Owner Support</h3>
                <p className="text-gray-600">Personal support from the owner/fabricator who builds every product</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-100 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">READY TO UPGRADE YOUR RIG?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Browse our selection of premium American-made off-road accessories designed specifically for your Toyota
            Tacoma or 4Runner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-charcoal-700 hover:bg-charcoal-600">
              <Link href="/vehicles/tacoma">SHOP TACOMA</Link>
            </Button>
            <Button className="bg-charcoal-700 hover:bg-charcoal-600">
              <Link href="/vehicles/4runner">SHOP 4RUNNER</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
