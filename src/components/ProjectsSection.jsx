import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionLabel from "./SectionLabel";

function ProjectsSection() {
  return (
    <section id="proyectos" className="w-full scroll-mt-28 px-5 md:px-8 lg:px-10">
      {/* ENCABEZADO */}
      <div className="mb-10 max-w-2xl">
        <SectionLabel>SELECTED WORK</SectionLabel>

        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Proyectos<span className="text-accent-red">.</span>
        </h2>

        <p className="mt-5 leading-7 text-muted">Una selección de proyectos personales en los que transformo ideas en aplicaciones web, combinando diseño, interactividad, funcionalidad y la integración de distintas tecnologías.</p>
      </div>

      {/* ESCAPARATE */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
