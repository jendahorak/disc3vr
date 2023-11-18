import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createRoom } from './components/room.js';
import { createFloor } from './components/vr/floor.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { createStatistics } from './systems/statistics.js';
import { createImControls } from './systems/imcontrols.js';

import { loadHorse } from './components/gltf/horse.js';
import { loadCompressed } from './components/gltf/compressed_asset_loader.js';

import { VRButton } from 'three/addons/webxr/VRButton.js';

import { MathUtils, Group } from 'three';

let camera;
let controls;
let renderer;
let scene;
let loop;
let containerRef;
let stats;
let imcontrols;

class World {
  constructor(container) {
    stats = createStatistics();
    console.log(stats);

    camera = createCamera();

    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer, stats);
    controls = createControls(camera, renderer.domElement);

    containerRef = container;
    // Append renderer to the html page inside specified container.
    container.append(renderer.domElement);

    const { ambientLight, mainLight } = createLights();

    // imcontrols = createImControls(camera, renderer, scene);
    // const room = createRoom();
    // Add to the loop
    loop.updatables.push(stats, controls);

    // Add to the scene
    scene.add(ambientLight, mainLight);

    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    let { buildings, legenda } = await loadCompressed(renderer);
    buildings.scale.set(0.002, 0.002, 0.002);
    legenda.scale.set(0.01, 0.01, 0.01);

    // compressed_model.position.set(0, 1.7, 0);
    legenda.position.set(0, 0.2, 1.2);

    scene.add(buildings, legenda);

    // const horse = await loadHorse();
    // controls.target.copy(horse.position);
    // scene.add(horse);

    // Append VR button to the html page
    containerRef.appendChild(VRButton.createButton(renderer));
    renderer.xr.enabled = true;
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
