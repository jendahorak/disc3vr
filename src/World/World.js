import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createRoom } from './components/room.js';
import { createFloor } from './components/vr/floor.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

import { loadHorse } from './components/gltf/horse.js';

import { VRButton } from 'three/addons/webxr/VRButton.js';

let camera;
let controls;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    controls = createControls(camera, renderer.domElement);

    // Append renderer to the html page inside specified container.
    container.append(renderer.domElement);

    // Append VR button to the html page
    container.appendChild(VRButton.createButton(renderer));
    renderer.xr.enabled = true;

    const { ambientLight, mainLight } = createLights();

    const room = createRoom();
    // const floor = createFloor();
    // Add to the loop
    loop.updatables.push(controls);

    // Add to the scene
    scene.add(ambientLight, mainLight, room);

    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    const horse = await loadHorse();
    controls.target.copy(horse.position);
    scene.add(horse);
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
