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

// Submit Button Click Animation
const submitButton = document.querySelector('.contact-form .cta');

if (submitButton) {
    submitButton.addEventListener('click', (event) => {
        submitButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            submitButton.style.transform = 'scale(1)';
        }, 150); // Restore scale after 150ms
    });
}