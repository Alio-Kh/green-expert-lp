import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services-data";

export function ServicesGrid() {
  return (
    <div
      className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
    >
      {services.map((service, i) => {
        const Icon = service.icon;
        return (
          <div key={service.slug} className="h-full">
            <Link
              href={`/services/${service.slug}`}
              aria-label={`Découvrir le service ${service.title}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.055] to-white/[0.015] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#b4cf54]/40 hover:from-[#b4cf54]/[0.07] hover:to-white/[0.02] focus:outline-none focus:ring-2 focus:ring-[#b4cf54]/60 sm:p-8"
            >
              {/* Gradient glow on hover */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-[#9bbb2d]/0 via-[#9bbb2d]/0 to-[#9bbb2d]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-[#9bbb2d]/10 group-hover:via-transparent group-hover:to-transparent" />

              {/* Number badge */}
              <div className="absolute right-6 top-6 font-serif text-xs font-light tracking-[0.2em] text-white/30 transition-colors duration-300 group-hover:text-[#9bbb2d]">
                0{i + 1}
              </div>

              {/* Icon */}
              <div className="relative mb-6 inline-flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl bg-[#9bbb2d]/20 blur-xl transition-all duration-500 group-hover:bg-[#9bbb2d]/40 group-hover:blur-2xl" />
                <div className="relative rounded-2xl border border-[#b4cf54]/20 bg-[#b4cf54]/10 p-4 text-[#c6df6b] transition-all duration-300 group-hover:border-[#b4cf54]/40 group-hover:bg-[#b4cf54]/20">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white transition-colors duration-300">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/60">
                {service.shortDescription}
              </p>

              {/* Arrow — visible at rest, emphasized on hover/focus */}
              <div className="mt-auto flex items-center gap-2 pt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#c6df6b]/80 transition-all duration-300 group-hover:text-[#d2e884] group-focus-visible:text-[#d2e884]">
                <span>Découvrir le service</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1"
                  strokeWidth={2}
                />
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#9bbb2d] to-transparent transition-all duration-500 group-hover:w-full" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
