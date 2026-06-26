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
      { title: "Portfolio — Finance × Data & AI · MSc Apprenticeship" },
      { name: "description", content: "Premium portfolio of a Finance, Audit & Data Analytics student transitioning toward Data Management & AI for Business. Open to a one-year apprenticeship in Paris." },
      { property: "og:title", content: "Portfolio — Finance × Data & AI" },
      { property: "og:description", content: "From financial audit rigor to data intelligence — open to a one-year apprenticeship." },
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
