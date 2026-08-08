import React from "react";
import Reveal from "./Reveal.jsx";

const ABOUT_ITEMS = [
  {
    title: "Problem-solving and open-source",
    body: "Student and tech enthusiast passionate about problem-solving and open-source.",
  },
  {
    title: "Android and creative software",
    body: "Love playing around with Android and building creative solutions through code.",
  },
  {
    title: "Always learning",
    body: "Curious mind, always learning.",
  },
  {
    title: "Hardware experiments",
    body: "Built small projects with Arduino and Digispark.",
  },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <Reveal as="aside" className="profile-panel" data-parallax="0.04">
          <img
            className="profile-image"
            src="/assets/images/mybot.webp"
            alt="Avatar illustration of Shantia Eslami"
            width="96"
            height="96"
            loading="lazy"
            decoding="async"
          />
          <h2>Student. Developer. Builder.</h2>
          <p>
            Focused on practical code, creative experiments, and steady
            improvement.
          </p>
          <div className="availability">
            <span>
              Location <strong>Iran</strong>
            </span>
            <span>
              Focus <strong>Software</strong>
            </span>
            <span>
              Mindset <strong>Open-source</strong>
            </span>
          </div>
        </Reveal>

        <div>
          <Reveal as="p" className="section-kicker">
            About Me
          </Reveal>
          <Reveal as="h2" className="section-title">
            Curiosity turned into code, tools, and experiments.
          </Reveal>
          <ul className="about-list">
            {ABOUT_ITEMS.map((item) => (
              <Reveal as="li" className="about-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
