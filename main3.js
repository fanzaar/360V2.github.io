const panoramaImage = new PANOLENS.ImagePanorama("images/image3.jpeg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
  controlButtons: [],
});

viewer.enableControl(PANOLENS.CONTROLS.DEVICEORIENTATION);

viewer.add(panoramaImage);
