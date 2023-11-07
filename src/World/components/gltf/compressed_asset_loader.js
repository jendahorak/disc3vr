import { setupModel } from './setupModel';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

import { LoadingManager, REVISION } from 'three';

import { setupLoadingManager } from './loading_manager';

async function loadCompressed(renderer) {
  const manager = setupLoadingManager();

  const dracoLoader = new DRACOLoader(manager).setDecoderPath(`node_modules/three/examples/jsm/libs/draco/`);

  const ktx2Loader = new KTX2Loader(manager).setTranscoderPath(`node_modules/three/examples/jsm/libs/basis/`).detectSupport(renderer);

  const loader = new GLTFLoader(manager).setCrossOrigin('anonymous').setDRACOLoader(dracoLoader).setKTX2Loader(ktx2Loader).setMeshoptDecoder(MeshoptDecoder);

  const gltf_data = await loader.loadAsync('models/geography_room_optimized.glb');

  const gltf_model = setupModel(gltf_data);

  return gltf_model;
}

export { loadCompressed };
