// Get all the album list items
const albums = document.querySelectorAll('#albumList li');

// Function to handle click on an album
function handleAlbumClick(event) {
  // Show an alert when an album is clicked
  alert("I've been clicked!");
}

// Add click event listener to each album
albums.forEach((album) => {
  album.addEventListener('click', handleAlbumClick);
});
