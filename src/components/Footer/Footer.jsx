import { useLanguage } from "../../context/LanguageContext";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // 👈 importa íconos
import styles from "./Footer.module.css";

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className={styles.footer}>
            <ParticlesBackground id="particles-footer" />
            <div className={`container ${styles.footerContent}`}>
                <p>{t("footer_text")}</p>
                <div className={styles.socials}>
                    <a href="https://www.linkedin.com/in/giovany-rendon96/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin size={28} />
                    </a>
                    <a href="https://github.com/girengri" target="_blank" aria-label="GitHub">
                        <FaGithub size={28} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;