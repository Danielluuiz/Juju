document.getElementById('loveButton').addEventListener('click', createHeartExplosion);

// Initial floating hearts
setInterval(createFloatingHeart, 2000);

function createHeartExplosion() {
    const button = document.getElementById('loveButton');
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        document.body.appendChild(heart);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 2 + Math.random() * 3;
        const size = 1 + Math.random();
        
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = (20 * size) + 'px';
        
        // Custom animation for explosion
        const duration = 1 + Math.random();
        heart.style.transition = `all ${duration}s ease-out`;
        
        // Trigger reflow
        heart.offsetHeight;
        
        const moveX = Math.cos(angle) * 200 * Math.random();
        const moveY = Math.sin(angle) * 200 * Math.random() - 100; // Tend upwards
        
        requestAnimationFrame(() => {
            heart.style.transform = `translate(${moveX}px, ${moveY}px) scale(0)`;
            heart.style.opacity = '0';
        });
        
        setTimeout(() => heart.remove(), duration * 1000);
    }

    button.innerText = "Te amo! ❤️";
    setTimeout(() => {
        button.innerText = "Clique aqui";
    }, 3000);
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    const hearts = ['❤️', '💖', '💝', '💕', '🌸'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = (10 + Math.random() * 20) + 'px';
    heart.style.animationDuration = (3 + Math.random() * 4) + 's';
    
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 7000);
}
