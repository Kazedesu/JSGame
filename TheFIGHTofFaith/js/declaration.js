///DECLARATION///
var canvasJeu = document.getElementById('jeu');
var context = canvasJeu.getContext('2d');

/* Declaration des imgs*/

var imgPlay1 = document.getElementById("Play1");
var imgPlay2 = document.getElementById("Play2");

/*Affichage armes*/
var imgCrayon = document.getElementById("crayon");
var imgPoisson = document.getElementById("poisson");
var imgValise = document.getElementById("valise");
var imgPoele = document.getElementById("poele");

var imgTrou = document.getElementById("trou");

//Affichage du rapport d'activité
var afficherTour = document.getElementById("tour");
var afficherDeplacements = document.getElementById("deplacements");
var afficherJoueur1 = document.getElementById("joueur1");
var afficherJoueur2 = document.getElementById("joueur2");
//dimensions du plateau
canvasJeu.width = "320";
canvasJeu.height = canvasJeu.width;
var taillePlateau = 10;
var tailleCase = canvasJeu.width / taillePlateau;

var timer;
var tourDe = "";
var mouvement = [0, 0];
var key = [];

document.addEventListener("keydown", function(e) {
    e.preventDefault();
    key[e.keyCode] = e.type == 'keydown';
});

function play(qui) {

    lePlateau.destroy();
    lePlateau.build();

    if (qui == player1.nom) {
        player1.deplacer();
    } else if (qui == player2.nom) {
        player2.deplacer();
    }
}




function majAffichage() {

    afficherJoueur1.innerHTML = player1.nom + "<br/> PV: " + player1.pv + "/100" + "<br/> Arme: " + player1.arme.nom + "<br/> Puissance:" + player1.arme.puissance;
    afficherJoueur2.innerHTML = player2.nom + "<br/> PV: " + player2.pv + "/100" + "<br/> Arme: " + player2.arme.nom + "<br/> Puissance:" + player2.arme.puissance;
}

// Passe la main à l'autre joueur
function changeTour() {
    if (player1.limiteMouvements <= 0) {

        tourDe = player2.nom;
        player1.limiteMouvements = 3;

    } else if (player2.limiteMouvements <= 0) {

        tourDe = player1.nom;
        player2.limiteMouvements = 3;
    }
}
// Vérifie si le jeu est terminé
function verifGameOver(pvDuJoueur1, pvDuJoueur2) {
    if (pvDuJoueur1 <= 0 || pvDuJoueur2 <= 0) {

        clearInterval(timer);
        annoncerGagnant();
        window.location.reload();

    }
}
// Donne le nom du gagnant
function annoncerGagnant() {
    if (player2.pv <= 0) {
        var audio2 = new Audio('sons/end.mp3');
        audio2.volume = 0.3;
        audio2.play();
        alert("Victoire! Joueur 1 a gagné! ");


    } else if (player1.pv <= 0) {
        var audio2 = new Audio('sons/end.mp3');
        audio2.volume = 0.3;
        audio2.play();
        alert("Victoire! Joueur 2 a gagné! ");

    } else {
        alert("Appuyez sur F5 pour recharger la page");

    }
}
