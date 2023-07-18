const panoramaImage = new PANOLENS.ImagePanorama("images/image3.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
  output:'console',
});

viewer.add(panoramaImage);
//-3055.79, -2654.36, 2925.52
var infospot;
infospot = new PANOLENS.Infospot();
infospot.position.set( -3055.79, -2654.36, 2925.52 );
infospot.addHoverText( 'This way to kitchen' );
viewer.add(infospot);
