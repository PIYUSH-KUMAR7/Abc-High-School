export default function AdmissionSection() {
  return (
    <section id="admission" className="py-20 bg-secondary text-secondary-foreground">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-4xl font-bold text-balance">Admissions Open for 2025–26</h2>
        <p className="text-lg opacity-90">
          Enroll now and give your child the best start in their educational journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
            Apply Now
          </button>
          <button className="border-2 border-current px-8 py-3 rounded-lg font-semibold hover:bg-secondary-foreground/10 transition">
            Download Prospectus
          </button>
        </div>
      </div>
    </section>
  )
}
