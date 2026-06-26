import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#education", label: "Formation" },
  { href: "#experience", label: "Expérience" },
  { href: "#skills", label: "Compétences" },
  { href: "#goals", label: "Vision" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className={`glass flex items-center justify-between rounded-full px-5 py-2.5 transition-all ${scrolled ? "shadow-elegant" : ""}`}>
          <a href="#top" className="flex items-center gap-2 font-medium tracking-tight">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--electric)] shadow-glow" />
            <span>Nada Boukhayar</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-full bg-[var(--navy)] px-4 py-2 text-xs font-medium text-[var(--primary-foreground)] hover:opacity-90 transition"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}