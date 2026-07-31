import { useLanguage } from "../../context/LanguageContext";
import styles from "./Projects.module.css";

const Projects = () => {
    const { t } = useLanguage();

    const projects = [
        {
            title: "Dashboard Ventas",
            desc: "Análisis de ventas con Power BI, mostrando KPIs y tendencias.",
            tech: "Power BI, SQL",
            link: "#",
        },
        {
            title: "Modelo Predictivo",
            desc: "Predicción de demanda usando machine learning (Python).",
            tech: "Python, Scikit-learn",
            link: "#",
        },
        {
            title: "Análisis de Sentimiento",
            desc: "Procesamiento de lenguaje natural para analizar tweets.",
            tech: "Python, NLTK, Pandas",
            link: "#",
        },
    ];

    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <h2>{t("projects_title")}</h2>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <span className={styles.tech}>{project.tech}</span>
                            <a href={project.link} className={styles.link}>
                                {t("projects_view")} →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
