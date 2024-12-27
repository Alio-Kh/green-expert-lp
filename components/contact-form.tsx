"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Formulaire désactivé",
      description: "Le formulaire de contact n'est pas encore disponible.",
      variant: "destructive",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mx-auto mt-16 max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-white/70">
              Nom & Prénom
            </label>
            <Input
              required
              className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-white/70">
              Email
            </label>
            <Input
              type="email"
              required
              className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-white/70">
              Téléphone
            </label>
            <Input
              type="tel"
              required
              className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-white/70">
              Type de projet
            </label>
            <Input className="border-white/10 bg-white/5 text-white placeholder:text-white/30" />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-white/70">
            Message
          </label>
          <Textarea
            rows={4}
            required
            className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
          />
        </div>
        <Button
          type="submit"
          className="w-full rounded-full bg-[#9bbb2d] text-white hover:bg-[#8bab1d]"
        >
          Envoyer votre message
        </Button>
      </form>
    </motion.div>
  );
}
