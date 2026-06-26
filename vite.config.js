import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/ 
// base: '/my_js_framework/',
export default defineConfig({
  plugins: [react()],
  base: "/my_js_framework",
});
