import { LineSegments, LineBasicMaterial } from 'three';
import { BoxLineGeometry } from 'three/addons/geometries/BoxLineGeometry.js';

function createRoom() {
  const room = new LineSegments(new BoxLineGeometry(6, 6, 6, 10, 10, 10).translate(0, 3, 0), new LineBasicMaterial({ color: 0xbcbcbc }));

  return room;
}

export { createRoom };
