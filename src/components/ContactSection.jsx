import { contact } from "../data/contact";
import { useState } from "react";

import SectionLabel from "./SectionLabel";

export default function ContactSection() {
  const [copiado, setCopiado] = useState(false);

  async function copiarCorreo() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopiado(true);
    } catch (error) {
      console.error("Error al copiar el correo:", error);
    }
  }

  return (
    <section id="contacto" className="scroll-mt-24 px-5 pb-20 md:px-8 lg:mt-12 lg:px-10 lg:pb-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        {/* Presentación y correo */}
        <div className="min-w-0">
          <SectionLabel>CONTACT</SectionLabel>

          <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            ¿Hablamos de lo próximo
            <span className="text-accent-red">?</span>
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-muted">Estoy abierto a nuevas oportunidades profesionales y colaboraciones relacionadas con desarrollo web, frontend e inteligencia artificial.</p>

          <a
            href={`mailto:${contact.email}`}
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-accent-blue px-6 py-4 font-semibold text-[#111520] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(117,154,255,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-blue"
          >
            <span>Enviarme un correo</span>
            <span aria-hidden="true">↗</span>
          </a>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <p className="break-all text-sm text-muted">{contact.email}</p>

            <button
              type="button"
              onClick={copiarCorreo}
              aria-label={copiado ? "Correo copiado" : "Copiar correo"}
              title={copiado ? "Correo copiado" : "Copiar correo"}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line text-muted transition-all duration-200 hover:border-accent-blue hover:text-accent-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-blue"
            >
              {copiado ? (
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-accent-blue">
                  <path d="m5 12 4 4L19 6" />
                </svg>
              ) : (
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect x="8" y="8" width="12" height="12" rx="2" />
                  <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                </svg>
              )}
            </button>

            <span role="status" aria-live="polite" className="text-xs text-accent-blue">
              {copiado ? "¡Copiado!" : ""}
            </span>
          </div>
        </div>

        {/* Enlaces profesionales */}
        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs tracking-widest text-muted">/ ENCUÉNTRAME TAMBIÉN EN</p>

          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl border border-line bg-surface px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue">
            <div>
              <h3 className="font-display text-xl font-semibold">LinkedIn</h3>
              <p className="mt-1 text-sm text-muted">Perfil y experiencia profesional</p>
            </div>

            <span aria-hidden="true" className="text-2xl text-accent-blue transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>

          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl border border-line bg-surface px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-yellow">
            <div>
              <h3 className="font-display text-xl font-semibold">GitHub</h3>
              <p className="mt-1 text-sm text-muted">Código y proyectos publicados</p>
            </div>

            <span aria-hidden="true" className="text-2xl text-accent-yellow transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
