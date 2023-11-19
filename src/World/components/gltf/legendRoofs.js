import { loadAsset } from './systems/assetLoader';

async function loadLegend() {
  const legendData = await loadAsset('models/blender_legenda_baracky.glb');
  const legendScene = legendData.scene;

  // here we can traverse the gltf node graph

  // and set the properties
  legendScene.position.set(0, 0, -4);
  legendScene.rotation.set(0.5, 0, 0);
  legendScene.scale.set(0.04, 0.04, 0.04);

  return legendScene;
}

export { loadLegend };
