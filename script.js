document.getElementById("cardForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Récupération des valeurs du formulaire
    const message = document.getElementById('message').value;
    const fontSize = document.getElementById('fontSize').value;
    const textColor = document.getElementById('textColor').value;
    const bgColor = document.getElementById('bgColor').value;
    const imageUrl = document.getElementById('imageUrl').value;

    // Récupération de l'élément de carte
    const card = document.getElementById("card");

    // Modification du style de la carte
    card.style.color = textColor;
    card.style.backgroundColor = bgColor;
    card.style.backgroundImage = `url('${imageUrl}')`;
    card.style.backgroundSize = 'contain'; // Ajuster la taille de l'image pour qu'elle soit entièrement visible dans la carte sans déformation
    card.style.backgroundPosition = 'center'; // Centrer l'image de fond
    card.style.backgroundRepeat = 'no-repeat'; // Ne pas répéter l'image de fond

    // Définition de la taille de la police en fonction de la sélection de l'utilisateur
    switch (fontSize) {
        case "petit":
            card.style.fontSize = "small"; // Ou toute autre taille de police appropriée pour "petit"
            break;
        case "moyen":
            card.style.fontSize = "medium"; // Ou toute autre taille de police appropriée pour "moyen"
            break;
        case "grand":
            card.style.fontSize = "large"; // Ou toute autre taille de police appropriée pour "grand"
            break;
        default:
            card.style.fontSize = "medium"; // Défaut à la taille "moyen" si aucune sélection valide n'est trouvée
    }

    // Ajout de la classe CSS pour aligner le texte au bas de la carte
    card.classList.add("align-bottom");

    // Affichage du message
    card.innerText = message;
});
