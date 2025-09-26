import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    {
      name: 'rewrite-middleware',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === '/liam-duncan-development') {
            req.url = '/liam-duncan-development/';
          }
          next();
        });
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/liam-duncan-development/',
  build: {
    rollupOptions: {
      output: {
        // Disable modulepreload generation to avoid MIME type issues
        experimentalMinChunkSize: 0,
      },
    },
  },
}));
