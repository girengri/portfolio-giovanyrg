import { useLanguage } from "../../context/LanguageContext";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring"; // ← Añadir react-spring
import styles from "./Projects.module.css";

const Projects = () => {
    const { t} = useLanguage();
    const projects = t("projects");
    const projectsList = Array.isArray(projects) ? projects : [];

    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;
    const totalPages = Math.ceil(projectsList.length / projectsPerPage);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projectsList.slice(
        indexOfFirstProject,
        indexOfLastProject,
    );

    // 👇 ANIMACIÓN AL CAMBIAR DE PÁGINA
    const [springs, api] = useSpring(() => ({
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(0px)" },
        config: { tension: 300, friction: 20 },
    }));

    // Cuando cambia la página, reinicia la animación
    useEffect(() => {
        api.start({
            from: { opacity: 0, transform: "translateY(20px)" },
            to: { opacity: 1, transform: "translateY(0px)" },
        });
    }, [currentPage, api]);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <h2>{t("projects_title")}</h2>

                {/* 👇 CONTENEDOR CON ANIMACIÓN */}
                <animated.div style={springs} className={styles.grid}>
                    {currentProjects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <span className={styles.projectIcon}>
                                    {project.image || "📁"}
                                </span>
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <span className={styles.tech}>{project.tech}</span>
                            <div className={styles.linkWrapper}>
                                <a href="#" className={styles.link}>
                                    {t("projects_view")} →
                                </a>
                            </div>
                        </div>
                    ))}
                </animated.div>

                {totalPages > 1 && (
                    <div className={styles.pagination}>
                        <button
                            className={styles.pageButton}
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            «
                        </button>
                        {pageNumbers.map((number) => (
                            <button
                                key={number}
                                className={`${styles.pageButton} ${currentPage === number ? styles.active : ""}`}
                                onClick={() => goToPage(number)}
                            >
                                {number}
                            </button>
                        ))}
                        <button
                            className={styles.pageButton}
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            »
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
