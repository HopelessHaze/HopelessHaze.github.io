const dynamicTitle = document.querySelector('.dynamic-title');

// Define words to animate
const words = ['Sales Analysis', 'Digital Shelf Optimization', 'Strategic Consulting', 'Welcome to MarketplaceIP'];
let wordIndex = 0;

function changeWord() {
    dynamicTitle.textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
}

// Update word every 3 seconds
setInterval(changeWord, 2000);
