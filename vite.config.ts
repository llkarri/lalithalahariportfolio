import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/lalithalahariportfolio/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
```

4. Click **"Commit changes"**

---

Then wait ~2 minutes and go to:
```
https://llkarri.github.io/lalithalahariportfolio/
