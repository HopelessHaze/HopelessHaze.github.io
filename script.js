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

// Customer Reviews Carousel
const reviews = document.querySelectorAll('.review');
let currentReviewIndex = 0;

function showNextReview() {
    reviews[currentReviewIndex].classList.remove('visible'); // Hide current review
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length; // Move to next review
    reviews[currentReviewIndex].classList.add('visible'); // Show next review
}

// Show a new review every 5 seconds
setInterval(showNextReview, 5000);

// Add "visible" class to the first review by default
if (reviews.length > 0) {
    reviews[0].classList.add('visible');
}

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