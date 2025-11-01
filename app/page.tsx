import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import AboutSection from "@/components/about-section"
import AcademicsSection from "@/components/academics-section"
import FacilitiesSection from "@/components/facilities-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import AdmissionSection from "@/components/admission-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <AboutSection />
      <AcademicsSection />
      <FacilitiesSection />
      <GallerySection />
      <TestimonialsSection />
      <AdmissionSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
