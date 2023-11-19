import { loadCompressed } from './systems/compressedAssetLoader.js';

async function loadCompressedMapScene(renderer = null) {
  // const mapSceneData = await loadCompressed('models/compressed/simple_map_scene_spot_light_5w_map_v1_draco.glb');
  const mapSceneData = await loadCompressed('models/compressed/simple_map_scene_spot_light_5w_map_v1_ktx1.glb', renderer);
  const buildingsScene = mapSceneData.scene;

  console.log(buildingsScene);

  return buildingsScene;
}

export { loadCompressedMapScene };
