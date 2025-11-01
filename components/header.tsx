"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Facilities", href: "#facilities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Admission", href: "#admission" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-primary">
            ABC
          </div>
          <span className="font-bold text-lg">Abc High School</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-secondary transition-colors">
              {item.name}
            </Link>
          ))}
          <button className="bg-secondary text-primary px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition">
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-primary/20 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block hover:text-secondary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="w-full bg-secondary text-primary px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition">
            Apply Now
          </button>
        </div>
      )}
    </header>
  )
}
