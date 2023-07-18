const panoramaImage = new PANOLENS.ImagePanorama("images/image3.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
  output:'console',
});
var infospot;
infospot = new PANOLENS.Infospot(700,"images/arrow1.png");
infospot.position.set( -3681.86, -2855.32, 1840.94 );
infospot.addHoverText( 'This way to Hall' );
infospot.addEventListener("click", () => {
  // Code to be executed when infospot is clicked
  // Replace this with your own code
  window.location.href = "mains2.html"; // Redirect to another page
});
panoramaImage.add(infospot);
viewer.add(panoramaImage);
//-3055.79, -2654.36, 2925.52


