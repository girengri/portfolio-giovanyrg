import { createContext, useState, useContext } from "react";
import { getTranslations } from "../i18n/translations";
import { useLocation } from "react-router-dom";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("es");
    const location = useLocation(); //  Obtiene la ruta actual
    const qaMode = location.pathname.includes("/qa");

    const t = (key) => {
        const translations = getTranslations(lang, qaMode);
        return translations[key] || key;
    };

    const changeLanguage = (newLang) => {
        if (["es", "en"].includes(newLang)) setLang(newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, t, changeLanguage, qaMode }}>
            {children}
        </LanguageContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
