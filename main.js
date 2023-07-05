// Create the panorama image
const panoramaImage = new PANOLENS.ImagePanorama("images/image1.jpeg");

// Get the container element
const imageContainer = document.querySelector(".image-container");

// Create the viewer with the container
const viewer = new PANOLENS.Viewer({ container: imageContainer });

// Add the panorama image to the viewer
viewer.add(panoramaImage);

// Create a separate div for displaying the position
const positionDisplay = document.createElement("div");
positionDisplay.setAttribute("id", "position-display");
document.body.appendChild(positionDisplay);

// Event listener for mouse click
viewer.container.addEventListener("click", (event) => {
  const position = viewer.getControlPosition(event);
  positionDisplay.textContent = `Position: x: ${position.x.toFixed(2)}, y: ${position.y.toFixed(2)}, z: ${position.z.toFixed(2)}`;
});
