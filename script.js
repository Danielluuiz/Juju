document.addEventListener('DOMContentLoaded', () => {
    // Letter Modal Logic
    const letterButton = document.getElementById('letterButton');
    const letterModal = document.getElementById('letterModal');
    const closeBtn = document.querySelector('.close-btn');

    if (letterButton) {
        letterButton.addEventListener('click', () => {
            letterModal.style.display = 'flex';
            // Slight delay to allow display flex to apply before opacity transition
            setTimeout(() => {
                letterModal.classList.add('show');
            }, 10);
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            letterModal.classList.remove('show');
            setTimeout(() => {
                letterModal.style.display = 'none';
            }, 300); // Wait for transition
        });
    }

    // Close modal if clicking outside
    window.addEventListener('click', (event) => {
        if (event.target == letterModal) {
            letterModal.classList.remove('show');
            setTimeout(() => {
                letterModal.style.display = 'none';
            }, 300);
        }
    });

    // Initial floating hearts
    setInterval(createFloatingHeart, 2000);
});

function createFloatingHeart() {
    const heart = document.createElement('div');
    const hearts = ['❤️', '💖', '💝', '💕', '🌸'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.classList.add('heart');

    // Ensure CSS animation runs for floating hearts
    // (It is default in CSS, but good to be clear)

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = (10 + Math.random() * 20) + 'px';
    heart.style.animationDuration = (3 + Math.random() * 4) + 's';

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}
