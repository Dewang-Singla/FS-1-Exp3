import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base:
    process.env.GITHUB_PAGES === "true"
      ? "/FS-1-Exp3/"   // GitHub Pages
      : "/",            // Netlify + local dev
});
