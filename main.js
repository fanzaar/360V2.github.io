// Create the panorama image
const panoramaImage = new PANOLENS.ImagePanorama("images/image1.jpeg");

// Get the container element
const imageContainer = document.querySelector(".image-container");

// Create the viewer with the container
const viewer = new PANOLENS.Viewer({ container: imageContainer });

// Add the panorama image to the viewer
viewer.add(panoramaImage);

// Manually specify the coordinates for the infospot
const infospotX = -4797.28; // X-coordinate of infospot
const infospotY = -965.44; // Y-coordinate of infospot
const infospotZ = -1003.95; // Z-coordinate of infospot

// Create an infospot at the specified position
const infospot = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
infospot.position.set(infospotX, infospotY, infospotZ);
viewer.add(infospot);

// Event listener for infospot click
infospot.addEventListener("click", () => {
  window.location.href = "https://youtube.com"; // Replace with your desired URL
});
