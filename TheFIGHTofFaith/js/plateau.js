///////PLATEAU////////


function Plateau(taillePlateau, tailleCase) {



    this.taille = taillePlateau;
    this.couleur = "#521455";

    this.trous = [
        [Math.floor(Math.random() * taillePlateau + 1), Math.floor(Math.random() * taillePlateau + 1)],
        [Math.floor(Math.random() * taillePlateau + 1), Math.floor(Math.random() * taillePlateau + 1)],
        [Math.floor(Math.random() * taillePlateau + 1), Math.floor(Math.random() * taillePlateau + 1)],
        [Math.floor(Math.random() * taillePlateau + 1), Math.floor(Math.random() * taillePlateau + 1)],
        [Math.floor(Math.random() * taillePlateau + 1), Math.floor(Math.random() * taillePlateau + 1)]
    ];
    this.build = function() {

        var c = document.getElementById("jeu");
        var context = c.getContext("2d");
        var img = document.getElementById("case");
        var pat = context.createPattern(img, "repeat");
        context.rect(0, 0, 20, 20);
        context.fillStyle = pat;
        context.fillRect(0, 0, tailleCase * taillePlateau, tailleCase * taillePlateau);

        for (var i = 0; i < this.trous.length; i++) {
            while ((this.trous[i][0] == player1.x && this.trous[i][1] == player1.y) || (this.trous[i][0] == player2.x && this.trous[i][1] == player2.y) || (this.trous[i][0] == crayon.x && this.trous[i][1] == crayon.y) || (this.trous[i][0] == poisson.x && this.trous[i][1] == poisson.y) || (this.trous[i][0] == valise.x && this.trous[i][1] == valise.y) || (this.trous[i][0] == poele.x && this.trous[i][1] == poele.y)) {
                this.trous[i][0] = Math.floor(Math.random() * taillePlateau);
                this.trous[i][1] = Math.floor(Math.random() * taillePlateau);
            }
            context.drawImage(imgTrou, this.trous[i][0] * tailleCase, this.trous[i][1] * tailleCase, tailleCase, tailleCase);
        }

        player1.draw();
        player2.draw();

        if (crayon.draw) {
            crayon.draw();
        }
        if (poisson.draw) {
            poisson.draw();
        }
        if (valise.draw) {
            valise.draw();
        }
        if (poele.draw) {
            poele.draw();
        }

        afficherTour.innerHTML = "C'est au tour de " + tourDe;

    };
    this.destroy = function() {
        context.clearRect(0, 0, taillePlateau * tailleCase, taillePlateau * tailleCase);
    };
}
var lePlateau = new Plateau(taillePlateau, tailleCase);
