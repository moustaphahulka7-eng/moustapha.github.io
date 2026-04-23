let panier = [];
let total = 0;

// Ajouter un plat au panier
function ajouterPlat(nom, prix) {
    panier.push({ nom, prix });
    total += prix;

    alert(nom + " ajouté au panier ✅");
    afficherPanier();
}


// Afficher le panier dans la console
function afficherPanier() {
    console.log("=== PANIER ===");
    panier.forEach((item, index) => {
        console.log((index + 1) + ". " + item.nom + " - " + item.prix + " DH");
    });

    console.log("Total : " + total + " DH");
}

// Simuler commande
function commander() {
    if (panier.length === 0) {
        alert("Votre panier est vide ❌");
    } else {
        alert("Commande envoyée avec succès 🚀 Total: " + total + " DH");
        panier = [];
        total = 0;
    }
}