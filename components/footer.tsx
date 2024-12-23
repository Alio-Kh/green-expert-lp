import Image from "next/image";

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
              <p>06 61 96 79 03</p>
              <p>said.greenexpert@gmail.com</p>
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
            <div className="font-medium">Horaires</div>
            <div className="mt-4 space-y-2 text-sm text-white/70">
              <p>Lundi - Vendredi: 9h - 18h</p>
              <p>Samedi: 9h - 14h</p>
              <p>Dimanche: Fermé</p>
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
