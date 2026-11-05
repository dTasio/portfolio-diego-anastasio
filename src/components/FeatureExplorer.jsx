import { useState } from "react";
import "./FeatureExplorer.css";
import SectionLabel from "./SectionLabel";

// Dibuja una línea divisoria utilizando el color de acento del proyecto
function AccentDivider({ accent }) {
  return (
    <div className="pointer-events-none flex justify-center" aria-hidden="true">
      <div className="relative h-6 w-full max-w-105">
        <span className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 rounded-full opacity-75" style={{ backgroundColor: accent }} />
        <span className="absolute left-1/2 top-1/2 h-3 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-md opacity-35" style={{ backgroundColor: accent }} />
      </div>
    </div>
  );
}

// Muestra la captura de una funcionalidad y un mensaje alternativo si la imagen no existe o no puede cargarse
function FeaturePreview({ image, title }) {
  const [imageError, setImageError] = useState(false);

  if (!image || imageError) {
    return (
      <div className="flex h-full items-center justify-center bg-base p-5 text-center">
        <p className="text-sm text-muted">Vista previa no disponible</p>
      </div>
    );
  }

  return <img src={image} alt={`Vista de la funcionalidad ${title}`} onError={() => setImageError(true)} className="block h-full w-full object-cover object-top" />;
}

function FeatureExplorer({ features, coverImage, accent }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFeature = features[activeIndex];

  const activeImage = activeFeature.image || (activeIndex === 0 ? coverImage : null);

  return (
    <section className="px-5 py-20 md:px-8 lg:px-10">
      {/* ENCABEZADO DE SECCIÓN */}
      <div className="mb-10">
        <SectionLabel>FEATURES</SectionLabel>

        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Explora la aplicación
          <span style={{ color: accent }}>.</span>
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-muted">Selecciona una funcionalidad para descubrir qué puedes hacer con ella.</p>
      </div>

      {/* EXPLORADOR INTERACTIVO */}
      <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-7">
        {/* COLUMNA IZQUIERDA: OPCIONES */}
        <div className="flex self-stretch min-w-0 flex-col">
          <AccentDivider accent={accent} />

          <div className="my-auto space-y-3">
            {features.map((feature, index) => {
              const isActive = feature.id === activeFeature.id;

              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group flex w-full items-center justify-between rounded-2xl border px-5 py-5 text-left transition-all duration-300 ${isActive ? "border-current bg-surface" : "border-line bg-surface/40 hover:border-line/80 hover:bg-surface/70"}`}
                  style={isActive ? { color: accent } : {}}
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-sm opacity-90">{String(index + 1).padStart(2, "0")}</span>

                    <span className={`font-display text-xl font-semibold ${isActive ? "text-text" : "text-text/80"}`}>{feature.title}</span>
                  </span>

                  <span className="text-lg opacity-90">↗</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8">
            <AccentDivider accent={accent} />
          </div>
        </div>

        {/* COLUMNA DERECHA: IMAGEN Y DESCRIPCIÓN */}
        <div key={activeFeature.id} className="feature-swap project-video-frame flex min-w-0 flex-col overflow-hidden rounded-2xl bg-surface">
          {/* IMAGEN PRINCIPAL */}
          <div className="aspect-video w-full overflow-hidden bg-base">
            <FeaturePreview key={activeFeature.id} image={activeImage} title={activeFeature.title} />
          </div>

          {/* DESCRIPCIÓN DE LA FUNCIONALIDAD */}
          <div
            className="
            flex min-h-20 items-center
            border-t border-line
            px-5 py-3"
            aria-live="polite"
          >
            <p className="text-sm leading-6 text-muted">{activeFeature.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureExplorer;
