import { loadCompressed } from './systems/compressedAssetLoader.js';

async function loadBuildings(renderer = null) {
  const buildingsData = await loadCompressed('models/compressed/vr_scene_thematic_topo1_v1.glb', renderer);
  // const buildingsData = await loadCompressed('models/compressed/simple_map_scene_spot_light_5w_map_v1_ktx1.glb', renderer);
  const buildingsScene = buildingsData.scene;

  // here we can traverse the gltf node graph

  // and set properties to children Objects
  buildingsScene.position.set(0, -0.5, -1);
  buildingsScene.scale.set(0.004, 0.004, 0.004);

  for (let child of buildingsScene.children) {
    console.log(child);
    child.castShadow = true;
    child.receiveShadow = true;
  }

  // console.log(buildingsScene);

  return buildingsScene;
}

export { loadBuildings };

// Load data
// const gltf_data = await loader.loadAsync('models/geography_room_optimized.glb');
// const gltf_data = await loader.loadAsync('models/cloud_compare_contours_terrain_gltf_report_v1.glb');
// const gltf_data1 = await loader.loadAsync('models/ce_export_terrain_buildings_opritmised_v2_deleted_bases_origio_pbr_good_origin.glb');
// const gltf_data = await loader.loadAsync('models/budovy_terrain_simplified_unjoined.glb');
// const gltf_data = await loader.loadAsync('models/budovy_terrain_simplified_unjoined_default.glb');
// const gltf_data2 = await loader.loadAsync('models/budovy_terrain_without_uvs_normals.glb');
// const gltf_legenda_data = await loader.loadAsync('models/blender_legenda_baracky.glb');
