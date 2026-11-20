if(navigator.serviceWorker) {
  if(window.location.protocol === 'https:') {
    navigator.serviceWorker.register('/mnts.smcquiz.org/sw.js',{scope: '/mnts.smcquiz.org/'})
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
      return false
    });
    document.getElementById("manifestTestLoad").setAttribute('href','/mnts.smcquiz.org/manifest.webmanifest');
  }
}