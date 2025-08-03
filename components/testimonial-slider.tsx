"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "John D.",
    vehicle: "2020 Tacoma TRD Pro",
    content:
      "The quality of the front bumper exceeded my expectations. Installation was straightforward and the customer service team was incredibly helpful with my questions.",
    rating: 5,
  },
  {
    id: 2,
    name: "Amanda S.",
    vehicle: "2019 4Runner SR5",
    content:
      "These rock sliders have saved my vehicle multiple times on the trails. Worth every penny for the protection and they look great too!",
    rating: 5,
  },
  {
    id: 3,
    name: "Mike R.",
    vehicle: "2021 Tacoma Off-Road",
    content:
      "From ordering to installation, the whole process was smooth. The rear bumper with swing-outs has been a game-changer for my overlanding setup.",
    rating: 4,
  },
  {
    id: 4,
    name: "Sarah T.",
    vehicle: "2018 4Runner TRD",
    content:
      "I've had products from several companies, but the build quality here is on another level. My front bumper has taken some serious hits without any issues.",
    rating: 5,
  },
]

// Update the company name in the testimonials
const updatedTestimonials = testimonials.map((testimonial) => ({
  ...testimonial,
  content: testimonial.content.replace(/OffroadForge/g, "Alpine Trail Co."),
}))

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 for right, -1 for left

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % updatedTestimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Card className="bg-white border-gray-200 overflow-hidden rounded-xl shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i < updatedTestimonials[currentIndex].rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 italic text-lg">"{updatedTestimonials[currentIndex].content}"</p>
                <div className="inline-block bg-gray-100 px-6 py-3 rounded-full">
                  <p className="font-bold text-gray-900 text-lg">{updatedTestimonials[currentIndex].name}</p>
                  <p className="text-gray-500 text-sm">{updatedTestimonials[currentIndex].vehicle}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-3">
        {updatedTestimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-charcoal-600 w-8" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
