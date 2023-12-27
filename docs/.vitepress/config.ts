import { defineConfig } from 'vitepress';
import react from '@vitejs/plugin-react';

export default defineConfig({
  vite: {
    plugins: [react()],
    // optimizeDeps: {
    //   //...
    //   include: [
    //     '@shoelace-style/shoelace/dist/react',
    //     // include other packages that may broke the build
    //   ],
    // },
  },
});
