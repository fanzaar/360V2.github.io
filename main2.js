
const panoramaImage = new PANOLENS.ImagePanorama("images/image2.jpg");
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
infospot = new PANOLENS.Infospot(400,"images/ar.jpg");
infospot.position.set( -1748.97, -3031.60, 3560.66 );
infospot.addHoverText( 'This way to kitchen' );
panoramaImage.add(infospot);
infospot.addEventListener("click", () => {
  // Code to be executed when infospot is clicked
  // Replace this with your own code
  window.location.href = "mains.html"; // Redirect to another page
});
