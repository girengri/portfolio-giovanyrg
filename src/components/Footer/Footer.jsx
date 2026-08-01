import { useLanguage } from "../../context/LanguageContext";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";
import styles from "./Footer.module.css";

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className={styles.footer}>
            <ParticlesBackground id="particles-footer" />
            <div className={`container ${styles.footerContent}`}>
                <p>{t("footer_text")}</p>
                <div className={styles.socials}>
                    <a href="#" target="_blank">LinkedIn</a>
                    <a href="#" target="_blank">GitHub</a>
                    <a href="#" target="_blank">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;