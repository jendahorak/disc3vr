import { loadAsset } from './systems/assetLoader.js';

async function loadMapScene() {
  const sceneData = await loadAsset('models/scenes/simple_mistnost.glb');
  const sceneScene = sceneData.scene;

  // here we can traverse the gltf node graph

  // and set the properties

  sceneScene.castShadow = true;

  const childrenGroup = [...sceneScene.children];

  console.log(childrenGroup);
  for (const child of childrenGroup) {
    if (child.name == 'mistnost_simple') {
      child.castShadow = true;
      child.receiveShadow = true;
      console.log(child);
    }
    if (child.name == 'buildings_scaled') {
      console.log(child);
      const subChildren = [...child.children];
      console.log(subChildren);
      for (const subChild of subChildren) {
        subChild.castShadow = true;
        subChild.receiveShadow = true;
      }
    }
  }

  return sceneScene;
}

export { loadMapScene };
