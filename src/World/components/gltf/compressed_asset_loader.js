import { setupModel } from './setupModel';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

import { setupLoadingManager } from './loading_manager';

async function loadCompressed(renderer) {
  const manager = setupLoadingManager();

  const dracoLoader = new DRACOLoader(manager).setDecoderPath(`loader_libs/`);

  const ktx2Loader = new KTX2Loader(manager).setTranscoderPath(`loader_libs/`).detectSupport(renderer);

  const loader = new GLTFLoader(manager).setCrossOrigin('anonymous').setDRACOLoader(dracoLoader).setKTX2Loader(ktx2Loader).setMeshoptDecoder(MeshoptDecoder);

  // const gltf_data = await loader.loadAsync('models/geography_room_optimized.glb');
  // const gltf_data = await loader.loadAsync('models/cloud_compare_contours_terrain_gltf_report_v1.glb');
  const gltf_data = await loader.loadAsync('models/ce_export_terrain_buildings_opritmised_v2_deleted_bases_origio_pbr_good_origin.glb');

  const gltf_model = setupModel(gltf_data);

  return gltf_model;
}

export { loadCompressed };