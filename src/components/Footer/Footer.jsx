import { useLanguage } from "../../context/LanguageContext";
import styles from "./Footer.module.css";

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p>{t("footer_text")}</p>
                <div className={styles.socials}>
                    <a href="#" target="_blank">
                        LinkedIn
                    </a>
                    <a href="#" target="_blank">
                        GitHub
                    </a>
                    <a href="#" target="_blank">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
