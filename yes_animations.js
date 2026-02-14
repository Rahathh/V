// Create floating hearts animation
function createFloatingHeart() {
    const heartsContainer = document.querySelector('.hearts-background');
    const heart = document.createElement('div');
    
    // Random heart emoji
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.opacity = '0';
    heart.style.animation = `floatUp ${Math.random() * 3 + 5}s linear`;
    
    heartsContainer.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Add CSS animation for floating hearts
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.8;
        }
        90% {
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Create hearts every 400ms
setInterval(createFloatingHeart, 400);

// Add sparkle effect on click
document.addEventListener('click', (e) => {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.textContent = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = (e.clientX + (Math.random() - 0.5) * 50) + 'px';
            sparkle.style.top = (e.clientY + (Math.random() - 0.5) * 50) + 'px';
            sparkle.style.fontSize = '20px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9999';
            sparkle.style.animation = 'sparkleOut 0.8s ease-out';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 800);
        }, i * 100);
    }
});

// Sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleOut {
        0% {
            opacity: 1;
            transform: scale(0);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            opacity: 0;
            transform: scale(0.5) translateY(-30px);
        }
    }
`;
document.head.appendChild(sparkleStyle);
