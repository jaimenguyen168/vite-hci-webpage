import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import ViteImageOptimize from "vite-plugin-imagemin";

// https://vite.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV === "production" && process.env.VERCEL !== "1"
      ? "/vite-hci-webpage/"
      : "/",
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimize({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.65, 0.8] },
      webp: { quality: 80 },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        // Split large chunks into smaller ones
        manualChunks: {
          // Separate vendor libraries
          "vendor-react": ["react", "react-dom"],
          "vendor-router": ["react-router-dom"],
          "vendor-query": ["@tanstack/react-query"],

          // Separate UI libraries (your large radix-ui imports)
          "vendor-ui": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-popover",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-avatar",
            "@radix-ui/react-slot",
          ],

          // Separate heavy animation libraries
          "vendor-animation": ["framer-motion", "embla-carousel-react"],

          // Separate icon library (1MB+ lucide-react)
          "vendor-icons": ["lucide-react"],

          // Separate utility libraries
          "vendor-utils": [
            "tailwind-merge",
            "clsx",
            "class-variance-authority",
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@tanstack/react-query",
    ],
  },
});
