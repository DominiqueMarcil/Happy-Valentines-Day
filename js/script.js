function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); // Remove heart after 5 seconds

    return heart;
}

function startFalling() {
    setInterval(() => {
        const heart = createHeart();
        const startPosition = Math.random() * window.innerWidth;
        const endPosition = Math.random() * window.innerHeight;
        heart.style.left = `${startPosition}px`;
        heart.style.top = `${-50}px`; // Start the heart above the visible area
        setTimeout(() => {
            heart.style.top = `${endPosition}px`;
        }, 0);
    }, 500); // Create a new heart every 0.5 seconds
}

startFalling();