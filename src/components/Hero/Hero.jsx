import { useLanguage } from "../../context/LanguageContext";
import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";
import styles from "./Hero.module.css";

const Hero = () => {
    const { t, lang, qaMode } = useLanguage();

    const handleScrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

     // 👇 Elige la imagen según qaMode
    const heroImage = qaMode ? "./imgheroqa.svg" : "./imghero.svg";

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.particlesWrapper}>
                <ParticlesBackground />
            </div>
            <div className={`container ${styles.heroContent}`}>
                <div className={styles.text}>
                    <p className={styles.greeting}>{t("hero_title")}</p>
                    <h1 className={styles.name}>{t("hero_name")}</h1>
                    <h2 className={styles.role}>
                        <TypeAnimation
                            key={lang}
                            sequence={[t("hero_role"), 1500, "", 500]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className={styles.description}>{t("hero_description")}</p>
                    <a href="#contact" className={styles.ctaButton} onClick={handleScrollToContact}>
                        {t("hero_cta")}
                    </a>
                </div>
                <div className={styles.image}>
                    <div className={styles.avatarPlaceholder}>
                        <img src={heroImage} alt="Giovany Rendon" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;