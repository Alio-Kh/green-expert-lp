"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
      if (trimmed.length === 0) return "Le nom est requis";
      if (trimmed.length < 2) return "Le nom doit contenir au moins 2 caractères";
      break;
    case "email":
      if (trimmed.length === 0) return "L'email est requis";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed))
        return "Veuillez entrer un email valide";
      break;
    case "phone":
      if (trimmed.length === 0) return "Le téléphone est requis";
      if (trimmed.replace(/\D/g, "").length < 8)
        return "Le numéro doit contenir au moins 8 chiffres";
      break;
    case "message":
      if (trimmed.length === 0) return "Le message est requis";
      if (trimmed.length < 10)
        return "Le message doit contenir au moins 10 caractères";
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
        toast({
          title: "Message envoyé !",
          description: "Nous vous contacterons dans les plus brefs délais.",
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
          title: "Erreur",
          description:
            result.error || "Une erreur est survenue lors de l'envoi.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch {
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer le message. Veuillez réessayer.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:border-[#9bbb2d] focus:ring-1 focus:ring-[#9bbb2d]/50";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mx-auto mt-16 max-w-2xl rounded-3xl border border-white/[0.12] bg-white/[0.08] p-8 backdrop-blur-sm"
    >
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
              Nom & Prénom <span aria-hidden="true" className="text-[#9bbb2d]">*</span>
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
              placeholder="Votre nom complet"
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
              Email <span aria-hidden="true" className="text-[#9bbb2d]">*</span>
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
              Téléphone <span aria-hidden="true" className="text-[#9bbb2d]">*</span>
            </label>
            <Input
              id="contact-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-required="true"
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
              Type de projet
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
                Sélectionnez un type
              </option>
              <option value="jardin-privatif" className="bg-[#1a2821]">
                Jardin privatif
              </option>
              <option value="espace-commercial" className="bg-[#1a2821]">
                Espace commercial
              </option>
              <option value="terrassement" className="bg-[#1a2821]">
                Terrassement
              </option>
              <option value="irrigation" className="bg-[#1a2821]">
                Irrigation
              </option>
              <option value="entretien" className="bg-[#1a2821]">
                Entretien
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
            Message <span aria-hidden="true" className="text-[#9bbb2d]">*</span>
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
            placeholder="Décrivez votre projet..."
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
          className="w-full rounded-full bg-[#9bbb2d] text-white transition-all duration-200 hover:bg-[#8bab1d] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Envoi en cours...
            </span>
          ) : (
            "Envoyer votre message"
          )}
        </Button>
      </form>
    </motion.div>
  );
}
