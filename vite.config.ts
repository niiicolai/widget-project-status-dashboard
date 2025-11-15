import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/widget-project-status-dashboard",
  plugins: [tailwindcss(), react()],
});
