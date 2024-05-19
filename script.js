// script.js

const searchInput = document.getElementById('search-input');
const placeholderTexts = ["Search...", "Lipstick", "Skincare", "Fragrances", "New Arrivals"];
let currentIndex = 0;

function changePlaceholder() {
    searchInput.setAttribute('placeholder', placeholderTexts[currentIndex]);
    currentIndex = (currentIndex + 1) % placeholderTexts.length;
}

setInterval(changePlaceholder, 3000); // Change every 3 seconds
