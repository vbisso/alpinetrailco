import Link from "next/link"
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <img
                src="/images/alpine-trail-logo-new.png"
                alt="Alpine Trail Co. Logo"
                className="h-10 mr-3 filter brightness-0 invert"
              />
              <span className="font-bold text-xl text-white">ALPINE TRAIL CO.</span>
            </Link>
            <div className="flex items-center mt-2 mb-4">
              <img src="/images/usa-flag.jpg" alt="Made in USA" className="h-4 w-6 mr-2 rounded shadow-sm" />
              <span className="text-sm font-semibold text-red-400">100% AMERICAN MADE</span>
            </div>
            <p className="mt-4">
              Premium off-road fabrication specializing in custom bumpers, sliders, and accessories for Toyota Tacoma
              and 4Runner vehicles.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://instagram.com" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="mailto:alpinetrailco1@gmail.com" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white transition-colors">
                  Returns & Warranty
                </Link>
              </li>
              <li>
                <Link href="/products/baja-designs" className="hover:text-white transition-colors">
                  Baja Designs Lighting
                </Link>
              </li>
            </ul>
          </div>

          {/* Vehicles */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">VEHICLES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/vehicles/tacoma/4th-gen" className="hover:text-white transition-colors">
                  Tacoma 4th Gen (2024+)
                </Link>
              </li>
              <li>
                <Link href="/vehicles/tacoma/3rd-gen" className="hover:text-white transition-colors">
                  Tacoma 3rd Gen (2016-2023)
                </Link>
              </li>
              <li>
                <Link href="/vehicles/4runner/6th-gen" className="hover:text-white transition-colors">
                  4Runner 6th Gen (2024+)
                </Link>
              </li>
              <li>
                <Link href="/vehicles/4runner/5th-gen" className="hover:text-white transition-colors">
                  4Runner 5th Gen (2010-2023)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">CONTACT US</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-white" />
                <div>
                  <span>
                    Teton County
                    <br />
                    Idaho
                  </span>
                  <div className="flex items-center mt-1">
                    <img src="/images/usa-flag.jpg" alt="USA" className="h-3 w-4 mr-1 rounded shadow-sm" />
                    <span className="text-xs text-red-400">USA</span>
                  </div>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-white" />
                <span>(949) 332-0272</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-white" />
                <span>alpinetrailco1@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SEMA Membership Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <img src="/images/usa-flag.jpg" alt="American Flag" className="h-6 w-8 mr-3 rounded shadow-sm" />
              <h4 className="text-white font-bold">INDUSTRY MEMBERSHIPS</h4>
              <img src="/images/usa-flag.jpg" alt="American Flag" className="h-6 w-8 ml-3 rounded shadow-sm" />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <img
                  src="/images/sema-tora-member-logo.png"
                  alt="SEMA TORA Member - Truck & Off-Road Alliance"
                  className="h-16 mx-auto mb-2"
                />
                <p className="text-xs text-gray-400 max-w-xs">
                  Member of SEMA's Truck & Off-Road Alliance, the premier network for off-road industry professionals
                </p>
              </div>
              <div className="text-center">
                <img
                  src="/images/sema-fln-member-logo.png"
                  alt="SEMA FLN Member - Future Leaders Network"
                  className="h-16 mx-auto mb-2"
                />
                <p className="text-xs text-gray-400 max-w-xs">
                  Member of SEMA's Future Leaders Network, developing the next generation of automotive aftermarket
                  leaders
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="mb-4 md:mb-0 flex items-center">
              <img src="/images/usa-flag.jpg" alt="Made in USA" className="h-4 w-6 mr-2 rounded shadow-sm" />
              <p>&copy; {new Date().getFullYear()} T4R Print LLC. All rights reserved. Made in USA.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/warranty" className="hover:text-white transition-colors">
                Warranty
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
