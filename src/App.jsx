import React from "react";
import AmbientBackground from "./components/AmbientBackground.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { useScrollEffects } from "./hooks/useScrollEffects.js";

export default function App() {
  const { showBackToTop } = useScrollEffects();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <AmbientBackground />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop visible={showBackToTop} />
    </>
  );
}
