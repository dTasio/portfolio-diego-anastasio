import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />

      <Route
        path="*"
        element={
          <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-base px-5 text-center text-text">
            <p className="font-mono text-sm text-accent-yellow">/ ERROR 404 /</p>

            <h1 className="font-display text-4xl font-bold">Página no encontrada.</h1>

            <p className="max-w-md text-muted">La dirección que buscas no existe o ya no está disponible.</p>

            <Link to="/" className="rounded-xl bg-accent-blue px-6 py-3 font-semibold text-[#111520]">
              Volver al portfolio
            </Link>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
