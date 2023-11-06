import { WebGLRenderer } from 'three';

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.gammaFactor = 2.2;
  return renderer;
}

export { createRenderer };
