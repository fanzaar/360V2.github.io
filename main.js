// Create the panorama image
const panoramaImage = new PANOLENS.ImagePanorama("images/image1.jpeg");

// Get the container element
const imageContainer = document.querySelector(".image-container");

// Create the viewer with the container
const viewer = new PANOLENS.Viewer({ container: imageContainer });

// Add the panorama image to the viewer
viewer.add(panoramaImage);

// Event listener for mouse click
viewer.container.addEventListener("click", (event) => {
  const position = viewer.getControlPosition(event);
  console.log("Position:", position);
});
