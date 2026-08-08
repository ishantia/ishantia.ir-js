import React from "react";
import Reveal from "./Reveal.jsx";
import Magnetic from "./Magnetic.jsx";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <div className="hero-eyebrow">
            <span className="status-dot"></span> Student / Developer from Iran
          </div>
          <h1 className="hero-name">
            <span>Shantia</span>
            <span className="gradient-text">Eslami</span>
          </h1>
          <p className="hero-subtitle">
            A curious student and developer building with{" "}
            <strong>Python</strong>, <strong>Java</strong>, Android, Telegram
            APIs, and open-source tools.
          </p>
          <div className="hero-actions">
            <Magnetic href="#projects" className="button primary">
              <i className="fa-solid fa-rocket" aria-hidden="true"></i> View
              Projects
            </Magnetic>
            <Magnetic href="#contact" className="button">
              <i className="fa-solid fa-envelope" aria-hidden="true"></i> Get In
              Touch
            </Magnetic>
          </div>
          <div className="social-row" aria-label="Social profiles">
            <a
              className="social-link"
              href="https://github.com/ishantia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github" aria-hidden="true"></i> GitHub
            </a>
            <a
              className="social-link"
              href="https://t.me/ishantia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-telegram" aria-hidden="true"></i>{" "}
              Telegram
            </a>
          </div>
          <div className="metrics-strip" aria-label="Profile highlights">
            <div className="metric">
              <strong>90%</strong>
              <span>Python focus</span>
            </div>
            <div className="metric">
              <strong>Open</strong>
              <span>Source mindset</span>
            </div>
            <div className="metric">
              <strong>IoT</strong>
              <span>Arduino experiments</span>
            </div>
          </div>
        </Reveal>

        <Reveal
          as="div"
          className="hero-visual"
          data-parallax="0.08"
          aria-label="Interactive developer profile visual"
        >
          <div className="orbit-shell">
            <div className="avatar-core">
              <img
                src="/assets/images/mybot.webp"
                alt="Avatar illustration of Shantia Eslami"
                width="154"
                height="154"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="signal one">
              <i className="fa-brands fa-python" aria-hidden="true"></i>Python
            </div>
            <div className="signal two">
              <i className="fa-brands fa-java" aria-hidden="true"></i>Java
            </div>
            <div className="signal three">
              <i className="fa-solid fa-mobile-screen" aria-hidden="true"></i>
              Android
            </div>
            <div className="signal four">
              <i className="fa-solid fa-network-wired" aria-hidden="true"></i>
              API
            </div>
          </div>
          <div className="terminal">
            <div className="terminal-header">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span>ishantia@dev:~</span>
            </div>
            <div className="terminal-body">
              <div>
                <span className="prompt">$</span> welcome --portfolio
              </div>
              <div>
                <span className="prompt">$</span> building creative solutions
              </div>
              <div>
                <span className="prompt">$</span> status: always learning
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
