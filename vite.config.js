import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const VENDOR_CHUNKS = {
  react: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
  gsap: /node_modules[\\/](gsap|@gsap)[\\/]/,
  icons: /node_modules[\\/]react-icons[\\/]/,
};

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      output: {
        advancedChunks: {
          groups: Object.entries(VENDOR_CHUNKS).map(([name, test]) => ({ name, test })),
        },
      },
    },
  },
});
