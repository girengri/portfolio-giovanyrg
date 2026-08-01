import { useLanguage } from "../../context/LanguageContext";
import SkillsGlobe from "./SkillsGlobe"; // 👈 antes era SkillsGraph
import styles from "./Skills.module.css";

const Skills = () => {
    const { t } = useLanguage();

    return (
        <section id="skills" className={styles.skills}>
            <div className="container">
                <h2>{t("skills_title")}</h2>
                <SkillsGlobe />
            </div>
        </section>
    );
};

export default Skills;