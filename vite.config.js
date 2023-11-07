import { defineConfig } from 'vite';
import path, { resolve } from 'path';

// Get the current working directory (where Vite is executed)
const currentDirectory = process.cwd();

// Extract the project name from the folder name
const projectName = path.basename(currentDirectory);

import { defineConfig } from 'vite';

export default defineConfig({
  base: `/${projectName}/`,
});
