import { useState } from "react";
import { skills, skillGroups } from "../../data/skills";

import SkillNetwork from "./SkillNetwork";
import SkillDetail from "./SkillDetail";

import SectionLabel from "../SectionLabel";

const defaultSkillByGroup = {
  frontend: "react",
  backend: "sql",
  salesforce: "lwc",
  ai: "chatgpt",
};

function AccentDivider({ color }) {
  return (
    <div aria-hidden="true" className="pointer-events-none relative mx-auto h-4 w-[72%] max-w-110">
      {/* Línea principal */}
      <span
        className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2"
        style={{
          backgroundColor: color,
          opacity: 0.75,
        }}
      />

      {/* Brillo central */}
      <span
        className="absolute left-1/2 top-1/2 h-3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-md"
        style={{
          backgroundColor: color,
          opacity: 0.3,
        }}
      />
    </div>
  );
}

export default function SkillsSection() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [selectedId, setSelectedId] = useState("react");

  const selectedSkill = skills.find((skill) => skill.id === selectedId);

  const activeGroup = skillGroups[activeGroupIndex];

  // Cambia de categoría de forma circular y selecciona una tecnología disponible
  function changeGroup(direction) {
    const nextIndex = (activeGroupIndex + direction + skillGroups.length) % skillGroups.length;

    const nextGroup = skillGroups[nextIndex];

    const firstSkill = skills.find((skill) => skill.group === nextGroup.id && skill.visible !== false);

    const preferredSkill = skills.find((skill) => skill.id === defaultSkillByGroup[nextGroup.id] && skill.group === nextGroup.id && skill.visible !== false);

    setActiveGroupIndex(nextIndex);
    setSelectedId(preferredSkill?.id ?? firstSkill?.id ?? null);
  }

  return (
    <section id="habilidades" className="scroll-mt-24 px-5 md:px-8 lg:mt-12 lg:px-10">
      <div className="mb-12">
        <SectionLabel>SKILLS & TECHNOLOGIES</SectionLabel>

        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Mi ecosistema tecnológico
          <span className="text-accent-blue">.</span>
        </h2>

        <p className="mt-5 max-w-2xl leading-8 text-muted">Tecnologías y conocimientos que he utilizado en proyectos personales, formación y experiencia profesional. Una red que sigue creciendo con cada nuevo proyecto.</p>
      </div>

      {/* Dos columnas equilibradas en escritorio amplio */}
      <div className="grid gap-8 2xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] 2xl:items-center 2xl:gap-8">
        {/* Columna izquierda */}
        <div className="min-w-0">
          <p className="mb-4 text-sm text-muted">Selecciona una tecnología para descubrir dónde la he utilizado.</p>

          <SkillNetwork selectedId={selectedId} onSelect={setSelectedId} activeGroupIndex={activeGroupIndex} onGroupChange={changeGroup} />
        </div>

        {/* Columna derecha */}
        <div className="flex min-w-0 flex-col justify-center gap-8">
          <AccentDivider color={activeGroup.color} />

          <SkillDetail skill={selectedSkill} />

          <AccentDivider color={activeGroup.color} />
        </div>
      </div>
    </section>
  );
}
