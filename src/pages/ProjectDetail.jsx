import { Link, useParams } from "react-router";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <h1>Proyecto no encontrado</h1>;
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <Link to="/" className="text-yellow-400">
        Volver al portfolio
      </Link>

      <h1 className="mt-8 text-4xl font-bold">{project.name}</h1>

      <p className="mt-4 text-slate-300">Página individual del proyecto.</p>
    </main>
  );
}

export default ProjectDetail;
