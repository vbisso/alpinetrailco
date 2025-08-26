"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, ChevronDown } from "lucide-react";
import ProductShowcase from "@/components/product-showcase";
import { motion } from "framer-motion";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToVehicles = () => {
    const vehiclesSection = document.getElementById("vehicles-section");
    if (vehiclesSection) {
      vehiclesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4), rgba(0,0,0,0.7))",
            }}
          ></div>
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url('/images/hero-background-5.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              transform: `translateY(${scrollY * 0.4}px)`,
            }}
          ></div>
        </div>
        <div className="container relative z-20 px-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="mb-8 inline-block">
              <img
                src="/images/alpine-trail-logo-new.png"
                alt="Alpine Trail Co. Logo"
                className="h-32 mx-auto drop-shadow-2xl filter brightness-0 invert"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
              ALPINE TRAIL CO.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-md">
              Premium off-road accessories engineered for adventure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link href="/products" className="flex items-center">
                  SHOP PRODUCTS <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-24 flex justify-center"
          >
            <button
              onClick={scrollToVehicles}
              className="text-white flex flex-col items-center transition-all hover:text-gray-200"
            >
              <span className="mb-2">Explore</span>
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center mb-16"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                FEATURED PRODUCTS
              </h2>
              <div className="h-1 w-20 bg-charcoal-600"></div>
            </div>
            <Link
              href="/products"
              className="text-charcoal-600 hover:text-charcoal-700 flex items-center group transition-all duration-300"
            >
              View All{" "}
              <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
          <ProductShowcase />
        </div>
      </section>

      {/* Vehicle Categories */}
      <section id="vehicles-section" className="py-24 bg-gray-100">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              SHOP BY VEHICLE
            </h2>
            <div className="h-1 w-20 bg-charcoal-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Find the perfect off-road accessories designed specifically for
              your Toyota
            </p>
          </motion.div>

          {/* Tacoma Generations */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-8"
            >
              <h3 className="text-3xl font-bold text-gray-900">TACOMA</h3>
              <div className="h-px flex-grow bg-gray-300 ml-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  gen: "2ND GEN",
                  years: "2005-2015",
                  image: "/images/tacoma-2nd-gen-stock.avif",
                  link: "/vehicles/tacoma/2nd-gen",
                },
                {
                  gen: "3RD GEN",
                  years: "2016-2023",
                  image: "/images/tacoma-3rd-gen-hero.jpeg",
                  link: "/vehicles/tacoma/3rd-gen",
                },
                {
                  gen: "4TH GEN",
                  years: "2024-Present",
                  image: "/images/tacoma-4th-gen-stock.jpg",
                  link: "/vehicles/tacoma/4th-gen",
                },
              ].map((vehicle, index) => (
                <motion.div
                  key={vehicle.gen}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={vehicle.link} className="block group">
                    <div className="relative h-80 rounded-xl overflow-hidden mb-4 shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                      <img
                        src={vehicle.image || "/placeholder.svg"}
                        alt={`${vehicle.gen} Toyota Tacoma`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h4 className="text-2xl font-bold text-white mb-1">
                          {vehicle.gen}
                        </h4>
                        <p className="text-gray-200 mb-4">{vehicle.years}</p>
                        <div className="flex items-center text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                          <span>Shop Now</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 4Runner Generations */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-8"
            >
              <h3 className="text-3xl font-bold text-gray-900">4RUNNER</h3>
              <div className="h-px flex-grow bg-gray-300 ml-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  gen: "3RD GEN",
                  years: "1996-2002",
                  image: "/images/4runner-3rd-gen-stock.jpg",
                  link: "/vehicles/4runner/3rd-gen",
                },
                {
                  gen: "4TH GEN",
                  years: "2003-2009",
                  image: "/images/4runner-4th-gen-hero-1.jpeg",
                  link: "/vehicles/4runner/4th-gen",
                },
                {
                  gen: "5TH GEN",
                  years: "2010-2023",
                  image: "/images/4runner-5th-gen-stock.jpg",
                  link: "/vehicles/4runner/5th-gen",
                },
                {
                  gen: "6TH GEN",
                  years: "2024-Present",
                  image: "/images/4runner-6th-gen-stock.jpeg",
                  link: "/vehicles/4runner/6th-gen",
                },
              ].map((vehicle, index) => (
                <motion.div
                  key={vehicle.gen}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={vehicle.link} className="block group">
                    <div className="relative h-80 rounded-xl overflow-hidden mb-4 shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                      <img
                        src={vehicle.image || "/placeholder.svg"}
                        alt={`${vehicle.gen} Toyota 4Runner`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h4 className="text-2xl font-bold text-white mb-1">
                          {vehicle.gen}
                        </h4>
                        <p className="text-gray-200 mb-4">{vehicle.years}</p>
                        <div className="flex items-center text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                          <span>Shop Now</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tundra Generations */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-8"
            >
              <h3 className="text-3xl font-bold text-gray-900">TUNDRA</h3>
              <div className="h-px flex-grow bg-gray-300 ml-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link href="/vehicles/tundra/1st-gen" className="block group">
                  <div className="relative h-80 rounded-xl overflow-hidden mb-4 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                    <img
                      src="/images/tundra/toyota-tundra-1st-generation-pickup-truck.jpeg"
                      alt="1st Gen Toyota Tundra"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h4 className="text-2xl font-bold text-white mb-1">
                        1ST GEN
                      </h4>
                      <p className="text-gray-200 mb-4">2000-2006</p>
                      <div className="flex items-center text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                        <span>Shop Now</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                BUILT WITH PURPOSE
              </h2>
              <div className="h-1 w-20 bg-charcoal-600 mb-8"></div>
              <p className="text-gray-600 mb-6 text-lg">
                Our passion for off-roading drives us to create the highest
                quality bumpers, sliders, and accessories for your Tacoma and
                4Runner. Every product is designed, engineered, and manufactured
                in-house to ensure exceptional quality and performance.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                With years of experience in the field, we understand what it
                takes to build components that can withstand the toughest
                terrains while enhancing the capability and appearance of your
                vehicle.
              </p>
              <Button className="bg-charcoal-700 hover:bg-charcoal-600 text-white transition-all duration-300 rounded-full px-8 py-6 text-lg hover:shadow-lg hover:scale-105">
                <Link href="/about">LEARN MORE ABOUT US</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="/images/4runner-4th-gen-hero-2.jpeg"
                alt="Workshop fabrication"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/hero-background-5.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              JOIN THE ADVENTURE
            </h2>
            <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
            <p className="text-gray-300 mb-8 text-lg">
              Subscribe to our newsletter for exclusive offers, new product
              announcements, and build inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-4 bg-white border border-gray-300 rounded-full text-gray-900 flex-grow focus:outline-none focus:ring-2 focus:ring-charcoal-600"
              />
              <Button className="bg-charcoal-700 hover:bg-charcoal-600 text-white rounded-full px-8 py-4 transition-all duration-300 hover:shadow-lg">
                SUBSCRIBE
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
