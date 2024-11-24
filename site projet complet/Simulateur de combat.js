class Guerrier { //Création de la classe Guerrier et de ses attributs
    constructor(nom, pointsDeVie, attack, precision) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.attack = attack;
        this.precision = precision;
    }

    //Création d'une fonction pour attaquer l'adversaire
    attaquer(adversaire) {
        const chance = Math.random(); // Génère une chance de réussite d'attaque
        if (chance <= this.precision) { // Si la chance est inférieure ou égale à la précision, l'attaque marche
            adversaire.pointsDeVie -= this.attack; // Le nombre de PV de l'adversaire diminue
            console.log(`${this.nom} attaque ${adversaire.nom} et inflige ${this.attack} points de dégâts !`);
        } else {
            console.log(`${this.nom} attaque ${adversaire.nom}, mais rate...`);
        }
        if (adversaire.pointsDeVie <= 0) {
            console.log(`${adversaire.nom} est mort.`);
        }
    }
}

//Création des différents guerriers
let guerrier1 = new Guerrier('Gladiateur', 150, 10, 0.5); // Gladiateur avec ses attributs respectifs
let guerrier2 = new Guerrier('Lion', 100, 15, 0.75); // Lion avec ses attributs respectifs

//Début du combat
console.log('Le combat commence !');

//Boucle pour que les attaques continuent tant que les deux guerriers ont encore des PV
while (guerrier1.pointsDeVie > 0 && guerrier2.pointsDeVie > 0) {
    guerrier1.attaquer(guerrier2); //Le Gladiateur attaque le Lion

    //Vérifie si le Lion est mort
    if (guerrier2.pointsDeVie <= 0) {
        console.log(`Le combat est terminé ! ${guerrier1.nom} est le vainqueur !`);
        break;
    }

    guerrier2.attaquer(guerrier1); // Le Lion attaque le Gladiateur

    //Vérifie si le Gladiateur est mort
    if (guerrier1.pointsDeVie <= 0) {
        console.log(`Le combat est terminé ! ${guerrier2.nom} est le vainqueur !`);
        break;
    }
}

//Annonce de la fin du combat
console.log('Le combat est fini !'); 

