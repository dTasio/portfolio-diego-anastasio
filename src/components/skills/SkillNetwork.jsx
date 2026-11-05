import { useState } from "react";
import { skillGroups, skills } from "../../data/skills";

const WIDTH = 1000;
const HEIGHT = 520;

const CENTER = {
  x: 500,
  y: 260,
};

// Calcula las posiciones de las tecnologías alrededor de una elipse
function getPositions(groupSkills) {
  const count = groupSkills.length;

  return groupSkills.map((skill, index) => {
    const angle = -Math.PI / 2 + (index * 2 * Math.PI) / count;

    return {
      ...skill,
      x: CENTER.x + Math.cos(angle) * 290,
      y: CENTER.y + Math.sin(angle) * 180,
    };
  });
}

export default function SkillNetwork({ selectedId, onSelect, activeGroupIndex, onGroupChange }) {
  const [hoveredId, setHoveredId] = useState(null);

  const group = skillGroups[activeGroupIndex];

  const groupSkills = skills.filter((skill) => skill.group === group.id && skill.visible !== false);

  const nodes = getPositions(groupSkills);

  // Al pasar el ratón o enfocar una tecnología, resaltamos su nodo
  const activeId = groupSkills.some((skill) => skill.id === hoveredId) ? hoveredId : selectedId;

  return (
    <div className="relative min-w-0">
      {/* Red de escritorio */}
      <div className="relative hidden aspect-1000/520 w-full overflow-hidden rounded-3xl border border-line bg-[#111520] lg:block">
        {/* Líneas de conexión */}
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
          {nodes.map((node) => {
            const highlighted = activeId === node.id;

            return <line key={`line-${node.id}`} x1={CENTER.x} y1={CENTER.y} x2={node.x} y2={node.y} stroke={group.color} strokeWidth={highlighted ? 2.5 : 1} opacity={highlighted ? 0.9 : 0.25} className="transition-all duration-300 motion-reduce:transition-none" />;
          })}
        </svg>

        {/* Nodo central */}
        <div
          className="pointer-events-none absolute z-10 flex min-h-19 w-41.25 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border bg-[#202638] px-4 text-center"
          style={{
            left: "50%",
            top: "50%",
            borderColor: group.color,
            boxShadow: `0 0 24px ${group.color}20`,
          }}
        >
          <span className="font-display text-base font-bold leading-tight" style={{ color: group.color }}>
            {group.name}
          </span>
        </div>

        {/* Tecnologías */}
        {nodes.map((node) => {
          const highlighted = activeId === node.id;

          return (
            <button
              key={node.id}
              type="button"
              aria-pressed={selectedId === node.id}
              onClick={() => onSelect(node.id)}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
              onFocus={() => setHoveredId(node.id)}
              onBlur={() => setHoveredId(null)}
              className="absolute z-20 flex min-h-10 max-w-45 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 rounded-full border px-3 py-2 text-center text-xs font-semibold leading-tight transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none xl:text-sm"
              style={{
                left: `${(node.x / WIDTH) * 100}%`,
                top: `${(node.y / HEIGHT) * 100}%`,
                borderColor: highlighted ? group.color : "#46516B",
                backgroundColor: highlighted ? "#252C3D" : "#191E2B",
                color: highlighted ? group.color : "#F1F3F8",
                boxShadow: highlighted ? `0 0 22px ${group.color}35` : "none",
              }}
            >
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: group.color }} />

              {node.name}
            </button>
          );
        })}
      </div>

      {/* Red para móvil y tablet */}
      <div className="min-h-72.5 rounded-3xl border border-line bg-[#111520] px-14 pb-16 pt-9 lg:hidden">
        <div className="mb-8 text-center">
          <h3 className="font-display text-xl font-bold" style={{ color: group.color }}>
            {group.name}
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {groupSkills.map((skill) => (
            <button
              key={skill.id}
              type="button"
              aria-pressed={selectedId === skill.id}
              onClick={() => onSelect(skill.id)}
              className="rounded-full border bg-[#191E2B] px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-offset-2"
              style={{
                borderColor: selectedId === skill.id ? group.color : "#46516B",
                color: selectedId === skill.id ? group.color : "#F1F3F8",
              }}
            >
              {skill.name}
            </button>
          ))}
        </div>
      </div>

      {/* Flecha izquierda dentro del mapa */}
      <button
        type="button"
        onClick={() => {
          setHoveredId(null);
          onGroupChange(-1);
        }}
        aria-label="Categoría anterior"
        className="absolute left-3 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-[#242A3B] p-0 text-white transition-all duration-200 hover:scale-110 hover:border-white/50 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none md:left-4"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {/* Flecha derecha dentro del mapa */}
      <button
        type="button"
        onClick={() => {
          setHoveredId(null);
          onGroupChange(1);
        }}
        aria-label="Categoría siguiente"
        className="absolute right-3 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-[#242A3B] p-0 text-white transition-all duration-200 hover:scale-110 hover:border-white/50 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none md:right-4"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Indicador de categoría en la esquina inferior derecha */}
      <div className="pointer-events-none absolute bottom-4 right-5 z-20 flex flex-col items-center gap-1.5">
        <span className="font-mono text-xs text-muted">
          {String(activeGroupIndex + 1).padStart(2, "0")} / {String(skillGroups.length).padStart(2, "0")}
        </span>

        <div className="flex items-center gap-1.5" aria-hidden="true">
          {skillGroups.map((item, index) => (
            <span
              key={item.id}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: index === activeGroupIndex ? "20px" : "6px",
                backgroundColor: index === activeGroupIndex ? group.color : "#46516B",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
