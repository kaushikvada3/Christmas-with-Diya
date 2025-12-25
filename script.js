
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Magical Starry Background ---
    const starsContainer = document.createElement('div');
    starsContainer.id = 'stars-container';
    document.body.prepend(starsContainer);

    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        star.style.opacity = Math.random();
        starsContainer.appendChild(star);
    }

    // --- 2. Snowfall (Enhanced) ---
    const snowContainer = document.getElementById('snow-container');
    function createSnowflake() {
        if (!snowContainer) return;
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerText = ['❄', '❅', '❆', '✨'][Math.floor(Math.random() * 4)];
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.fontSize = Math.random() * 1.5 + 0.5 + 'rem';
        const duration = Math.random() * 5 + 5;
        snowflake.style.animation = `fall ${duration}s linear infinite`;
        // Removed cleanup for perf in this specific demo context
        snowContainer.appendChild(snowflake);
        setTimeout(() => snowflake.remove(), duration * 1000);
    }
    setInterval(createSnowflake, 200);


    // --- 3. Fairy Dust Cursor Trail ---
    document.addEventListener('mousemove', (e) => {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = e.pageX + 'px';
        particle.style.top = e.pageY + 'px';

        // Random colors: Gold, White, Pink
        const colors = ['#ffd700', '#ffffff', '#ff69b4'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    });


    // --- 4. Envelope Logic ---
    const envelope = document.querySelector('.envelope-wrapper');
    const letterOverlay = document.querySelector('.letter-overlay');
    const closeBtn = document.querySelector('.close-btn');

    if (envelope) {
        envelope.addEventListener('click', () => {
            envelope.classList.add('open');
            // Wait for envelope open animation, then show modal
            setTimeout(() => {
                letterOverlay.classList.add('show');
            }, 800);
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            letterOverlay.classList.remove('show');
            // Optional: Close envelope back 
            setTimeout(() => {
                envelope.classList.remove('open');
            }, 500);
        });
    }


    // --- 5. Music Control ---
    const musicBtn = document.getElementById('music-btn');
    const bgMusic = document.getElementById('bg-music');
    let isPlaying = false;

    if (musicBtn && bgMusic) {
        musicBtn.addEventListener('click', () => {
            if (isPlaying) {
                bgMusic.pause();
                musicBtn.innerHTML = '<i class="fas fa-play"></i>';
                musicBtn.style.animation = 'none';
            } else {
                bgMusic.play().catch(e => console.log(e));
                musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
                musicBtn.style.animation = 'rotate 3s linear infinite';
            }
            isPlaying = !isPlaying;
        });
    }
});
