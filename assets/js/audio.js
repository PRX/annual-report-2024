((doc, win) => {
  const allAudio = doc.querySelectorAll('audio');

  win.prx = win.prx || {};

  win.prx.pauseAllAudio = () => {
    allAudio.forEach((audio) => {
      if (!audio.paused) audio.pause();
    });
  };
})(document, window);
