const panoramaImage = new PANOLENS.ImagePanorama("images/image.jpeg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
  output:'console',
});

viewer.add(panoramaImage);
var infospot;
infospot = new PANOLENS.Infospot();
infospot.position.set( -1305, 3777, -3000.49 );
infospot.addHoverText( 'This way to kitchen' );
infospot.addEventListener("click", () => {
  window.location.href = "https://youtube.com"; // Replace with the URL of the desired page
});

