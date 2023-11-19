import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { setupLoadingManager } from './loadingLogManager';

async function loadAsset(gltfPath) {
  // Setup loader
  const manager = setupLoadingManager();
  const loader = new GLTFLoader(manager).setCrossOrigin('anonymous');

  // Load the data
  const gltfData = await loader.loadAsync(gltfPath);
  return gltfData;
}

export { loadAsset };
