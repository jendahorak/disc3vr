import Stats from 'stats.js';

function createStatistics() {
  let stats = new Stats();
  stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
  // stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
  // stats.showPanel(2); // 0: fps, 1: ms, 2: mb, 3+: custom
  document.body.appendChild(stats.dom);

  stats.tick = () => {
    stats.begin();
    stats.end();
  };

  return stats;
}

export { createStatistics };
