import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router";

import { projects } from "../data/projects";
import { projectDetails } from "../data/projectDetails";
import FeatureExplorer from "../components/FeatureExplorer";

import SectionLabel from "../components/SectionLabel";

function ProjectVideo({ project }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  // Respetar cambios en la preferencia de movimiento del usuario.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function handleMotionChange() {
      setReducedMotion(mediaQuery.matches);

      if (mediaQuery.matches) {
        videoRef.current?.pause();
      }
    }

    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  // Control manual de reproducción y pausa.
  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {
        // El navegador podría bloquear la reproducción.
      });
    } else {
      video.pause();
    }
  }

  return (
    <figure className="project-video-frame relative min-w-0 overflow-hidden rounded-2xl">
      {project.video && !videoError ? (
        <>
          <video
            ref={videoRef}
            src={project.video}
            poster={project.image || undefined}
            autoPlay={!reducedMotion}
            muted
            loop
            playsInline
            preload="metadata"
            disablePictureInPicture
            disableRemotePlayback
            tabIndex={-1}
            aria-label={`Demostración visual de ${project.name}`}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onError={() => setVideoError(true)}
            className="pointer-events-none block h-auto w-full select-none"
          />

          <button
            type="button"
            onClick={togglePlayback}
            aria-label={isPlaying ? `Pausar vídeo de ${project.name}` : `Reproducir vídeo de ${project.name}`}
            title={isPlaying ? "Pausar vídeo" : "Reproducir vídeo"}
            className="
              absolute bottom-3 right-3 z-10
              flex h-9 w-9 items-center justify-center
              sm:bottom-4 sm:right-4 sm:h-11 sm:w-11
              rounded-xl border border-white/20
              bg-[#111520]/85 text-white
              backdrop-blur-sm
              transition-colors duration-200
              hover:bg-[#111520]
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-accent-yellow
            "
          >
            {isPlaying ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 sm:h-5 sm:w-5">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 sm:h-5 sm:w-5">
                <path d="M8 5.5a1 1 0 0 1 1.5-.86l11 6.5a1 1 0 0 1 0 1.72l-11 6.5A1 1 0 0 1 8 18.5v-13Z" />
              </svg>
            )}
          </button>
        </>
      ) : project.image ? (
        <img src={project.image} alt={`Vista principal de ${project.name}`} className="block h-auto w-full" />
      ) : (
        <div className="flex aspect-video items-center justify-center">
          <span className="font-display text-3xl font-bold">{project.name}</span>
        </div>
      )}
    </figure>
  );
}

function ProjectDetail() {
  const { slug } = useParams();

  const projectIndex = projects.findIndex((item) => item.slug === slug);

  const project = projects[projectIndex];
  const details = projectDetails[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project || !details) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-base text-text">
        <h1 className="font-display text-4xl font-bold">Proyecto no encontrado</h1>
        <Link to="/" className="text-accent-blue hover:underline">
          Volver al portfolio
        </Link>
      </main>
    );
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-base text-text">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-line bg-base/95 px-5 py-5 backdrop-blur-md md:px-8 lg:px-10">
        <nav className="flex items-center justify-between gap-4">
          <Link to="/" className="font-display text-lg font-semibold">
            Diego Anastasio
            <span className="text-accent-red">.</span>
          </Link>

          <Link to="/" className="text-sm text-muted transition-colors hover:text-accent-yellow">
            ← Volver al portfolio
          </Link>
        </nav>
      </header>

      <main>
        {/* PRESENTACIÓN: TEXTO + VIDEO */}
        <section className="grid items-center gap-6 px-5 py-16 md:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-6 lg:px-10 lg:py-20">
          {/* COLUMNA IZQUIERDA */}
          <div className="min-w-0">
            <p className="mb-2 font-mono text-xs font-semibold uppercase leading-none tracking-[0.14em]" style={{ color: project.accent }}>
              PROJECT / {String(projectIndex + 1).padStart(2, "0")}
            </p>

            <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl">
              {project.name}
              <span style={{ color: project.accent }}>.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-muted">{details.intro}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="rounded-full border border-line px-4 py-2 text-sm text-muted">
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-accent-blue px-5 py-3 font-semibold text-base transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none">
                  Ver aplicación ↗
                </a>
              )}

              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-line px-5 py-3 font-semibold transition-colors duration-300 hover:border-accent-yellow hover:text-accent-yellow">
                  GitHub ↗
                </a>
              )}
            </div>
          </div>

          {/* COLUMNA DERECHA: VÍDEO */}
          <ProjectVideo key={project.slug} project={project} />
        </section>

        {/* EL RETO Y MI SOLUCIÓN */}
        <section className="px-5 py-14 md:px-8 lg:px-10">
          <div className="grid gap-12 border-y border-line py-12 md:grid-cols-2 md:gap-16">
            <div className="min-w-0">
              <div className="mb-6 h-1 w-10 rounded-full bg-accent-red" />

              <h2 className="font-display text-3xl font-bold">El reto</h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{details.problem}</p>
            </div>

            <div className="min-w-0">
              <div className="mb-6 h-1 w-10 rounded-full bg-accent-blue" />

              <h2 className="font-display text-3xl font-bold">Mi solución</h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{details.solution}</p>
            </div>
          </div>
        </section>

        {/* FUNCIONALIDADES INTERACTIVAS */}
        {details.showcase?.length > 0 ? (
          <FeatureExplorer key={project.slug} features={details.showcase} coverImage={project.image} accent={project.accent} />
        ) : (
          <section className="px-5 py-20 md:px-8 lg:px-10">
            <h2 className="font-display text-4xl font-bold">Funcionalidades.</h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {details.features.map((feature) => (
                <p key={feature} className="rounded-xl border border-line bg-surface p-6 leading-7 text-muted">
                  {feature}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* DESARROLLO Y DECISIONES TÉCNICAS */}
        <section className="px-5 py-20 md:px-8 lg:px-10">
          <SectionLabel>DEVELOPMENT</SectionLabel>

          <h2 className="font-display text-4xl font-bold">
            Desarrollo y decisiones técnicas
            <span style={{ color: project.accent }}>.</span>
          </h2>

          <div className="mt-10 divide-y divide-line border-y border-line">
            {details.decisions.map((decision) => (
              <article key={decision.title} className="grid gap-4 py-7 md:grid-cols-[40px_1fr_2fr] md:gap-8">
                {/* PUNTO DE COLOR */}
                <span aria-hidden="true" className="mt-2 block h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: project.accent }} />

                {/* TÍTULO */}
                <h3 className="font-display text-xl font-semibold">{decision.title}</h3>

                {/* DESCRIPCIÓN */}
                <p className="leading-8 tracking-[0.01em] [word-spacing:0.08em] text-muted">{decision.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* SIGUIENTE PROYECTO */}
      <footer className="px-5 py-12 md:px-8 lg:px-10">
        <SectionLabel>NEXT PROJECT</SectionLabel>

        <Link to={`/projects/${nextProject.slug}`} className="group inline-flex items-center gap-5 font-display text-3xl font-bold transition-colors hover:text-accent-blue sm:text-5xl">
          {nextProject.name}

          <span className="transition-transform group-hover:translate-x-2">→</span>
        </Link>
      </footer>
    </div>
  );
}

export default ProjectDetail;
