import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: '/devsoc-app-frontend/',
  plugins: [tailwindcss()],
});
