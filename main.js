
const panoramaImage = new PANOLENS.ImagePanorama("images/image1.jpeg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

viewer.add(panoramaImage);

// Example values for pitch and yaw angle ranges
const minPitch = -Math.PI / 2; // Example minimum pitch angle (-30 degrees)
const maxPitch = Math.PI / 2; // Example maximum pitch angle (30 degrees)
const minYaw = -Math.PI / 2; // Example minimum yaw angle (-60 degrees)
const maxYaw = Math.PI / 2; // Example maximum yaw angle (60 degrees)

// Function to check if the specific location is in view
function isLocationInView() {
  const camera = viewer.getCamera();
  const currentPitch = camera.pitch; // Get the current camera pitch angle
  const currentYaw = camera.yaw; // Get the current camera yaw angle

  // Check if the current pitch and yaw angles are within the desired ranges
  if (
    currentPitch >= minPitch &&
    currentPitch <= maxPitch &&
    currentYaw >= minYaw &&
    currentYaw <= maxYaw
  ) {
    return true; // The specific location is in view
  } else {
    return false; // The specific location is not in view
  }
}

// Create and display an arrow button if the location is in view
function createArrowButton() {
  if (isLocationInView()) {
    const arrowButton = document.createElement("div");
    arrowButton.classList.add("arrow-button");
    // Set the arrow button's position and style as needed
    // For example:
    arrowButton.style.position = "fixed";
    arrowButton.style.top = "50px";
    arrowButton.style.left = "50px";
    arrowButton.style.backgroundImage = "url('images/arrow.png')";
    arrowButton.style.width = "40px";
    arrowButton.style.height = "40px";
    // Add event listeners or functionality to the arrow button if needed

    document.body.appendChild(arrowButton);
  }
}

// Example usage of createArrowButton()
createArrowButton();
function printCameraAngle() {
  const camera = viewer.getCamera();
  const currentPitch = camera.pitch;
  const currentYaw = camera.yaw;

  const angleElement = document.createElement("div");
  angleElement.classList.add("camera-angle");
  angleElement.textContent = `Pitch: ${currentPitch.toFixed(
    2
  )}, Yaw: ${currentYaw.toFixed(2)}`;
  document.body.appendChild(angleElement);
}

// Example usage of printCameraAngle()
printCameraAngle();
