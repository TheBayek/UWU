const button = document.getElementById('uwu-button');
const audio = document.getElementById('uwu-audio');
const textSpan = button.querySelector('.button-text');

let isPlaying = false;

button.addEventListener('click', () => {
    if (isPlaying) {
        // Arrête le son
        audio.pause();
        audio.currentTime = 0; // Remet au début
        
        // Met à jour l'interface
        isPlaying = false;
        button.classList.remove('playing');
        textSpan.textContent = "UWU";
    } else {
        // Lance le son
        audio.play().then(() => {
            // Si la lecture réussit
            isPlaying = true;
            button.classList.add('playing');
            textSpan.textContent = "STOP";
        }).catch(error => {
            console.error("Erreur lors de la lecture:", error);
            alert("Il semble que le lien du son UWU soit inaccessible ou bloqué par le navigateur.");
        });
    }
});

// Quand le son se termine naturellement
audio.addEventListener('ended', () => {
    isPlaying = false;
    button.classList.remove('playing');
    textSpan.textContent = "UWU";
});
