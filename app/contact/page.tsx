"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, vehicle: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        vehicle: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="container px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">CONTACT US</h1>
      <p className="text-gray-300 mb-8">
        Have questions about our products or need help with your build? We're here to help!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-zinc-800 p-8 rounded-lg">
          {isSubmitted ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
              <p className="text-gray-300 mb-6">
                Your message has been received. We'll get back to you as soon as possible.
              </p>
              <Button onClick={() => setIsSubmitted(false)} className="bg-red-600 hover:bg-red-700">
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-zinc-700 border-zinc-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-zinc-700 border-zinc-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  Phone (Optional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleChange}
                  className="bg-zinc-700 border-zinc-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="vehicle" className="block text-white font-medium mb-2">
                  Vehicle
                </label>
                <Select value={formState.vehicle} onValueChange={handleSelectChange}>
                  <SelectTrigger className="bg-zinc-700 border-zinc-600 text-white">
                    <SelectValue placeholder="Select your vehicle" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-700 border-zinc-600">
                    <SelectItem value="tacoma-4th-gen">Tacoma (4th Gen: 2024+)</SelectItem>
                    <SelectItem value="tacoma-3rd-gen">Tacoma (3rd Gen: 2016-2023)</SelectItem>
                    <SelectItem value="tacoma-2nd-gen">Tacoma (2nd Gen: 2005-2015)</SelectItem>
                    <SelectItem value="4runner-6th-gen">4Runner (6th Gen: 2024+)</SelectItem>
                    <SelectItem value="4runner-5th-gen">4Runner (5th Gen: 2010-2023)</SelectItem>
                    <SelectItem value="4runner-4th-gen">4Runner (4th Gen: 2003-2009)</SelectItem>
                    <SelectItem value="4runner-3rd-gen">4Runner (3rd Gen: 1996-2002)</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="bg-zinc-700 border-zinc-600 text-white min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div>
          <div className="bg-zinc-800 p-8 rounded-lg mb-8">
            <h2 className="text-xl font-bold text-white mb-6">CONTACT INFORMATION</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-red-500 mr-4 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white mb-1">Address</h3>
                  <p className="text-gray-300">
                    Teton County
                    <br />
                    Idaho
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-red-500 mr-4 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white mb-1">Phone</h3>
                  <p className="text-gray-300">(949) 332-0272</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-red-500 mr-4 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white mb-1">Email</h3>
                  <Link href="mailto:alpinetrailco1@gmail.com" className="text-gray-400 hover:text-red-500">
                    alpinetrailco1@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-red-500 mr-4 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white mb-1">Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 9am - 6pm
                    <br />
                    Saturday: 10am - 4pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800 p-8 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-6">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-white mb-1">Do you offer installation services?</h3>
                <p className="text-gray-300">
                  Yes, we offer professional installation at our facility. Contact us for scheduling and pricing.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">What is your shipping policy?</h3>
                <p className="text-gray-300">
                  We ship nationwide with free shipping on orders over $500. Most orders ship within 2-3 business days.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Do your products come with a warranty?</h3>
                <p className="text-gray-300">
                  Yes, all our products come with a lifetime warranty against manufacturing defects.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Can I customize my order?</h3>
                <p className="text-gray-300">
                  Contact us to discuss custom options for your specific build requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-12">
        <div className="bg-zinc-800 rounded-lg overflow-hidden h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184254.67609159776!2d-111.33329419744!3d43.72209369652204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5353a4a9b1d398e9%3A0x1deb8f8f9a2a157e!2sTeton%20County%2C%20ID!5e0!3m2!1sen!2sus!4v1716151200000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Alpine Trail Co. Location"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
