const drawerToggle = document.getElementById('drawerToggle');
const drawer = document.getElementById('drawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');

drawerToggle.addEventListener('click', () => {
  drawer.classList.toggle('-translate-x-full');
  drawerBackdrop.classList.toggle('hidden');
});

drawerBackdrop.addEventListener('click', () => {
  drawer.classList.add('-translate-x-full');
  drawerBackdrop.classList.add('hidden');
});
