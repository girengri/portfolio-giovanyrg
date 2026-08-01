import { useState, useRef, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Navbar.module.css";
import { FaChartBar } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { t, lang, changeLanguage } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const langRef = useRef(null);

    // Cerrar dropdown de idioma al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Scroll suave
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        setIsMenuOpen(false); // Cerrar menú al hacer clic en un enlace
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Cambiar idioma
    const handleLanguageChange = (newLang) => {
        changeLanguage(newLang);
        setIsLangOpen(false);
    };

    // Alternar menú hamburguesa
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                {/* Logo */}
               <div className={styles.logo}>
                    <div className={styles.logoBadge}>
                        <span className={styles.initials}>GR</span>
                    </div>
                    <FaChartBar className={styles.logoIcon} size={22} />
                </div>

                {/* Enlaces de navegación (se ocultan en móvil) */}
                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}>
                    <li>
                        <a href="#home" onClick={(e) => handleScroll(e, "home")}>
                            {t("nav_home")}
                        </a>
                    </li>
                    <li>
                        <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
                            {t("nav_skills")}
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
                            {t("nav_projects")}
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
                            {t("nav_contact")}
                        </a>
                    </li>
                </ul>

                {/* Controles (idioma y tema) - siempre visibles */}
                <div className={styles.controls}>
                    {/* Selector de idioma con dropdown */}
                    <div className={styles.langWrapper} ref={langRef}>
                        <button
                            className={styles.langButton}
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            aria-label="Cambiar idioma"
                        >
                            <FiGlobe size={20} className={styles.langIcon} />
                            <span className={styles.langCode}>{lang.toUpperCase()}</span>
                            <span
                                className={`${styles.langArrow} ${isLangOpen ? styles.rotated : ""}`}
                            >
                                ▾
                            </span>
                        </button>
                        {isLangOpen && (
                            <div className={styles.langDropdown}>
                                <button
                                    className={`${styles.langOption} ${lang === "es" ? styles.active : ""}`}
                                    onClick={() => handleLanguageChange("es")}
                                >
                                    🇪🇸 Español
                                </button>
                                <button
                                    className={`${styles.langOption} ${lang === "en" ? styles.active : ""}`}
                                    onClick={() => handleLanguageChange("en")}
                                >
                                    🇬🇧 English
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Switch de tema (toggle) */}
                    <label className={styles.switch}>
                        <input
                            type="checkbox"
                            checked={theme === "dark"}
                            onChange={toggleTheme}
                            aria-label="Cambiar tema"
                        />
                        <span className={styles.slider}></span>
                    </label>
                </div>

                {/* Botón hamburguesa (solo visible en móvil) */}
                <button
                    className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
                    onClick={toggleMenu}
                    aria-label="Menú"
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
