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
var infospot,infospot2;
infospot = new PANOLENS.Infospot(700,"images/arrow1.png");
infospot.position.set( -1952.57, -3029.47, -3458.79 );
infospot.addHoverText( 'This way to bathroom' );
infospot.addEventListener("click", () => {
  window.location.href = "mains3.html"; // Replace with the URL of the desired page
});
infospot2 = new PANOLENS.Infospot(700,"images/arrow1.png");
infospot2.position.set( 4356.00, -1700.25, -1743.81 );
infospot2.addHoverText( 'This way to second room' );
infospot2.addEventListener("click", () => {
  window.location.href = "mains2.html"; // Replace with the URL of the desired page
});
panoramaImage.add(infospot);
panoramaImage.add(infospot2);
