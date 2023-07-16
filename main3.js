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
var clickPosition = new THREE.Vector3(-3055.79, -2654.36, 2925.52);
viewer.addEventListener('click', function(event) {
  // Check if the click event occurred within a certain range of the specified position
  var distanceThreshold = 200;
  var distance = viewer.camera.position.distanceTo(clickPosition);

  if (distance < distanceThreshold) {
    // The click event occurred within the range of the specified position
    // Perform your desired actions here
    console.log('Clicked on position:', clickPosition);
  }
});
