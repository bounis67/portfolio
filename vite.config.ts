import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
    plugins: [
        react(),
        visualizer({
            filename: "bundle-stats.html",
            open: true, // Ouvre automatiquement le rapport après la génération
        }),
        viteCompression({
            algorithm: "gzip",
            ext: ".gz",
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    "react-vendor": ["react", "react-dom"],
                    "antd-vendor": ["antd"],
                    "framer-motion-vendor": ["framer-motion"],
                    "lucide-react-vendor": ["lucide-react"],
                    "react-router-dom-vendor": ["react-router-dom"],
                },
            },
        },
        chunkSizeWarningLimit: 600,
    },
});
