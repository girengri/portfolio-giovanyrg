import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import { useTheme } from "../../context/ThemeContext";

const ParticlesBackground = ({ id = "tsparticles" }) => {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particleColor = theme === "light" ? "#1e8fff" : "#4a9eff";

  const options = {
    fullScreen: { enable: false }, // 👈 clave: nunca fullscreen
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: particleColor },
      links: {
        color: particleColor,
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1.5,
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 60,
      },
      opacity: { value: 0.5 },
      size: { value: 3 },
    },
    background: { color: "transparent" },
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0, // top:0, left:0, right:0, bottom:0 en una sola línea
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <Particles
        id={id} // 👈 ahora cada instancia recibe un id distinto
        init={particlesInit}
        options={options}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        canvasClassName="particlesCanvas" // 👈 clase para forzar tamaño con CSS
      />
    </div>
  );
};

export default ParticlesBackground;