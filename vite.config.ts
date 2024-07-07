import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
    plugins: [
        viteCompression({
            algorithm: "gzip",
            ext: ".gz",
        }),
        react(),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.indexOf("node_modules") !== -1) {
                        return id.split("node_modules/")[1].split("/")[0];
                    }
                },
            },
        },
        chunkSizeWarningLimit: 600,
    },
});
