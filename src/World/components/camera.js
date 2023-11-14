import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);

  camera.position.set(0, 1.6, 2);
  camera.lookAt(0, 0, 0);

  return camera;
}

export { createCamera };