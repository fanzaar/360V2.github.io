const panoramaImage = new PANOLENS.ImagePanorama("images/image1.jpeg");
const imageContainer = document.querySelector(".image-container");
const positionDisplay = document.querySelector("#position-display");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

viewer.enableControl(PANOLENS.CONTROLS.ORBIT, { positionIndicator: true });

viewer.add(panoramaImage);

// Event listener for mouse click
viewer.container.addEventListener("click", (event) => {
  const position = viewer.getControlPosition(event);
  positionDisplay.textContent = `Position: x: ${position.x.toFixed(2)}, y: ${position.y.toFixed(2)}, z: ${position.z.toFixed(2)}`;
});
