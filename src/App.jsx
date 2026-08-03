import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./styles/global.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Page404 from "./components/Page404/Page404";
import { useEffect } from "react";

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Leer el parámetro 'path' de la URL
    const params = new URLSearchParams(location.search);
    const redirectPath = params.get('path');
    if (redirectPath) {
      // Limpiar la URL (remover el ?path=)
      navigate(redirectPath || '/', { replace: true });
    }
  }, [location, navigate]);

  return (
    // dev mode
    // <BrowserRouter /">
    // production mode
    <BrowserRouter basename="/portfolio-giovanyrg/">
      <ThemeProvider>
        <LanguageProvider>
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              duration: 4000,
              style: {
                background: "var(--color-card)",
                color: "var(--color-text)",
                borderRadius: "10px",
                padding: "16px",
                boxShadow: "0 4px 15px var(--color-shadow)",
              },
              success: {
                iconTheme: {
                  primary: "var(--color-primary)",
                  secondary: "#fff",
                },
              },
              error: {
                iconTheme: {
                  primary: "#e74c3c",
                  secondary: "#fff",
                },
              },
            }}
          />

          <Routes>
            <Route path="/" element={<Layout qaMode={false} />} />
            <Route path="/qa" element={<Layout qaMode={true} />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

function Layout({ qaMode = false }) {
  return (
    <LanguageProvider qaMode={qaMode}>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
