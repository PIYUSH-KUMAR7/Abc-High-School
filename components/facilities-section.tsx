import { Zap, Microscope, Trophy, BookMarked, Laptop, Music } from "lucide-react"

const facilities = [
  { icon: Zap, name: "Smart Classrooms", description: "Technology-enabled learning spaces" },
  { icon: Microscope, name: "Science Labs", description: "Well-equipped laboratory facilities" },
  { icon: Trophy, name: "Sports & Athletics", description: "Olympic-size facilities and grounds" },
  { icon: BookMarked, name: "Library", description: "Extensive collection of resources" },
  { icon: Laptop, name: "Computer Lab", description: "Advanced computing infrastructure" },
  { icon: Music, name: "Art & Music Room", description: "Creative expression spaces" },
]

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-4 text-balance">World-Class Facilities</h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Our campus is equipped with modern infrastructure to support student learning and development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon
            return (
              <div
                key={index}
                className="bg-primary/5 rounded-lg p-6 border border-border hover:border-secondary transition-colors"
              >
                <Icon className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold text-primary mb-2">{facility.name}</h3>
                <p className="text-sm text-foreground/70">{facility.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
