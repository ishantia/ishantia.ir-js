import React from "react";
import { Routes, Route } from "react-router-dom";
import AmbientBackground from "./components/AmbientBackground.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { useScrollEffects } from "./hooks/useScrollEffects.js";
import HomePage from "./pages/HomePage.jsx";
import Resume from "./pages/Resume.jsx";

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop visible={showBackToTop} />
    </>
  );
}
