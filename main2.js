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
panorama.link( "images/image1.jpg", new THREE.Vector3( -1742.29,-1574.03,4406.39 ) )
// Create an infospot at the specified position
const infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
infospot.position.set(-1742.29,-1574.03,4406.39);

// Set the URL to redirect when the infospot is clicked
infospot.addEventListener("click", () => {
  window.location.href = "https://youtube.com"; // Replace with the desired URL
});

// Add the infospot to the viewer
viewer.add(infospot);
