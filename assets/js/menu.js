((doc) => {
  const drawer = doc.getElementById('navDrawerPopover');

  drawer.addEventListener('click', (evt) => {
    const anchor = evt.target.closest('a');

    if (anchor) drawer.hidePopover();
  });
})(document);
