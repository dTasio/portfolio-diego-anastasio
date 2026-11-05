import { useRef, useState } from "react";
import { Link } from "react-router";

function ProjectCard({ project, index }) {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  const featured = project.featured;
  const hasVideo = Boolean(project.video) && !videoError;
  const projectNumber = String(index + 1).padStart(2, "0");

  // Reproduce el vídeo al pasar el ratón sobre la tarjeta,
  function playPreview() {
    const video = videoRef.current;

    if (!video) return;

    // Solo reproducir en dispositivos con ratón
    // y a partir del breakpoint de escritorio.
    const canHover = window.matchMedia("(min-width: 768px) and (hover: hover) and (pointer: fine)").matches;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canHover || reducedMotion) return;

    video.play().catch(() => {
      // El navegador puede bloquear la reproducción.
    });
  }

  // Pausa el vídeo cuando el ratón abandona la tarjeta
  function pausePreview() {
    videoRef.current?.pause();
  }

  return (
    <article
      className={`
        group/card relative min-w-0 overflow-hidden
        rounded-3xl border border-line bg-surface
        transition-[transform,border-color,box-shadow]
        duration-300 ease-out

        hover:-translate-y-2
        hover:border-accent-blue
        hover:ring-2 hover:ring-accent-blue/70
        hover:shadow-[0_24px_65px_-30px_rgba(117,154,255,0.45)]

        focus-within:border-accent-blue
        focus-within:ring-2 focus-within:ring-accent-blue/70

        motion-reduce:transform-none

        ${featured ? "md:col-span-2" : ""}
      `}
      onMouseEnter={playPreview}
      onMouseLeave={pausePreview}
    >
      <div
        className={`
          grid h-full
          ${featured ? "lg:grid-cols-2" : "grid-cols-1"}
        `}
      >
        {/* ======================================
            INFORMACIÓN DEL PROYECTO
        ====================================== */}

        <div
          className={`
            order-2 flex min-w-0 flex-col
            justify-between gap-8 p-6
            ${featured ? "lg:order-1 lg:p-10" : ""}
          `}
        >
          <div>
            {/* Categoría */}
            <p className="font-mono text-sm tracking-[0.18em]" style={{ color: project.accent }}>
              {projectNumber} / {project.category}
            </p>

            {/* Nombre */}
            <h3
              className={`
                mt-5 font-display font-bold tracking-tight
                ${featured ? "text-4xl lg:text-5xl" : "text-3xl"}
              `}
            >
              {project.name}
            </h3>

            {/* Descripción */}
            <p className="mt-4 max-w-md leading-7 text-muted">{project.description}</p>

            {/* Tecnologías */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full border border-line
                    px-3 py-1 text-xs text-muted
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* ======================================
              ENLACE INDEPENDIENTE A GITHUB
          ====================================== */}

          <div className="relative z-20 flex items-center">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver repositorio de ${project.name} en GitHub`}
                className="
                  group/github inline-flex items-center gap-3
                  rounded-xl border border-line bg-base/60
                  px-4 py-3 text-sm font-semibold text-text

                  transition-all duration-250

                  hover:-translate-y-0.5
                  hover:border-accent-yellow
                  hover:bg-accent-yellow hover:text-base

                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-accent-yellow

                  active:translate-y-0
                  motion-reduce:transform-none
                "
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M12 .75a11.25 11.25 0 0 0-3.558 21.923c.563.105.77-.244.77-.543v-2.098c-3.13.68-3.79-1.328-3.79-1.328-.512-1.3-1.25-1.647-1.25-1.647-1.021-.698.077-.684.077-.684 1.129.08 1.722 1.159 1.722 1.159 1.003 1.719 2.632 1.222 3.273.935.102-.726.393-1.222.715-1.503-2.498-.284-5.125-1.25-5.125-5.56 0-1.228.44-2.232 1.159-3.02-.116-.285-.502-1.432.11-2.985 0 0 .944-.302 3.094 1.154A10.77 10.77 0 0 1 12 6.61c.957.005 1.92.13 2.82.37 2.148-1.456 3.09-1.154 3.09-1.154.614 1.553.228 2.7.112 2.985.72.788 1.157 1.792 1.157 3.02 0 4.32-2.631 5.273-5.136 5.551.404.35.763 1.041.763 2.098v3.65c0 .302.203.654.773.542A11.25 11.25 0 0 0 12 .75Z" />
                </svg>

                <span>GitHub</span>

                <span
                  aria-hidden="true"
                  className="
                    transition-transform duration-200
                    group-hover/github:translate-x-0.5
                    group-hover/github:-translate-y-0.5
                  "
                >
                  ↗
                </span>
              </a>
            ) : (
              <span className="text-xs text-muted">Repositorio pendiente</span>
            )}
          </div>
        </div>

        {/* ======================================
            PREVISUALIZACIÓN DEL PROYECTO
        ====================================== */}

        <div
          className={`
            relative order-1 overflow-hidden

            ${featured ? "min-h-75 lg:order-2 lg:min-h-97.5" : "min-h-75 lg:min-h-82.5"}
          `}
          style={{
            background: `linear-gradient(145deg, ${project.previewColor}, #10131C)`,
          }}
        >
          {/* Marco de la previsualización */}
          <div
            className="
              absolute inset-x-5 top-10 bottom-5
              overflow-hidden rounded-xl
              border border-white/10 bg-base/70
              shadow-[0_15px_45px_rgba(0,0,0,0.30)]

              sm:inset-x-7 sm:top-11 sm:bottom-7
            "
          >
            {/* Imagen estática para móvil y respaldo del vídeo */}
            {project.image && (
              <img
                src={project.image}
                alt=""
                loading="lazy"
                decoding="async"
                className={`
                  h-full w-full object-contain

                  ${hasVideo ? "block md:hidden" : "md:object-cover md:object-top"}
                `}
              />
            )}

            {/* Vídeo solo visible en escritorio */}
            {hasVideo && (
              <video
                ref={videoRef}
                src={project.video}
                poster={project.image || undefined}
                muted
                playsInline
                loop
                preload="none"
                tabIndex={-1}
                aria-hidden="true"
                onError={() => setVideoError(true)}
                className="
                  pointer-events-none hidden
                  h-full w-full
                  object-cover object-top
                  md:block
                "
              />
            )}

            {/* Respaldo si no hay imagen ni vídeo */}
            {!project.image && !hasVideo && (
              <div className="flex h-full items-end p-5">
                <span className="font-display text-3xl font-bold sm:text-4xl" style={{ color: project.accent }}>
                  {project.name}
                </span>
              </div>
            )}
          </div>

          {/* Identificador del proyecto */}
          <span
            className="
              pointer-events-none absolute
              right-5 top-4 z-20
              font-mono text-[11px]
              tracking-[0.16em] text-white/70
              sm:right-7 sm:top-5
            "
          >
            PROJECT / {projectNumber}
          </span>
        </div>
      </div>

      {/* ======================================
          ENLACE A LA PÁGINA INDIVIDUAL
      ====================================== */}

      <Link
        to={`/projects/${project.slug}`}
        aria-label={`Ver detalles del proyecto ${project.name}`}
        className="
          absolute inset-0 z-10 rounded-3xl
          focus-visible:outline-2
          focus-visible:-outline-offset-4
          focus-visible:outline-accent-yellow
        "
      />
    </article>
  );
}

export default ProjectCard;
