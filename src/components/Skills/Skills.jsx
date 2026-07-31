import { useLanguage } from "../../context/LanguageContext";
import SkillsGraph from "./SkillsGraph";
import styles from "./Skills.module.css";

const Skills = () => {
    const { t } = useLanguage();

    return (
        <section id="skills" className={styles.skills}>
            <div className="container">
                <h2>{t("skills_title")}</h2>
                <p className={styles.subtitle}>{t("skills_subtitle")}</p>
                <SkillsGraph />
            </div>
        </section>
    );
};

export default Skills;
