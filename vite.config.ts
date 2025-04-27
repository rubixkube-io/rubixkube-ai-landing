import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { viteStaticCopy } from "vite-plugin-static-copy";  // ✅ added

export default defineConfig(({ mode }) => ({
  base: "./", // ✅ important for GitHub Pages
  server: {
    host: true,
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    viteStaticCopy({
      targets: [
        {
          src: "dist/index.html", // after build, copy dist/index.html
          dest: ".",             // copy into dist/ as 404.html
          rename: "404.html",
        },
      ],
      hook: "writeBundle", // 🔥 runs after bundle is created
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
}));