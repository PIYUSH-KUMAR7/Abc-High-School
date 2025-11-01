"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function HeroBanner() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative h-screen text-primary-foreground overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: 'url("/images/hero-bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      <div
        className={`relative z-10 max-w-4xl mx-auto px-4 text-center transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-white drop-shadow-lg">
          Welcome to Abc High School
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/95 drop-shadow-md">
          Shaping young minds for a brighter tomorrow.
        </p>
        <button
          onClick={scrollToAbout}
          className="bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
        >
          Explore Now
        </button>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#pattern)" />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-secondary" />
      </div>
    </section>
  )
}
