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
infospot = new PANOLENS.Infospot(300,"images/arrow.png");
infospot.position.set( -3055.79, -2654.36, 2925.52 );
infospot.addHoverText( 'This way to kitchen' );
panoramaImage.add(infospot);
viewer.add(panoramaImage);
//-3055.79, -2654.36, 2925.52

