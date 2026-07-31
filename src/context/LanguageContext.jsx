import { createContext, useState, useContext } from "react";
import translations from "../i18n/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("es");

    const t = (key) => {
        return translations[lang]?.[key] || key;
    };

    const changeLanguage = (newLang) => {
        if (translations[newLang]) setLang(newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, t, changeLanguage }}>
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
