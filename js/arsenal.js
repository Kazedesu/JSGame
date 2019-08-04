//////////////Arsenal///////

function Arme(nom, img, puissance, x, y) {

    this.nom = nom;
    this.img = img;
    this.puissance = puissance;
    this.x = x;
    this.y = y;
    this.draw = function() {

        while ((this.x == player1.x && this.y == player1.y) || (this.x == player2.x && this.y == player2.y)) {
            this.x = Math.floor(Math.random() * taillePlateau);
            this.y = Math.floor(Math.random() * taillePlateau);
        }
        context.drawImage(this.img, this.x * tailleCase + 5, this.y * tailleCase + 5, tailleCase - 10, tailleCase - 10);

    };
}

// //

var crayon = new Arme("crayon", imgCrayon, 10, undefined, undefined);
var poisson = new Arme("poisson", imgPoisson, 20, Math.floor(Math.random() * taillePlateau), Math.floor(Math.random() * taillePlateau));
var valise = new Arme("valise", imgValise, 27, Math.floor(Math.random() * taillePlateau), Math.floor(Math.random() * taillePlateau));
var poele = new Arme("poele", imgPoele, 35, Math.floor(Math.random() * taillePlateau), Math.floor(Math.random() * taillePlateau));
