import { CircleGeometry, MeshBasicMaterial, Mesh } from 'three';

function createMarker() {
  marker = new Mesh(new CircleGeometry(0.25, 32).rotateX(-Math.PI / 2), new MeshBasicMaterial({ color: 0xbcbcbc }));
  return marker;
}

export { createMarker };
