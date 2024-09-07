  // Function to open the popup
  function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Call the openPopup function when the page loads
window.addEventListener('load', openPopup);