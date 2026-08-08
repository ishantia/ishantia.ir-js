import React from "react";
import { useReveal } from "../hooks/useReveal.js";

const LINK_PATTERN = /^https?:\/\//i;

export default function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal();
  const safeLink = LINK_PATTERN.test(project.link || "")
    ? project.link
    : "https://github.com/ishantia";
  const tags = Array.isArray(project.tags) ? project.tags : [];
  const name = project.name || "Untitled Project";

  return (
    <article
      ref={ref}
      className={`project-card reveal${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${Math.min(index * 70, 280)}ms` }}
    >
      <div>
        <h3>{name}</h3>
        <p>{project.description || "Project details coming soon."}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <a
        href={safeLink}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${name}`}
      >
        <i className="fa-brands fa-github" aria-hidden="true"></i> View Project
      </a>
    </article>
  );
}
