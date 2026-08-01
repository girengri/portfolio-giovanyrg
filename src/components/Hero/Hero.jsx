import { useLanguage } from "../../context/LanguageContext";
import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";
import styles from "./Hero.module.css";

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="home" className={styles.hero}>
            <ParticlesBackground id="particles-hero" />
            <div className={`container ${styles.heroContent}`}>
                <div className={styles.text}>
                    <p className={styles.greeting}>{t("hero_title")}</p>
                    <h1 className={styles.name}>{t("hero_name")}</h1>
                    {/* El título ahora es inline-block */}
                    <h2 className={styles.role}>
                        <span className={styles.typewriterWrapper}>
                            <TypeAnimation
                                sequence={[t("hero_role"), 1500, "", 500]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h2>
                    <p className={styles.description}>{t("hero_description")}</p>
                    <a href="#contact" className={styles.ctaButton}>
                        {t("hero_cta")}
                    </a>
                </div>
                <div className={styles.image}>
                    <div className={`${styles.avatarPlaceholder} ${styles.floating}`}>
                        📊
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
