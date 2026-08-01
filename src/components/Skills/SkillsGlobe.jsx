import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Line } from "@react-three/drei";
import { useTheme } from "../../context/ThemeContext";
import styles from "./SkillsGlobe.module.css";

const RADIUS = 2.2;

const SKILLS = [
    { id: "Excel", label: "Excel" },
    { id: "PowerBI", label: "Power BI" },
    { id: "Python", label: "Python" },
    { id: "SQL", label: "SQL" },
    { id: "Git", label: "Git" },
    { id: "En", label: "English" },
    { id: "Pandas", label: "Pandas" },
];

// 👇 Genera automáticamente TODAS las combinaciones posibles entre nodos
//    (grafo completo) para el efecto telaraña total.
function useCompleteLinks(items) {
    return useMemo(() => {
        const links = [];
        for (let i = 0; i < items.length; i++) {
            for (let j = i + 1; j < items.length; j++) {
                links.push([items[i].id, items[j].id]);
            }
        }
        return links;
    }, [items]);
}

function useSpherePositions(items, radius) {
    return useMemo(() => {
        const n = items.length;
        const positions = {};
        const goldenAngle = Math.PI * (3 - Math.sqrt(5));

        items.forEach((item, i) => {
            const y = 1 - (i / (n - 1)) * 2;
            const radiusAtY = Math.sqrt(1 - y * y);
            const theta = goldenAngle * i;
            const x = Math.cos(theta) * radiusAtY;
            const z = Math.sin(theta) * radiusAtY;
            positions[item.id] = [x * radius, y * radius, z * radius];
        });

        return positions;
    }, [items, radius]);
}

const Node = ({ position, label, color }) => (
    <group position={position}>
        <Html center distanceFactor={6} occlude={false} style={{ pointerEvents: "none" }}>
            <div className={styles.nodeLabel} style={{ color }}>
                {label}
            </div>
        </Html>
    </group>
);

const Globe = () => {
    const { theme } = useTheme();
    const groupRef = useRef();
    const positions = useSpherePositions(SKILLS, RADIUS);
    const links = useCompleteLinks(SKILLS);
    const nodeColor = theme === "light" ? "#1e8fff" : "#4a9eff";
    const lineColor = theme === "light" ? "#1e8fff" : "#4a9eff";

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <group ref={groupRef}>
            {links.map(([a, b], i) => (
                <Line
                    key={i}
                    points={[positions[a], positions[b]]}
                    color={lineColor}
                    lineWidth={2}
                    transparent
                    opacity={0.3} // 👈 más tenue porque ahora hay muchas más líneas
                />
            ))}

            {SKILLS.map((skill) => (
                <Node
                    key={skill.id}
                    position={positions[skill.id]}
                    label={skill.label}
                    color={nodeColor}
                />
            ))}
        </group>
    );
};

const SkillsGlobe = () => {
    return (
        <div className={styles.globeContainer}>
            <Canvas camera={{ position: [0, 0, 6], fov: 44 }}>
                <ambientLight intensity={0.9} />
                <pointLight position={[5, 5, 5]} intensity={1} />
                <Globe />
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                />
            </Canvas>
        </div>
    );
};

export default SkillsGlobe;