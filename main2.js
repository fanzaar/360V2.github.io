const panoramaImage = new PANOLENS.ImagePanorama("images/image2.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

viewer.add(panoramaImage);
viewer.addEventListener("panorama-load", function() {
  const cameraPosition = viewer.getControl().getPosition();
  console.log("Camera Position:", cameraPosition);
});
