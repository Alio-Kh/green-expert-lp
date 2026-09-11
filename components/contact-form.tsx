"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trackContactEvent } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function validateField(name: string, value: string): string | undefined {
  const trimmed = value.trim();
  switch (name) {
    case "name":
      if (trimmed.length === 0) return "Saisissez votre nom.";
      if (trimmed.length < 2) return "Saisissez au moins 2 caractères.";
      break;
    case "email":
      if (trimmed.length === 0) return "Saisissez votre adresse email.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed))
        return "Utilisez une adresse email valide.";
      break;
    case "phone":
      if (trimmed.length === 0) return undefined;
      if (trimmed.replace(/\D/g, "").length < 8)
        return "Saisissez au moins 8 chiffres.";
      break;
    case "message":
      if (trimmed.length === 0) return "Décrivez brièvement votre projet.";
      if (trimmed.length < 10)
        return "Ajoutez quelques précisions sur votre projet.";
      break;
  }
  return undefined;
}

export function ContactForm() {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    website: "", // honeypot
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FieldErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      message: validateField("message", formData.message),
    };

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) {
      setErrors(newErrors);
      setTouched({ name: true, email: true, phone: true, message: true });
      const firstInvalidField = Object.keys(newErrors).find(
        (field) => newErrors[field as keyof FieldErrors]
      );
      requestAnimationFrame(() => {
        document.getElementById(`contact-${firstInvalidField}`)?.focus();
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        trackContactEvent("generate_lead");
        toast({
          title: "Demande envoyée",
          description: "Notre équipe vous recontactera pour préciser votre projet.",
          variant: "default",
          duration: 5000,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
          website: "",
        });
        setErrors({});
        setTouched({});
      } else {
        toast({
          title: "Envoi impossible",
          description:
            result.error || "Réessayez dans un instant ou contactez-nous par téléphone.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch {
      toast({
        title: "Envoi impossible",
        description: "Vérifiez votre connexion, puis réessayez.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "min-h-12 border-white/15 bg-white/[0.06] text-white placeholder:text-white/35 focus:border-[#b4cf54] focus:ring-1 focus:ring-[#b4cf54]/50";

  return (
    <div
      className="rounded-[1.75rem] border border-white/[0.12] bg-white/[0.07] p-6 shadow-2xl shadow-black/10 backdrop-blur-sm sm:p-8 lg:p-10"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        aria-label="Demande de devis paysager"
        noValidate
      >
        <div className="flex flex-col gap-2 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-2xl text-white">Votre demande</p>
            <p className="mt-1 text-sm text-white/55">
              Décrivez votre projet. Nous vous recontacterons pour préciser vos besoins et préparer un devis.
            </p>
          </div>
          <p className="text-xs text-white/45">* Champs obligatoires</p>
        </div>
        {/* Honeypot field */}
        <div
          style={{ position: "absolute", left: -9999, opacity: 0 }}
          aria-hidden="true"
        >
          <label>
            Website
            <input
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-medium text-white/70"
            >
              Nom et prénom <span aria-hidden="true" className="text-[#c6df6b]">*</span>
            </label>
            <Input
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-required="true"
              aria-invalid={Boolean(errors.name && touched.name)}
              aria-describedby={errors.name && touched.name ? "contact-name-error" : undefined}
              autoComplete="name"
              placeholder="Ex. Nadia El Amrani"
              className={inputClasses}
            />
            {errors.name && touched.name && (
              <p id="contact-name-error" role="alert" className="mt-1 text-sm text-red-400">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-medium text-white/70"
            >
              Adresse email <span aria-hidden="true" className="text-[#c6df6b]">*</span>
            </label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-required="true"
              aria-invalid={Boolean(errors.email && touched.email)}
              aria-describedby={errors.email && touched.email ? "contact-email-error" : undefined}
              autoComplete="email"
              placeholder="votre@email.com"
              className={inputClasses}
            />
            {errors.email && touched.email && (
              <p id="contact-email-error" role="alert" className="mt-1 text-sm text-red-400">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="contact-phone"
              className="mb-2 block text-sm font-medium text-white/70"
            >
              Téléphone (facultatif)
            </label>
            <Input
              id="contact-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.phone && touched.phone)}
              aria-describedby={errors.phone && touched.phone ? "contact-phone-error" : undefined}
              autoComplete="tel"
              placeholder="06 00 00 00 00"
              className={inputClasses}
            />
            {errors.phone && touched.phone && (
              <p id="contact-phone-error" role="alert" className="mt-1 text-sm text-red-400">
                {errors.phone}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="contact-project-type"
              className="mb-2 block text-sm font-medium text-white/70"
            >
              Service recherché
            </label>
            <select
              id="contact-project-type"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm ${inputClasses}`}
            >
              <option value="" className="bg-[#1a2821]">
                Choisissez un service
              </option>
              <option value="jardin-privatif" className="bg-[#1a2821]">
                Conception de jardin
              </option>
              <option value="espace-commercial" className="bg-[#1a2821]">
                Espace professionnel
              </option>
              <option value="terrassement" className="bg-[#1a2821]">
                Terrassement et drainage
              </option>
              <option value="irrigation" className="bg-[#1a2821]">
                Irrigation automatique
              </option>
              <option value="entretien" className="bg-[#1a2821]">
                Contrat d’entretien
              </option>
              <option value="autre" className="bg-[#1a2821]">
                Autre
              </option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-sm font-medium text-white/70"
          >
            Votre projet <span aria-hidden="true" className="text-[#c6df6b]">*</span>
          </label>
          <Textarea
            id="contact-message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={Boolean(errors.message && touched.message)}
            aria-describedby={errors.message && touched.message ? "contact-message-error" : undefined}
            placeholder="Localisation, surface, usage et résultat recherché…"
            className={inputClasses}
          />
          {errors.message && touched.message && (
            <p id="contact-message-error" role="alert" className="mt-1 text-sm text-red-400">
              {errors.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="min-h-12 w-full rounded-full bg-[#a8c83f] font-semibold text-[#17251e] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b6d74a] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Envoi en cours…
            </span>
          ) : (
            "Demander un devis"
          )}
        </Button>
        <p className="text-center text-xs leading-5 text-white/40">
          Vos coordonnées sont utilisées uniquement pour répondre à votre demande.
        </p>
      </form>
    </div>
  );
}
