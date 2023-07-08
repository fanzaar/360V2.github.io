const panoramaImage = new PANOLENS.ImagePanorama("images/image1.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
  output:'overlay',
});

viewer.add(panoramaImage);

