import { LoadingManager } from 'three';

function setupLoadingManager() {
  const manager = new LoadingManager();

  manager.onStart = function (url, itemsLoaded, itemsTotal) {
    if (url.endsWith('.glb')) {
      console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
    }

    // console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
  };

  // Loading screen
  manager.onLoad = function () {
    console.log('Loading complete!');
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('fade-out');
    loadingScreen.addEventListener('transitionend', (ev) => {
      ev.target.remove();
    });
  };

  manager.onProgress = function (url, itemsLoaded, itemsTotal) {
    if (url.endsWith('.glb')) {
      console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
    }
    // console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
  };

  manager.onError = function (url) {
    console.error('There was an error loading ' + url);
  };

  return manager;
}

export { setupLoadingManager };
