import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
// import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

import { setupLoadingManager } from './loadingLogManager';

async function loadCompressed(gltfPath, renderer = null) {
  // Setup loader and Draco, KTX, and meshopt decoder.
  const manager = setupLoadingManager();

  console.log(renderer);

  const dracoLoader = new DRACOLoader(manager).setDecoderPath(`loader_libs/draco/`);

  const ktx2Loader = null;

  if (renderer) {
    const ktx2Loader = new KTX2Loader(manager).setTranscoderPath(`loader_libs/`).detectSupport(renderer);
    const loader = new GLTFLoader(manager).setCrossOrigin('anonymous').setDRACOLoader(dracoLoader).setKTX2Loader(ktx2Loader);
    const gltfData = await loader.loadAsync(gltfPath);
    return gltfData;
  }

  const loader = new GLTFLoader(manager).setCrossOrigin('anonymous').setDRACOLoader(dracoLoader);

  // .setMeshoptDecoder(MeshoptDecoder);

  // Load the data
  const gltfData = await loader.loadAsync(gltfPath);
  return gltfData;
}

export { loadCompressed };
