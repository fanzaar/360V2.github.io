const panoramaImage = new PANOLENS.ImagePanorama("images/image2.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
  output:'overlay',
});

viewer.add(panoramaImage);
var infospot;
infospot = new PANOLENS.Infospot(300);
infospot.position.set( -1748.97, -3031.60, 3560.66 );
infospot.addHoverText( 'This way to kitchen' );
infospot.addEventListener("click", () => {
  window.location.href = "https://youtube.com"; // Replace with the URL of the desired page
});
