// JavaScript for popup functionality
function togglePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
  }
  
  // Close the popup if the user clicks outside of it
  window.onclick = function(event) {
    var popup = document.getElementById('popup');
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  }
  