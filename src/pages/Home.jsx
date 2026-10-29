import { Link } from "react-router";
import { projects } from "../data/projects";

function Home() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="mb-8 text-4xl font-bold">Portfolio Diego Anastasio</h1>

      <h2 className="mb-4 text-2xl">Mis proyectos</h2>

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Link key={project.slug} to={`/projects/${project.slug}`} className="text-yellow-400 hover:underline">
            {project.name}
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;
