// Your existing code for panorama setup
const panoramaImage = new PANOLENS.ImagePanorama("images/image1.jpeg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

viewer.add(panoramaImage);

// Function to create and display hotspots
function createHotspot(position, tooltip, url) {
  const hotspot = new PANOLENS.Infospot();
  hotspot.position.set(position.x, position.y, position.z);
  hotspot.addHoverText(tooltip);
  hotspot.addEventListener("click", () => {
    window.location.href = url; // Redirect to the specified URL
  });

  panoramaImage.add(hotspot);
}

// Example usage of createHotspot()
createHotspot(
  { x: 100, y: -50, z: -70 }, // Position of the hotspot in 3D space
  "Click me!", // Tooltip text to display on hover
  "youtube.com" // URL to redirect to when the hotspot is clicked
);
