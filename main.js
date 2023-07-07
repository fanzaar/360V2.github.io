// Create the panorama image
const panoramaImage = new PANOLENS.ImagePanorama("images/image1.jpeg");

// Get the container element
const imageContainer = document.querySelector(".image-container");

// Create the viewer with the container
const viewer = new PANOLENS.Viewer({ container: imageContainer });

// Add the panorama image to the viewer
viewer.add(panoramaImage);

// Create an infospot at the specified position
const infospot = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
infospot.position.set(0, 0,0); // Replace with the desired coordinates
viewer.add(infospot);

