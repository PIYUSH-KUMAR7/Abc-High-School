import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-primary text-sm">
                ABC
              </div>
              <span className="font-bold">Abc High School</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">Shaping young minds for a brighter tomorrow.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-secondary transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#academics" className="hover:text-secondary transition">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="#facilities" className="hover:text-secondary transition">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="#admission" className="hover:text-secondary transition">
                  Admission
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>Bailey Road, Patna</li>
              <li>+91 1234567890</li>
              <li>info@abchighschool.in</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p>&copy; 2025 Abc High School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
