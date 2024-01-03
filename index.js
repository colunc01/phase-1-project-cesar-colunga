// console.log('hello');

// try {
//   console.log('inside try');
//   //const res = fetch('http://localhost:3000/albums/')
//   //console.log(res.status)
//   fetch("db.json")
//   .then(response => response.json())
//   .then(data => showInfo(data));
  
// } catch (error){
//   console.log('inside catch');
//   console.error(error)
// }

// function showInfo(data){
//   console.log(data.albumTitle);
// }


fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(response => {
    if (!response.ok) {
      console.log('in first if');
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Work with the data received from the API
    console.log('inside then');
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.log('ERROR');
    console.error('There was a problem with the fetch operation:', error);
  });

// .then(response => response.json())
// .then(data => showInfo(data));

// function showInfo(data){
//   console.table(data.albums);
// }
/*
// Get all the album list items
const albums = document.querySelectorAll('#albumList li');
const albumDetails = document.getElementById('albumDetails');

// Function to handle click on an album
// function handleAlbumClick(event) {
//   // Get the text content of the clicked album
//   const albumName = event.target.textContent;  
  
//   // Show an alert with the clicked album's name
//   alert(`Album clicked: ${albumName}`);
// }

// Function to handle click on an album
async function handleAlbumClick(event) {
    const albumName = event.target.textContent;  
    const albumId = event.target.id; // Get the clicked album's ID (album1, album2, etc.)
    //alert(`Album clicked: ${albumName}`);
    
    try {
      // Fetch album details from your db.json using fetch API
      const response = await fetch(`/home/colunco1/code/phase-1/phase-1-project-cesar-colunga/db.json`); 
      const data = await response.json();
      const album = data.albums.find(albums => album.id === Number(id.slice(-1))); // Get specific album data by ID
    
      // Display album details
      albumDetails.innerHTML = `<h2>${albums.albumTitle}</h2>`;
      albumDetails.innerHTML += '<ol>';
      albums.tracks.forEach(track => {
        albumDetails.innerHTML += `<li>${tracks.title}</li>`;
      });
      albumDetails.innerHTML += '</ol>';
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

// Add click event listener to each album
albums.forEach((album) => {
  album.addEventListener('click', handleAlbumClick);
});
*/