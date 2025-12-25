
// Snowfall Logic
document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snow-container');
    const snowChars = ['❄', '❅', '❆', '•'];

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerText = snowChars[Math.floor(Math.random() * snowChars.length)];

        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.fontSize = Math.random() * 1.5 + 0.5 + 'rem';
        snowflake.style.opacity = Math.random();

        const duration = Math.random() * 5 + 5;
        snowflake.style.animation = `fall ${duration}s linear infinite`;
        snowflake.style.animationDelay = Math.random() * 5 + 's';

        snowContainer.appendChild(snowflake);
    }

    // Spawn more snowflakes for a fuller effect
    for (let i = 0; i < 75; i++) {
        createSnowflake();
    }
});

// Add keyframes for falling here via JS if not in CSS, 
// but we have it in CSS, just need to make sure 'fall' matches.
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes fall {
        0% { transform: translateY(-10vh) rotate(0deg); }
        100% { transform: translateY(110vh) rotate(360deg); }
    }
`;
document.head.appendChild(styleSheet);


// Music Toggle
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

if (musicBtn && bgMusic) {
    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.innerHTML = '<i class="fas fa-music"></i>';
            musicBtn.style.animation = 'none';
        } else {
            bgMusic.play().catch(e => console.log("Audio play failed:", e));
            musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
            musicBtn.style.animation = 'rotate 3s linear infinite';
        }
        isPlaying = !isPlaying;
    });
}


// Letter Reveal (Simple)
const clickBtn = document.getElementById('click-btn');
const letterText = document.getElementById('letter-text');

if (clickBtn) {
    clickBtn.addEventListener('click', () => {
        clickBtn.style.display = 'none';
        if (letterText) letterText.classList.add('open');
    });
}
