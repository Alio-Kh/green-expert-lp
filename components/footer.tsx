import Image from "next/image";
import Link from "next/link";
import {
  Headset,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { services } from "@/lib/services-data";

export function Footer() {
  return (
    <footer className="bg-[#1a2821]">
      {/* Accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#9bbb2d] to-transparent" />

      <div className="border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
            <div>
              <Image
                src="https://res.cloudinary.com/ddpoq8ufw/image/upload/v1734908167/Green%20Expert/u137zv9bapnk6uaeulhq.png"
                alt="Green Expert Logo"
                width={150}
                height={40}
                className="h-10 w-auto object-contain brightness-125 saturate-125"
              />
              <p className="mt-4 max-w-xs text-sm text-white/70">
                Votre partenaire de confiance en aménagement paysager depuis
                plus de deux décennies
              </p>
            </div>

            <div>
              <div className="font-medium">Contact</div>
              <div className="mt-4 space-y-2 text-sm text-white/70">
                <a
                  href="tel:+212661967903"
                  className="flex items-center gap-2 rounded transition-colors hover:text-[#9bbb2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9bbb2d]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2821]"
                >
                  <Phone className="h-5 w-5 min-w-5" /> +212 661-967903
                </a>
                <a
                  href="tel:+212530312466"
                  className="flex items-center gap-2 rounded transition-colors hover:text-[#9bbb2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9bbb2d]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2821]"
                >
                  <Headset className="h-5 w-5 min-w-5" /> +212 530-312466
                </a>
                <a
                  href="mailto:contact@greenexpert.ma"
                  className="flex items-center gap-2 rounded transition-colors hover:text-[#9bbb2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9bbb2d]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2821]"
                >
                  <Mail className="h-5 w-5 min-w-5" /> contact@greenexpert.ma
                </a>
                <p className="flex items-center gap-2 text-sm">
                  <MapPin className="h-5 w-5 min-w-5" /> Résidence Assafae 05
                  Imm 41 Appt 12, Al Quods, Laayayda - Salé
                </p>
              </div>
            </div>

            <div>
              <div className="font-medium">Services</div>
              <div className="mt-4 space-y-2 text-sm text-white/70">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block rounded transition-colors hover:text-[#9bbb2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9bbb2d]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2821]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="font-medium">Suivez-nous</div>
              <div className="mt-4 space-y-4">
                <a
                  href="https://www.instagram.com/greenexpertmaroc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded text-sm text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:text-[#9bbb2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9bbb2d]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2821]"
                >
                  <Instagram className="h-6 w-6" />
                  <span>@greenexpertmaroc</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/greenexpert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded text-sm text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:text-[#9bbb2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9bbb2d]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2821]"
                >
                  <Linkedin className="h-6 w-6" />
                  <span>Green Expert</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
            © {new Date().getFullYear()} Green Expert. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}
