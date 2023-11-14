import ImmersiveControls from '@depasquale/three-immersive-controls';

function createImControls(camera, renderer, scene) {
  const controls = new ImmersiveControls(camera, renderer, scene, {
    /* options */
  });

  controls.enableDamping = true;

  // forward controls.update to our custom .tick method
  controls.tick = () => controls.update();

  return controls;
}

export { createImControls };
