// Sélectionner les éléments
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const fireworksContainer = document.getElementById("fireworks");
const heartsContainer = document.getElementById("hearts");
const messageContainer = document.getElementById("message");

// Fonction pour faire exploser les feux d'artifice
function createFirework(x, y) {
    for (let i = 0; i < 20; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        firework.style.animationDelay = `${Math.random() * 0.5}s`;
        fireworksContainer.appendChild(firework);
        setTimeout(() => firework.remove(), 1000);
    }
}

// Fonction pour générer des cœurs autour de la page
function createHearts() {
    const numHearts = 1000; // Un grand nombre de cœurs
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('span');
        heart.classList.add('heart');
        heart.innerHTML = "❤️"; // Le caractère du cœur
        heart.style.left = `${Math.random() * window.innerWidth}px`; // Position aléatoire sur l'axe X
        heart.style.top = `${Math.random() * window.innerHeight}px`; // Position aléatoire sur l'axe Y
        heart.style.animationDuration = `${Math.random() * 2 + 1}s`; // Animation aléatoire
        heartsContainer.appendChild(heart);
    }
}

// Afficher le message après l'animation
function showMessage() {
    setTimeout(() => {
        messageContainer.innerHTML = "Nheeeeebeeeek bebitou ❤️"; // Affiche le message et le cœur
        messageContainer.style.display = "block"; // Rendre le message visible
    }, 2000); // Attendre la fin de l'animation
}

// Fonction pour déplacer le bouton "No" de manière aléatoire
function moveNoButton() {
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    // Déplacer le bouton "No" plusieurs fois sur l'écran (10 fois)
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);
            noButton.style.position = "absolute"; // S'assurer qu'il est en position absolue
            noButton.style.left = randomX + "px";
            noButton.style.top = randomY + "px";
        }, i * 200); // Déplacer le bouton "No" toutes les 200ms
    }
}

// Événement sur le bouton "Yes"
yesButton.addEventListener("click", function(event) {
    const x = event.clientX;
    const y = event.clientY;
    createFirework(x, y);
    createHearts(); // Générer les cœurs autour de la page
    showMessage(); // Afficher le message
    
    // Cacher le bouton Yes après le clic
    yesButton.classList.add("hidden"); // Ajouter la classe "hidden" pour cacher le bouton "Yes"
});

// Déplacer le bouton "No" lorsqu'on passe la souris dessus
noButton.addEventListener("mouseover", function() {
    moveNoButton(); // Appeler la fonction pour déplacer le bouton "No"
});
