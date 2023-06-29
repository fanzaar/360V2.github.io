const panoramaImage = new PANOLENS.ImagePanorama("images/image1.jpeg");
const viewerContainer = document.querySelector(".viewer-container");
const arrowButton = document.querySelector(".arrow-button");

const viewer = new PANOLENS.Viewer({
  container: viewerContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

viewer.add(panoramaImage);

// Update arrow button position based on viewer rotation
function updateButtonPosition() {
  const rotation = viewer.getCamera().rotation.y;
  const containerWidth = viewerContainer.offsetWidth;
  const containerHeight = viewerContainer.offsetHeight;
  const buttonSize = arrowButton.offsetWidth;

  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;

  // Calculate button position relative to the image based on rotation
  const buttonX = centerX + Math.cos(rotation) * (containerWidth / 3) - buttonSize / 2;
  const buttonY = centerY + Math.sin(rotation) * (containerHeight / 3) - buttonSize / 2;

  arrowButton.style.left = buttonX + "px";
  arrowButton.style.top = buttonY + "px";
}

// Add event listener to update button position on viewer change
viewer.addEventListener("panolens-viewer-handler", updateButtonPosition);

// Initial button position update
updateButtonPosition();
