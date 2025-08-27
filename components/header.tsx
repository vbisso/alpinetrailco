"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import CartIcon from "@/components/cart-icon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/images/alpine-trail-logo-new.png"
              alt="Alpine Trail Co."
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-gray-900">
                ALPINE TRAIL CO.
              </div>
              <div className="text-xs text-gray-600 -mt-1">
                OFF-ROAD FABRICATION
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Tacoma Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-red-600 font-medium transition-colors"
                onMouseEnter={() => setActiveDropdown("tacoma")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                TACOMA
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "tacoma" && (
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setActiveDropdown("tacoma")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href="/products/tacoma/2nd-gen"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                  >
                    2nd Gen (2005-2015)
                  </Link>
                  <Link
                    href="/products/tacoma/3rd-gen"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                  >
                    3rd Gen (2016-2023)
                  </Link>
                  <Link
                    href="/products/tacoma/4th-gen"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                  >
                    4th Gen (2024+)
                  </Link>
                </div>
              )}
            </div>

            {/* 4Runner Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-red-600 font-medium transition-colors"
                onMouseEnter={() => setActiveDropdown("4runner")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                4RUNNER
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "4runner" && (
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setActiveDropdown("4runner")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href="/products/4runner/3rd-gen"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                  >
                    3rd Gen (1996-2002)
                  </Link>
                  <Link
                    href="/products/4runner/4th-gen"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                  >
                    4th Gen (2003-2009)
                  </Link>
                  <Link
                    href="/products/4runner/5th-gen"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                  >
                    5th Gen (2010-2024)
                  </Link>
                  <Link
                    href="/products/4runner/6th-gen"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                  >
                    6th Gen (2025+)
                  </Link>
                </div>
              )}
            </div>

            {/* Tundra Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-red-600 font-medium transition-colors"
                onMouseEnter={() => setActiveDropdown("tundra")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                TUNDRA
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "tundra" && (
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setActiveDropdown("tundra")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href="/tundra/tundra/1st-gen"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                  >
                    1st Gen (2000-2006)
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              CONTACT
            </Link>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <CartIcon />

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <div>
                <button
                  onClick={() => handleDropdownToggle("mobile-tacoma")}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-red-600 font-medium py-2"
                >
                  TACOMA
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === "mobile-tacoma" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mobile-tacoma" && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link
                      href="/vehicles/tacoma/2nd-gen"
                      className="block text-sm text-gray-600 hover:text-red-600 py-1"
                    >
                      2nd Gen (2005-2015)
                    </Link>
                    <Link
                      href="/vehicles/tacoma/3rd-gen"
                      className="block text-sm text-gray-600 hover:text-red-600 py-1"
                    >
                      3rd Gen (2016-2023)
                    </Link>
                    <Link
                      href="/vehicles/tacoma/4th-gen"
                      className="block text-sm text-gray-600 hover:text-red-600 py-1"
                    >
                      4th Gen (2024+)
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => handleDropdownToggle("mobile-4runner")}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-red-600 font-medium py-2"
                >
                  4RUNNER
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === "mobile-4runner" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mobile-4runner" && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link
                      href="/vehicles/4runner/3rd-gen"
                      className="block text-sm text-gray-600 hover:text-red-600 py-1"
                    >
                      3rd Gen (1996-2002)
                    </Link>
                    <Link
                      href="/vehicles/4runner/4th-gen"
                      className="block text-sm text-gray-600 hover:text-red-600 py-1"
                    >
                      4th Gen (2003-2009)
                    </Link>
                    <Link
                      href="/vehicles/4runner/5th-gen"
                      className="block text-sm text-gray-600 hover:text-red-600 py-1"
                    >
                      5th Gen (2010-2024)
                    </Link>
                    <Link
                      href="/vehicles/4runner/6th-gen"
                      className="block text-sm text-gray-600 hover:text-red-600 py-1"
                    >
                      6th Gen (2025+)
                    </Link>
                  </div>
                )}
              </div>

              {/* Removed LIGHTING link from mobile */}
              <Link
                href="/gallery"
                className="block text-gray-700 hover:text-red-600 font-medium py-2"
              >
                GALLERY
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-red-600 font-medium py-2"
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-red-600 font-medium py-2"
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
