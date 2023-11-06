import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { setupModel } from './setupModel.js';

async function loadHorse() {
  const loader = new GLTFLoader();

  const horseData = await loader.loadAsync('models/Horse_scaled_1m.glb');

  // console.log('Horse is here!', horseData);

  const horse = setupModel(horseData);

  console.log(horse);
  horse.position.set(0, 0, -2);

  return horse;
}

export { loadHorse };
