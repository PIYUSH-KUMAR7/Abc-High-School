import { BookOpen, Microscope, GraduationCap } from "lucide-react"

const academicPrograms = [
  {
    icon: BookOpen,
    title: "Primary Education",
    description: "Foundational years focusing on core subjects and creative expression",
  },
  {
    icon: Microscope,
    title: "Secondary Education",
    description: "Specialized learning with practical laboratory experience",
  },
  {
    icon: GraduationCap,
    title: "Senior Secondary Programs",
    description: "Advanced curriculum preparing students for higher education",
  },
]

export default function AcademicsSection() {
  return (
    <section id="academics" className="py-20 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-4 text-balance">Our Academic Programs</h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          We offer comprehensive educational programs designed to develop critical thinking and knowledge
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {academicPrograms.map((program, index) => {
            const Icon = program.icon
            return (
              <div
                key={index}
                className="bg-background rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow border border-border"
              >
                <Icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">{program.title}</h3>
                <p className="text-foreground/70">{program.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
