import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="mb-4">
              <img src="/images/alpine-trail-logo-new.png" alt="Alpine Trail Co. Logo" className="h-12 filter brightness-0 invert" />
            </div>
            <p className="text-sm mb-4">
              Premium off-road accessories engineered for adventure. We design and fabricate high-quality bumpers, sliders, and more for your Tacoma and 4Runner.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/vehicles/tacoma" className="hover:text-white transition-colors">Tacoma</Link></li>
              <li><Link href="/vehicles/4runner" className="hover:text-white transition-colors">4Runner</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/warranty" className="hover:text-white transition-colors">Warranty</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="mailto:alpinetrailco1@gmail.com" className="text-red-500 hover:text-red-400 transition-colors">alpinetrailco1@gmail.com</a></li>
              <li><a href="tel:+19493320272" className="text-red-500 hover:text-red-400 transition-colors">(949) 332-0272</a></li>
            </ul>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Get updates on new products and promotions.</p>
            <div className="flex">
              <Input type="email" placeholder="Your email" className="bg-zinc-800 border-zinc-700 rounded-r-none focus:ring-red-500" />
              <Button type="submit" className="bg-red-600 hover:bg-red-700 rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Alpine Trail Co. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
