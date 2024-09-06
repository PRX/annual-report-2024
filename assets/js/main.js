document.addEventListener('DOMContentLoaded', function() {
  var drawerToggle = document.getElementById('drawerToggle');
  var drawer = document.getElementById('drawer');
  var drawerBackdrop = document.getElementById('drawerBackdrop');

  if (drawerToggle && drawer && drawerBackdrop) {
    drawerToggle.addEventListener('click', function() {
      if (drawer.style.transform === 'translateX(0%)') {
        drawer.style.transform = 'translateX(-100%)';
        drawerBackdrop.style.display = 'none';
      } else {
        drawer.style.transform = 'translateX(0%)';
        drawerBackdrop.style.display = 'block';
      }
    });

    drawerBackdrop.addEventListener('click', function() {
      drawer.style.transform = 'translateX(-100%)';
      drawerBackdrop.style.display = 'none';
    });
  } else {
    console.error('One or more drawer elements not found');
  }
});
