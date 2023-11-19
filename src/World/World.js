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
// todo - needs to be unisntalled
import { createImControls } from './systems/imcontrols.js';

import { loadHorse } from './components/gltf/horse.js';
import { loadBuildings } from './components/gltf/buildingsTerrain.js';
import { loadLegend } from './components/gltf/legendRoofs.js';
import { loadMapScene } from './components/gltf/gltfSceneAreaLight.js';

import { VRButton } from 'three/addons/webxr/VRButton.js';

import { MathUtils, Group } from 'three';

let camera;
let controls;
let renderer;
let scene;
let loop;
let containerRef;
let stats;

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

    // Add to the loop
    loop.updatables.push(stats, controls);

    // Add to the scene
    scene.add(ambientLight, mainLight);

    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    let buildings = await loadBuildings();
    controls.target.copy(buildings.position);
    scene.add(buildings);

    // const horse = await loadHorse();
    // scene.add(horse);

    const legend = await loadLegend();
    scene.add(legend);

    // const mapScene = await loadMapScene();
    // // controls.target.copy(mapScene);
    // scene.add(mapScene);
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
