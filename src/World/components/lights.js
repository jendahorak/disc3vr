import { DirectionalLight, HemisphereLight } from 'three';

function createLights() {
  const ambientLight = new HemisphereLight('white', 'darkslategrey', 0);

  const mainLight = new DirectionalLight('white', 0);
  mainLight.position.set(2, 3, -1);
  mainLight.castShadow = true;

  // const hemiLight = new HemisphereLight(0xa5a5a5, 0x898989, 3);
  // const dirLightNormalized = new DirectionalLight(0xffffff, 3);
  // dirLightNormalized.position.set(1, 1, 1).normalize();

  return { ambientLight, mainLight };
}

export { createLights };
