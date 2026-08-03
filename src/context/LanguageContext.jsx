import { createContext, useState, useContext } from "react";
import { getTranslations } from "../i18n/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children, qaMode = false }) => {
    const [lang, setLang] = useState("es");

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
