import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/navbar";
import {
  Hero,
  About,
  Education,
  Experience,
  Skills,
  Achievements,
  Goals,
  Contact,
  Footer,
} from "@/components/portfolio/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nada Boukhayar — Finance × Data & IA · Alternance MSc" },
      { name: "description", content: "Portfolio premium de Nada Boukhayar, étudiante en Finance, Audit & Data Analytics en transition vers le Data Management & l'IA pour le business. Ouverte à une alternance d'un an à Paris." },
      { property: "og:title", content: "Nada Boukhayar — Finance × Data & IA" },
      { property: "og:description", content: "De la rigueur de l'audit financier à l'intelligence des données — ouverte à une alternance d'un an." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Achievements />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
