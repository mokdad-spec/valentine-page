// Sélection des éléments
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");

// Fonction qui déplace le bouton "No" lorsque l'utilisateur clique dessus
noButton.addEventListener("mouseover", function() {
    const maxX = window.innerWidth - noButton.offsetWidth; // Largeur maximale
    const maxY = window.innerHeight - noButton.offsetHeight; // Hauteur maximale
    const randomX = Math.floor(Math.random() * maxX); // Position X aléatoire
    const randomY = Math.floor(Math.random() * maxY); // Position Y aléatoire

    noButton.style.position = "absolute"; // Positionner le bouton de manière absolue
    noButton.style.left = randomX + "px"; // Déplacer sur l'axe X
    noButton.style.top = randomY + "px"; // Déplacer sur l'axe Y
});

// Fonction qui affiche un message lorsque l'utilisateur clique sur "Yes"
yesButton.addEventListener("click", function() {
    alert("Yay! 💖 Thank you, Salma!");
});

