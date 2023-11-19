import { loadAsset } from './systems/assetLoader';

async function loadHorse() {
  const horseData = await loadAsset('models/Horse_scaled_1m.glb');
  const horseScene = horseData.scene;

  // here we can traverse the gltf node graph
  // console.log(horseScene);
  // console.log(horseScene.children[0]);
  let horseMesh = horseScene.children[0];
  horseMesh.position.set(0, -0.5, -2);
  horseMesh.scale.set(0.005, 0.005, 0.005);
  // horseScene.children[0].scale.set(0.5, 0.5, 0.5);

  // and set the properties
  // horseScene.position.set(0, 0, -2);

  return horseScene;
}

export { loadHorse };
