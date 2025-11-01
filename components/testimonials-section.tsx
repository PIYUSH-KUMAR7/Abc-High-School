import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Parent",
    image: "/smiling-professional-parent-portrait.jpg",
    quote: "Abc High School helped my child grow in confidence and knowledge. The teachers are truly dedicated!",
  },
  {
    name: "Priya Sharma",
    role: "Parent",
    image: "/smiling-woman-parent-portrait.jpg",
    quote: "The holistic approach to education here is exceptional. My daughter loves coming to school.",
  },
  {
    name: "Arjun Patel",
    role: "Student",
    image: "/smiling-young-student-portrait.jpg",
    quote: "Great facilities and caring teachers. This school truly prepares us for the future.",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12 text-balance">What People Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-primary/5 rounded-lg p-8 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-foreground/70">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
