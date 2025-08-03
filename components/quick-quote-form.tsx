"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Send } from "lucide-react"

export default function QuickQuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    generation: "",
    products: [],
    customRequirements: "",
    timeline: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <Card className="bg-white border-gray-200 shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="mb-4">
            <Calculator className="h-12 w-12 text-charcoal-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Received!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for your interest! We'll review your requirements and get back to you within 24 hours with a
              detailed quote.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-charcoal-600 text-charcoal-600 hover:bg-charcoal-600 hover:text-white"
            >
              Submit Another Quote
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white border-gray-200 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center text-2xl font-bold text-gray-900">
          <Calculator className="h-6 w-6 mr-2 text-charcoal-600" />
          Get a Custom Quote
        </CardTitle>
        <p className="text-gray-600">Tell us about your build and we'll provide a personalized quote</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="border-gray-300 focus:border-charcoal-600 focus:ring-charcoal-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="border-gray-300 focus:border-charcoal-600 focus:ring-charcoal-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="border-gray-300 focus:border-charcoal-600 focus:ring-charcoal-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
              <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                <SelectTrigger className="border-gray-300 focus:border-charcoal-600 focus:ring-charcoal-600">
                  <SelectValue placeholder="When do you need this?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">ASAP</SelectItem>
                  <SelectItem value="1-month">Within 1 month</SelectItem>
                  <SelectItem value="2-3-months">2-3 months</SelectItem>
                  <SelectItem value="flexible">Flexible timeline</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle *</label>
              <Select value={formData.vehicle} onValueChange={(value) => handleInputChange("vehicle", value)} required>
                <SelectTrigger className="border-gray-300 focus:border-charcoal-600 focus:ring-charcoal-600">
                  <SelectValue placeholder="Select your vehicle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tacoma">Toyota Tacoma</SelectItem>
                  <SelectItem value="4runner">Toyota 4Runner</SelectItem>
                  <SelectItem value="other">Other (specify in requirements)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Generation</label>
              <Select value={formData.generation} onValueChange={(value) => handleInputChange("generation", value)}>
                <SelectTrigger className="border-gray-300 focus:border-charcoal-600 focus:ring-charcoal-600">
                  <SelectValue placeholder="Select generation" />
                </SelectTrigger>
                <SelectContent>
                  {formData.vehicle === "tacoma" && (
                    <>
                      <SelectItem value="4th-gen">4th Gen (2024+)</SelectItem>
                      <SelectItem value="3rd-gen">3rd Gen (2016-2023)</SelectItem>
                      <SelectItem value="2nd-gen">2nd Gen (2005-2015)</SelectItem>
                    </>
                  )}
                  {formData.vehicle === "4runner" && (
                    <>
                      <SelectItem value="6th-gen">6th Gen (2024+)</SelectItem>
                      <SelectItem value="5th-gen">5th Gen (2010-2023)</SelectItem>
                      <SelectItem value="4th-gen">4th Gen (2003-2009)</SelectItem>
                      <SelectItem value="3rd-gen">3rd Gen (1996-2002)</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Products Interested In</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "Front Bumper",
                "Rear Bumper",
                "Rock Sliders",
                "Roof Rack",
                "Skid Plates",
                "Ladder",
                "Custom Work",
                "Complete Package",
              ].map((product) => (
                <label key={product} className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-charcoal-600 focus:ring-charcoal-600"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData((prev) => ({
                          ...prev,
                          products: [...prev.products, product],
                        }))
                      } else {
                        setFormData((prev) => ({
                          ...prev,
                          products: prev.products.filter((p) => p !== product),
                        }))
                      }
                    }}
                  />
                  <span className="ml-2 text-sm text-gray-700">{product}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Custom Requirements & Notes</label>
            <Textarea
              value={formData.customRequirements}
              onChange={(e) => handleInputChange("customRequirements", e.target.value)}
              placeholder="Tell us about your specific needs, modifications, or any special requirements..."
              className="border-gray-300 focus:border-charcoal-600 focus:ring-charcoal-600 min-h-[100px]"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-charcoal-700 hover:bg-charcoal-600 text-white py-6 text-lg"
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Get My Custom Quote
              </>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            * We'll respond as soon as possible with a detailed quote and timeline
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
