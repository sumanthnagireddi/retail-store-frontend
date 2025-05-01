import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import defaultTheme from "tailwindcss/defaultTheme";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
        theme: {
          extend: {
            fontFamily: {
              sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
            },
          },
        },
        plugins: [],
      },
    }),
  ],
});
