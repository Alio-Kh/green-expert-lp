import Image from "next/image";
import { Headset, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1a2821] py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Image
              src="https://res.cloudinary.com/ddpoq8ufw/image/upload/v1734908167/Green%20Expert/u137zv9bapnk6uaeulhq.png"
              alt="Green Expert Logo"
              width={150}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-4 text-sm text-white/70">
              Votre partenaire de confiance en aménagement paysager depuis plus
              de deux décennies
            </p>
          </div>
          <div>
            <div className="font-medium">Contact</div>
            <div className="mt-4 space-y-2 text-sm text-white/70">
              <a
                href="tel:+212661967903"
                className="flex items-center gap-2 hover:text-[#9bbb2d] transition-colors"
              >
                <Phone className="h-5 w-5" /> +212 661-967903
              </a>
              <a
                href="tel:+212661967903"
                className="flex items-center gap-2 hover:text-[#9bbb2d] transition-colors"
              >
                <Headset className="h-5 w-5" /> +212 530-312466
              </a>
              <a
                href="mailto:contact@greenexpert.ma"
                className="flex items-center gap-2 hover:text-[#9bbb2d] transition-colors"
              >
                <Mail className="h-5 w-5" /> contact@greenexpert.ma
              </a>
              <p className="text-sm">
                Résidence Assafae 05 Imm 41 Appt 12, Al Quods, Laayayda - Salé
              </p>
            </div>
          </div>
          <div>
            <div className="font-medium">Services</div>
            <div className="mt-4 space-y-2 text-sm text-white/70">
              <p>Design Paysager</p>
              <p>Systèmes d&apos;Irrigation</p>
              <p>Éclairage Extérieur</p>
              <p>Maintenance</p>
            </div>
          </div>
          <div>
            <div className="font-medium">Suivez-nous</div>
            <div className="mt-4 space-y-4">
              <a
                href="https://www.instagram.com/greenexpertmaroc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[#9bbb2d] transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>@greenexpertmaroc</span>
              </a>
              <a
                href="https://www.linkedin.com/company/greenexpert"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[#9bbb2d] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>Green Expert</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Green Expert. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
