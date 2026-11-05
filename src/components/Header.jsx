import { Link } from "react-router";

const navItems = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contacto", href: "#contacto" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/90 backdrop-blur-md">
      <div className="flex w-full flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8 lg:px-10">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}>
          Diego Anastasio
          <span className="text-accent-red">.</span>
        </Link>

        <nav aria-label="Navegación principal" className="flex flex-wrap items-center gap-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative pb-1 text-sm text-muted transition-colors duration-200 hover:text-text after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent-yellow after:transition-all after:duration-300 hover:after:w-full focus-visible:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
