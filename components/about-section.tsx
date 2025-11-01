export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img src="/modern-classroom-with-teacher-and-students-learnin.jpg" alt="Classroom scene" className="w-full h-96 object-cover" />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-primary">About Abc High School</h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Abc High School is dedicated to providing holistic education, nurturing creativity, discipline, and
              excellence. With modern facilities and passionate educators, we aim to shape responsible global citizens.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-secondary rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-primary">Excellence in Education</h3>
                  <p className="text-foreground/70">Rigorous curriculum and experienced faculty</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-secondary rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-primary">Holistic Development</h3>
                  <p className="text-foreground/70">Focus on academics, sports, and arts</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-secondary rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-primary">Modern Facilities</h3>
                  <p className="text-foreground/70">State-of-the-art infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
