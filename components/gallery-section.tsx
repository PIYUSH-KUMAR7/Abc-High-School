const galleryImages = [
  { src: "/students-learning-in-modern-classroom.jpg", alt: "Classroom learning" },
  { src: "/school-sports-event-and-athletics.jpg", alt: "Sports event" },
  { src: "/cultural-program-and-dance-performance.jpg", alt: "Cultural event" },
  { src: "/students-in-science-lab-with-experiments.jpg", alt: "Science lab" },
  { src: "/library-with-students-studying.jpg", alt: "Library" },
  { src: "/art-class-and-creative-work.jpg", alt: "Art class" },
  { src: "/school-campus-building-exterior.jpg", alt: "Campus" },
  { src: "/students-group-photo-outdoors.jpg", alt: "School community" },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12 text-balance">Campus Life</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
