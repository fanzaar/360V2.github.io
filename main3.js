const panoramaImage = new PANOLENS.ImagePanorama("https://github.com/fanzaar/360V2.github.io/blob/main/images/image3.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

viewer.add(panoramaImage);
