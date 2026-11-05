import AnimatedWords from "./AnimatedWords.jsx";
import SectionLabel from "./SectionLabel";

function Hero() {
  return (
    <section className="grid w-full grid-cols-1 items-center gap-10 px-5 pt-16 pb-0 md:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:pt-20">
      <div className="min-w-0">
        <SectionLabel>FRONTEND DEVELOPER</SectionLabel>

        <h1 className="max-w-full font-display font-bold text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.12] tracking-tight wrap-break-word">
          Desarrollo interfaces y experiencias web con <span className="text-accent-blue">intención visual.</span>
        </h1>

        <p className="mt-7 max-w-xl leading-8 text-muted">
          Soy desarrollador web con experiencia profesional en entornos Salesforce, especializado actualmente en el desarrollo frontend y la creación de interfaces atractivas, funcionales e interactivas. Busco seguir creciendo en proyectos frontend y full-stack, incorporando
          la inteligencia artificial como herramienta de apoyo para crear soluciones más eficientes y creativas.
        </p>

        <p className="mt-8 text-sm text-muted">JavaScript · React · Tailwind CSS · IA</p>
      </div>
      <AnimatedWords />
    </section>
  );
}

export default Hero;
