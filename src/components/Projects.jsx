import React from "react";
import Reveal from "./Reveal.jsx";
import ProjectCard from "./ProjectCard.jsx";
import projectsData from "../data/projects.json";

const PROJECT_FALLBACK = [
  {
    name: "Open-source experiments",
    description:
      "Small utilities and learning projects built while exploring practical software ideas.",
    tags: ["GitHub", "Learning", "Tools"],
    link: "https://github.com/ishantia",
  },
  {
    name: "Android playground",
    description:
      "Creative Android experiments focused on understanding apps, interfaces, and device behavior.",
    tags: ["Android", "Java", "Mobile"],
    link: "https://github.com/ishantia",
  },
  {
    name: "Automation and API work",
    description:
      "Python and Telegram API experiments for bots, scripts, and connected workflows.",
    tags: ["Python", "Telegram API", "Automation"],
    link: "https://github.com/ishantia",
  },
];

export default function Projects() {
  const projects =
    Array.isArray(projectsData) && projectsData.length
      ? projectsData
      : PROJECT_FALLBACK;

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <Reveal as="p" className="section-kicker">
              My Projects
            </Reveal>
            <Reveal as="h2" className="section-title">
              Selected work, loaded dynamically.
            </Reveal>
          </div>
          <Reveal
            as="a"
            className="button"
            href="https://github.com/ishantia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i> GitHub
            Profile
          </Reveal>
        </div>
        <div className="projects-grid" id="projects-grid" aria-live="polite">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name ?? index}
              project={project}
              index={index}
            />
          ))}
        </div>
        <noscript>
          <p className="section-copy">
            Enable JavaScript to view my projects, or visit my{" "}
            <a href="https://github.com/ishantia">GitHub profile</a> directly.
          </p>
        </noscript>
      </div>
    </section>
  );
}
