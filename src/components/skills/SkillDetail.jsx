import { Link } from "react-router";
import { experienceLabels, skillGroups, skillSources } from "../../data/skills";
import { projects } from "../../data/projects";

export default function SkillDetail({ skill }) {
  if (!skill) return null;

  const group = skillGroups.find((item) => item.id === skill.group);

  const accent = group?.color || "#AAB6CA";

  const relatedProjects = projects.filter((project) => project.skillIds?.includes(skill.id));

  const relatedSources = skill.sources.map((sourceId) => skillSources[sourceId]).filter(Boolean);

  return (
    <div aria-live="polite" className="flex flex-col gap-8 rounded-2xl border border-line bg-surface p-6 md:p-8">
      <div className="min-w-0">
        <p className="font-mono text-xs tracking-widest text-muted">/ TECNOLOGÍA SELECCIONADA</p>

        <div className="mt-4 flex items-center gap-3">
          <span
            className="h-3 w-3 shrink-0 rounded-full"
            style={{
              backgroundColor: accent,
              boxShadow: `0 0 16px ${accent}70`,
            }}
          />

          <h3 className="font-display text-2xl font-bold md:text-3xl">{skill.name}</h3>
        </div>

        <p className="mt-3 text-sm text-muted">{experienceLabels[skill.experience]}</p>

        <p className="mt-4 max-w-xl leading-7 tracking-[0.01em] text-muted">{skill.description}</p>
      </div>

      <div className="min-w-0">
        <p className="font-mono text-xs tracking-widest text-muted">/ DÓNDE LO HE UTILIZADO</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {relatedProjects.map((project) => (
            <Link key={project.slug} to={`/projects/${project.slug}`} className="rounded-lg border border-line bg-base px-3 py-2 text-sm transition-colors hover:border-current" style={{ color: project.accent }}>
              {project.name} ↗
            </Link>
          ))}

          {relatedSources.map((source) =>
            source.url ? (
              <a key={source.label} href={source.url} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-line bg-base px-3 py-2 text-sm text-muted transition-colors hover:text-white">
                {source.label} ↗
              </a>
            ) : (
              <span key={source.label} className="rounded-lg border border-line bg-base px-3 py-2 text-sm text-muted">
                {source.label}
              </span>
            ),
          )}

          {relatedProjects.length === 0 && relatedSources.length === 0 && <span className="text-sm text-muted">Experiencia registrada en el inventario.</span>}
        </div>
      </div>
    </div>
  );
}
