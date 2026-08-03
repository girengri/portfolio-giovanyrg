import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./styles/global.css";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Page404 from "./components/Page404/Page404";
import { useEffect } from "react";

// 👇 COMPONENTE INTERNO QUE MANEJA LA REDIRECCIÓN
function RedirectHandler({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirectPath = params.get("path");
    if (redirectPath) {
      // Navega a la ruta guardada y limpia la URL
      navigate(redirectPath, { replace: true });
    }
  }, [location, navigate]);

  return children;
}

function App() {
  // basename dinámico: en desarrollo '/', en producción '/portfolio-giovanyrg/'
  const basename =
    import.meta.env.MODE === "production" ? "/portfolio-giovanyrg/" : "/";

  return (
    <BrowserRouter basename={basename}>
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
          <RedirectHandler>
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/qa" element={<Layout />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </RedirectHandler>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

function Layout() {
  const { qaMode } = useLanguage();
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <Skills />
      <Projects key={qaMode} />
      <Contact />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
