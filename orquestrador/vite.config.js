import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/iframes/mf/orquestrador",
  plugins: [react()],
  server: {
    port: 3001, // aqui tu muda a porta
    host: true, // deixa acessível na rede (ex: pelo IP do servidor)
    allowedHosts: ["host.docker.internal"],
  },
});
