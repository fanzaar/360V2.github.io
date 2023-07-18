const panoramaImage = new PANOLENS.ImagePanorama("images/image1.jpeg");
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
infospot = new PANOLENS.Infospot(700,"images/arrow1.png");
infospot.position.set( -1952.57, -3029.47, -3458.79 );
infospot.addHoverText( 'This way to kitchen' );
infospot.addEventListener("click", () => {
  window.location.href = "mains3.html"; // Replace with the URL of the desired page
});

