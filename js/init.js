///////INIT//////
function initialize() {

    while (player1.x == player2.x || player1.y == player2.y) {
        player1.x = Math.floor(Math.random() * taillePlateau);
        player1.y = Math.floor(Math.random() * taillePlateau);
        player2.x = Math.floor(Math.random() * taillePlateau);
        player2.y = Math.floor(Math.random() * taillePlateau);
    }

    lePlateau.destroy();
    lePlateau.build();

    var audio = new Audio('sons/tune.mp3');
    tourDe = (function() {
        var debut = Math.floor(Math.random() * 2);
        if (debut >= 1) {
            return player1.nom;
        } else {
            return player2.nom;
        }
    })();
    swal(tourDe + " commence la partie");
    audio.play()
    audio.volume = 0.08;
    
    }
    timer = setInterval(function() {

        afficherJoueur1.innerHTML = player1.x + " " + player1.y;
        afficherJoueur2.innerHTML = player2.x + " " + player2.y;

        if (tourDe == player1.nom || tourDe == player2.nom) {
            lePlateau.destroy();
            lePlateau.build();
            play(tourDe);
            verifGameOver(player1.pv, player2.pv);

        }

    }, 100)

initialize();