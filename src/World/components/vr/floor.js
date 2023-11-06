import { PlaneGeometry, MeshBasicMaterial, Mesh } from 'three';

function createFloor() {
  floor = new Mesh(new PlaneGeometry(4.8, 4.8, 2, 2).rotateX(-Math.PI / 2), new MeshBasicMaterial({ color: 0xbcbcbc, transparent: true, opacity: 0.25 }));
  return floor;
}

export { createFloor };
