"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12 text-balance">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-primary mb-1">Address</h3>
                <p className="text-foreground/70">Abc High School, Bailey Road, Patna, Bihar, India</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-primary mb-1">Phone</h3>
                <p className="text-foreground/70">+91 1234567890</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-primary mb-1">Email</h3>
                <p className="text-foreground/70">info@abchighschool.in</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 rounded-lg overflow-hidden h-64 bg-border">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.7382887937786!2d85.14051231533965!3d25.605555477617487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed587e7e7e7e7d%3A0x7e7e7e7e7e7e7e7e!2sBailey%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-background p-8 rounded-lg border border-border">
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:border-secondary focus:outline-none transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:border-secondary focus:outline-none transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:border-secondary focus:outline-none transition resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
