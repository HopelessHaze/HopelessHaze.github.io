const dynamicTitle = document.querySelector('.dynamic-title');

// Define words to animate
const words = ['Analyze', 'Predict', 'Win', 'Excel'];
let wordIndex = 0;

function changeWord() {
    dynamicTitle.textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
}

// Update word every 2 seconds
setInterval(changeWord, 2000);