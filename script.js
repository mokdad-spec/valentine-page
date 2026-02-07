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

// Fonction pour générer des coeurs
function createHearts(x, y) {
    const numHearts = 10; // Nombre de coeurs
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('span');
        heart.classList.add('heart');
        heart.innerHTML = "❤️"; // Le caractère du coeur
        heart.style.left = `${x + Math.random() * 100 - 50}px`;
        heart.style.top = `${y + Math.random() * 100 - 50}px`;
        heart.style.animationDuration = `${Math.random() * 2 + 1}s`;
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 2000); // Supprimer après l'animation
    }
}

// Afficher le message avec un coeur
function showMessage() {
    messageContainer.innerHTML = "nheebeek bebitou ❤️"; // Affiche le message et le coeur
}

// Événement sur le bouton "Yes"
yesButton.addEventListener("click", function(event) {
    const x = event.clientX;
    const y = event.clientY;
    createFirework(x, y);
    createHearts(x, y);
    showMessage(); // Afficher le message
});

// Déplacer le bouton "No" lorsqu'on passe la souris dessus
noButton.addEventListener("mouseover", function() {
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
});
