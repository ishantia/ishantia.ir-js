import React from "react";
import Reveal from "./Reveal.jsx";
import { useReveal } from "../hooks/useReveal.js";

const SKILLS = [
  { name: "Android Development", value: 15 },
  { name: "Git, GitHub", value: 90 },
  { name: "Java", value: 85 },
  { name: "Python", value: 90 },
  { name: "C/C++", value: 80 },
  { name: "C#", value: 30 },
  { name: "Telegram API", value: 35 }
];

const TECH_CHIPS = [
  { icon: "fa-solid fa-hashtag", label: "C#" },
  { icon: "fa-solid fa-code", label: "C/C++" },
  { icon: "fa-brands fa-java", label: "Java" },
  { icon: "fa-brands fa-python", label: "Python" },
  { icon: "fa-solid fa-network-wired", label: "Cisco" },
  { icon: "fa-brands fa-github", label: "GitHub" }
];

function SkillCard({ name, value }) {
  const [ref, visible] = useReveal();
  return (
    <article ref={ref} className={`skill-card reveal${visible ? " visible" : ""}`}>
      <div className="skill-top">
        <span>{name}</span>
        <span className="skill-value">{value}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: visible ? `${value}%` : "0%" }}></div>
      </div>
    </article>
  );
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal as="p" className="section-kicker">
          Skills
        </Reveal>
        <Reveal as="h2" className="section-title">
          A compact stack for apps, automation, and API-driven builds.
        </Reveal>
        <Reveal as="p" className="section-copy">
          Core development skills are presented with the same percentages from the original portfolio, redesigned as
          animated technical capability cards.
        </Reveal>
        <div className="skills-layout">
          <div className="skills-grid">
            {SKILLS.map(skill => (
              <SkillCard key={skill.name} name={skill.name} value={skill.value} />
            ))}
          </div>
          <Reveal as="aside" className="stack-panel profile-panel">
            <h3>Tech Stack</h3>
            <div className="tech-cloud">
              {TECH_CHIPS.map(chip => (
                <span className="tech-chip" key={chip.label}>
                  <i className={chip.icon} aria-hidden="true"></i>
                  {chip.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
