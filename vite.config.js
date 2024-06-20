import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         "@services": path.resolve(__dirname, "src/services"),
         "@components": path.resolve(__dirname, "src/components"),
         "@hooks": path.resolve(__dirname, "src/hooks"),
         "@pages": path.resolve(__dirname, "src/pages"),
         "@styles": path.resolve(__dirname, "src/styles"),
         "@routes": path.resolve(__dirname, "src/routes"),
      },
   },
});
