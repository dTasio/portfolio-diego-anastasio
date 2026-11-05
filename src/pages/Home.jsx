import { useLayoutEffect } from "react";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/skills/SkillsSection";
import ContactSection from "../components/ContactSection";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-base text-text">
      <Header />

      <main id="inicio" className="flex flex-col gap-14 md:gap-16 lg:gap-20">
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
