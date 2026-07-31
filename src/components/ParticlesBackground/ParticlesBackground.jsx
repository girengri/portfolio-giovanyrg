import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./ParticlesBackground.module.css";

const ParticlesBackground = () => {
    const { theme } = useTheme();

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particleColor = theme === "light" ? "#1e8fff" : "#4a9eff";

    const options = {
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
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
            className={styles.particlesCanvas}
        />
    );
};

export default ParticlesBackground;
