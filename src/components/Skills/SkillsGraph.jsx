import { Graph } from "react-d3-graph";
import { useTheme } from "../../context/ThemeContext";
import styles from "./SkillsGraph.module.css";

const SkillsGraph = () => {
    const { theme } = useTheme();

    const config = {
        directed: false,
        nodeHighlightBehavior: true,
        highlightDegree: 1,
        node: {
            color: theme === "light" ? "#0a66c2" : "#4a9eff",
            size: 400,
            highlightStrokeColor: "blue",
            fontSize: 14,
            labelProperty: "label",
            renderLabel: true,
        },
        link: {
            highlightColor: "lightblue",
            color: theme === "light" ? "#1e8fff" : "#2a6b9a",
            strokeWidth: 2,
        },
        d3: {
            alpha: 0.8,
            gravity: -250,
            linkLength: 150,
            linkStrength: 0.6,
        },
    };

    const data = {
        nodes: [
            { id: "Python", label: "Python" },
            { id: "SQL", label: "SQL" },
            { id: "PowerBI", label: "Power BI" },
            { id: "Tableau", label: "Tableau" },
            { id: "Excel", label: "Excel" },
            { id: "R", label: "R" },
            { id: "Git", label: "Git" },
            { id: "ML", label: "Machine Learning" },
        ],
        links: [
            { source: "Python", target: "SQL" },
            { source: "Python", target: "PowerBI" },
            { source: "Python", target: "Tableau" },
            { source: "Python", target: "ML" },
            { source: "SQL", target: "PowerBI" },
            { source: "SQL", target: "Tableau" },
            { source: "Excel", target: "PowerBI" },
            { source: "Excel", target: "Tableau" },
            { source: "R", target: "Python" },
            { source: "R", target: "ML" },
            { source: "Git", target: "Python" },
            { source: "Git", target: "SQL" },
        ],
    };

    const onClickNode = (nodeId) => {
        alert(`Has clickeado en ${nodeId}`);
    };

    return (
        <div className={styles.graphContainer}>
            <Graph
                id="skills-graph"
                data={data}
                config={config}
                onClickNode={onClickNode}
            />
        </div>
    );
};

export default SkillsGraph;
