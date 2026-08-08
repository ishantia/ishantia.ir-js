import React, { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../hooks/useReveal.js";

export default function AmbientBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrame;
    let resizeTimeout;

    function resizeCanvas() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = Array.from(
        { length: Math.min(72, Math.floor(window.innerWidth / 18)) },
        () => ({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: Math.random() * 1.6 + 0.5,
        }),
      );
    }

    function animateParticles() {
      const isLight = document.body.classList.contains("light-theme");
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = isLight ? "rgba(17,24,39,.34)" : "rgba(244,247,251,.46)";
      ctx.strokeStyle = isLight
        ? "rgba(82,244,211,.14)"
        : "rgba(82,244,211,.18)";

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > window.innerHeight)
          particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fill();

        for (let next = index + 1; next < particles.length; next++) {
          const other = particles[next];
          const distance = Math.hypot(
            particle.x - other.x,
            particle.y - other.y,
          );
          if (distance < 120) {
            ctx.globalAlpha = (120 - distance) / 560;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });

      animationFrame = requestAnimationFrame(animateParticles);
    }

    function handleResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 150);
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        cancelAnimationFrame(animationFrame);
      } else {
        animateParticles();
      }
    }

    resizeCanvas();
    animateParticles();
    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="ambient" aria-hidden="true">
      <div className="aurora"></div>
      <canvas id="particleCanvas" ref={canvasRef}></canvas>
    </div>
  );
}
