export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-5 py-8 md:px-8 lg:px-10">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        {/* Identidad */}
        <div>
          <span className="font-display text-lg font-semibold text-text">
            Diego Anastasio
            <span className="text-accent-red">.</span>
          </span>

          <p className="mt-1 text-sm text-muted">Desarrollo web · Frontend · IA</p>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted">© {currentYear} Diego Anastasio</p>
      </div>
    </footer>
  );
}
