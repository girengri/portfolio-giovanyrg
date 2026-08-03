import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // 👇 base dinámica: en desarrollo usa '/', en producción usa la ruta del repo
  base: mode === "production" ? "/portfolio-giovanyrg/" : "/",
}));
