// Dynamic Title Animation
const dynamicTitle = document.querySelector('.dynamic-title');

// Define words to animate in the title
const titleWords = ['Welcome to MarketplaceIP', 'Optimize Your Strategy', 'Achieve eCommerce Success'];
let titleIndex = 0;

function changeTitleWord() {
    dynamicTitle.textContent = titleWords[titleIndex];
    titleIndex = (titleIndex + 1) % titleWords.length; // Cycle through words
}

// Update the title every 3 seconds
setInterval(changeTitleWord, 3000);

// Scroll to Sections on Navigation Click
const navLinks = document.querySelectorAll('nav .menu li a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1); // Get target section ID
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Highlight Active Review (Optional Carousel)
const reviewTiles = document.querySelectorAll('.review');
let activeReviewIndex = 0;

function highlightNextReview() {
    // Remove active state from the current review
    reviewTiles[activeReviewIndex].classList.remove('active');

    // Move to the next review
    activeReviewIndex = (activeReviewIndex + 1) % reviewTiles.length;

    // Highlight the next review
    reviewTiles[activeReviewIndex].classList.add('active');
}

// Automatically switch highlighted reviews every 5 seconds
setInterval(highlightNextReview, 5000);

// Add hover interaction to review tiles
reviewTiles.forEach(tile => {
    tile.addEventListener('mouseover', () => {
        tile.style.transform = 'scale(1.05)';
    });

    tile.addEventListener('mouseout', () => {
        tile.style.transform = 'scale(1)';
    });
});