function toggleFullScreen() {
  const image = document.querySelector(".image-detail img");

  if (!document.fullscreenElement) {
    if (image.requestFullscreen) {
      image.requestFullscreen();
    } else if (image.mozRequestFullScreen) { // Firefox
      image.mozRequestFullScreen();
    } else if (image.webkitRequestFullscreen) { // Chrome, Safari and Opera
      image.webkitRequestFullscreen();
    } else if (image.msRequestFullscreen) { // IE/Edge
      image.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
  }
}


function navigate(direction) {
  const currentIndex = window.images.findIndex((image) => image === window.currentImage);
  const newIndex = (currentIndex + direction + window.images.length) % window.images.length;
  window.location.href = `/image/${window.images[newIndex]}`;
}
