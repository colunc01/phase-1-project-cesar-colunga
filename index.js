// Get all the album list items
const albums = document.querySelectorAll('#albumList li');

// Function to handle click on an album
function handleAlbumClick(event) {
  // Get the text content of the clicked album
  const albumName = event.target.textContent;
  
  // Show an alert with the clicked album's name
  alert(`Album clicked: ${albumName}`);
}

// Add click event listener to each album
albums.forEach((album) => {
  album.addEventListener('click', handleAlbumClick);
});
