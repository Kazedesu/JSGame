/////JOUEURS///////////


function Player(id, img, nom, x, y, arme, pv) {
    this.id = id;
    this.img = img;
    this.nom = nom;
    this.x = x;
    this.y = y;
    this.arme = arme;
    this.pv = pv;

    this.limiteMouvements = 3;

    this.verifierCollision = function(code) {
        var hole;
        var p;
        switch (code) {
            case 37:
                for (p = 0; p < lePlateau.trous.length; p++) {

                    if (this.x - 1 == lePlateau.trous[p][0] && this.y == lePlateau.trous[p][1]) {
                        hole = 1;
                    }
                }
                break;

            case 38:
                for (p = 0; p < lePlateau.trous.length; p++) {

                    if (this.y - 1 == lePlateau.trous[p][1] && this.x == lePlateau.trous[p][0]) {
                        hole = 1;
                    }

                }
                break;

            case 39:
                for (p = 0; p < lePlateau.trous.length; p++) {

                    if (this.x + 1 == lePlateau.trous[p][0] && this.y == lePlateau.trous[p][1]) {
                        hole = 1;
                    }

                }
                break;

            case 40:
                for (p = 0; p < lePlateau.trous.length; p++) {

                    if (this.y + 1 == lePlateau.trous[p][1] && this.x == lePlateau.trous[p][0]) {
                        hole = 1;
                    }

                }
                break;
        }
        if (hole == 1) {
            hole = undefined;
            return true;
        } else {
            hole = undefined;
            return false;
        }
    };
    this.deplacer = function() {
        if (key[37]) {
            if (this.x > 0 && !this.verifierCollision(37)) {
                mouvement = [-1, 0];

            } else {
                mouvement = [0, 0];
                swal({
                    title: "Vous ne pouvez pas aller plus loin",
                    imgUrl: 'omg.png',
                    imgWidth: 320,
                    imgHeight: 320,
                    timer: 1200,
                    showConfirmButton: false
                });;

            }
            this.limiteMouvements -= 1;
        } else if (key[38]) {
            if (this.y > 0 && !this.verifierCollision(38)) {
                mouvement = [0, -1];
            } else {
                mouvement = [0, 0];
                swal({
                    title: "Vous ne pouvez pas aller plus loin",
                    imgUrl: 'omg.png',
                    imgWidth: 320,
                    imgHeight: 320,
                    timer: 1200,
                    showConfirmButton: false
                });;

            }
            this.limiteMouvements -= 1;
        } else if (key[39]) {
            if (this.x < taillePlateau - 1 && !this.verifierCollision(39)) {
                mouvement = [1, 0];
            } else {
                mouvement = [0, 0];
                swal({
                    title: "Vous ne pouvez pas aller plus loin",
                    imgUrl: 'omg.png',
                    imgWidth: 320,
                    imgHeight: 320,
                    timer: 1200,
                    showConfirmButton: false
                });;

            }
            this.limiteMouvements -= 1;
        } else if (key[40]) {
            if (this.y < taillePlateau - 1 && !this.verifierCollision(40)) {
                mouvement = [0, 1];

            } else {
                mouvement = [0, 0];
                swal({
                    title: "Vous ne pouvez pas aller plus loin",
                    imgUrl: 'omg.png',
                    imgWidth: 320,
                    imgHeight: 320,
                    timer: 1200,
                    showConfirmButton: false
                });;

            }
            this.limiteMouvements -= 1;
        } else if (key[13]) {
            this.limiteMouvements = 0;
        }


        this.x += mouvement[0];
        this.y += mouvement[1];
        afficherDeplacements.innerHTML = 'Il vous reste ' + this.limiteMouvements + " déplacements";
        majAffichage();
        key[38] = false;
        key[39] = false;
        key[37] = false;
        key[40] = false;
        key[13] = false;
        mouvement = [0, 0];

        this.prendreArme();

        lePlateau.destroy();
        lePlateau.build();

        this.combattre();

        changeTour(tourDe);
    };
    this.lacherArme = function(arme) {
        if (arme == crayon) {
            if (!crayon.x && !crayon.y) {
                crayon.x = Math.floor(Math.random() * taillePlateau);
                crayon.y = Math.floor(Math.random() * taillePlateau);
            }
        } else if (arme == poisson) {
            poisson.x = Math.floor(Math.random() * taillePlateau);
            poisson.y = Math.floor(Math.random() * taillePlateau);
        } else if (arme == valise) {
            valise.x = Math.floor(Math.random() * taillePlateau);
            valise.y = Math.floor(Math.random() * taillePlateau);
        } else if (arme == poele) {
            poele.x = Math.floor(Math.random() * taillePlateau);
            poele.y = Math.floor(Math.random() * taillePlateau);
        }
    };
    this.prendreArme = function() {

        if (this.x == crayon.x && this.y == crayon.y) {
            this.lacherArme(this.arme);

            this.arme = crayon;
            delete crayon.x;
            delete crayon.y;
            swal({
                title: this.nom + " s'empare d'un " + this.arme.nom,
                imgUrl: '-crayon.png',
                imgWidth: 320,
                imgHeight: 320,
                timer: 1200,
                showConfirmButton: false
            });
        }
        if (this.x == poisson.x && this.y == poisson.y) {
            this.lacherArme(this.arme);

            this.arme = poisson;
            delete poisson.x;
            delete poisson.y;
            swal({
                title: this.nom + " s'empare d'un " + this.arme.nom,
                imgUrl: '-poisson.png',
                imgWidth: 320,
                imgHeight: 320,
                timer: 1200,
                showConfirmButton: false
            });
        }
        if (this.x == valise.x && this.y == valise.y) {
            this.lacherArme(this.arme);

            this.arme = valise;
            delete valise.x;
            delete valise.y;
            swal({
                title: this.nom + " s'empare d'une " + this.arme.nom,
                imgUrl: '-valise.png',
                imgWidth: 320,
                imgHeight: 320,
                timer: 1200,
                showConfirmButton: false
            });
        }
        if (this.x == poele.x && this.y == poele.y) {
            this.lacherArme(this.arme);

            this.arme = poele;
            delete poele.x;
            delete poele.y;
            swal({
                title: this.nom + " s'empare d'une " + this.arme.nom,
                imgUrl: '-poele.png',
                imgWidth: 320,
                imgHeight: 320,
                timer: 1200,
                showConfirmButton: false
            });;
        }
    };
    this.combattre = function() {
        var attaquerOuDefendre1 = true;
        var attaquerOuDefendre2 = true;
        if (this === player1) {

            if ((player1.x == player2.x - 1 && player1.y == player2.y) || (player1.x == player2.x + 1 && player1.y == player2.y) || (player1.x == player2.x && player1.y == player2.y - 1) || (player1.x == player2.x && player1.y == player2.y + 1)) {
                alert('Joueur 2 est attaqué par Joueur 1');
                var audio = new Audio('sons/fight.mp3');
                audio.volume = 0.22;
                audio.play();


                while (player1.pv > 0 && player2.pv > 0) {
                    attaquerOuDefendre2 = confirm("Joueur 2 ,cliquez sur OK pour riposter, Cancel/Annuler pour vous défendre (-50% dam, -60% puissance arme)");
                    if (attaquerOuDefendre2 === true) {

                        if (attaquerOuDefendre1 === true) {
                            player2.pv -= player1.arme.puissance;
                        } else {
                            player2.pv -= player1.arme.puissance * 40 / 100;
                        }

                    } else {
                        player2.pv -= player1.arme.puissance / 2;
                    }
                    majAffichage();
                    if (player2.pv > 0) {
                        attaquerOuDefendre1 = confirm("Joueur 1 ,cliquez sur OK pour riposter, Cancel/Annuler pour vous défendre (-50% dam, -60% puissance arme)");
                        if (attaquerOuDefendre1 === true) {

                            if (attaquerOuDefendre2 === true) {
                                player1.pv -= player2.arme.puissance;
                            } else {
                                player1.pv -= player2.arme.puissance * 40 / 100;
                            }
                        } else {
                            player1.pv -= player2.arme.puissance / 2;
                        }
                    }
                    majAffichage();
                }
                return function() {
                    this.limiteMouvements = 0;
                };
            }
        }
        if (this === player2) {

            if ((player2.x == player1.x - 1 && player2.y == player1.y) || (player2.x == player1.x + 1 && player2.y == player1.y) || (player2.x == player1.x && player2.y == player1.y - 1) || (player2.x == player1.x && player2.y == player1.y + 1)) {
                alert('En garde joueur 1, Joueur 2 vous attaque');
                var audio = new Audio('sons/fight.mp3');
                audio.volume = 0.42;
                audio.play();


                while (player1.pv > 0 && player2.pv > 0) {
                    attaquerOuDefendre1 = confirm("Joueur 1 ,cliquez sur OK pour riposter, Cancel/Annuler pour vous défendre (-50% dam, -60% puissance arme)");

                    if (attaquerOuDefendre1 === true) {

                        if (attaquerOuDefendre2 === true) {
                            player1.pv -= player2.arme.puissance;
                        } else {
                            player1.pv -= player2.arme.puissance * 40 / 100;
                        }
                    } else {
                        player1.pv -= player2.arme.puissance / 2;
                    }
                    majAffichage();
                    if (player1.pv > 0) {
                        attaquerOuDefendre2 = confirm("Joueur 2 ,cliquez sur OK pour riposter, Cancel/Annuler pour vous défendre (-50% dam, -60% puissance arme)");
                        if (attaquerOuDefendre2 === true) {

                            if (attaquerOuDefendre1 === true) {
                                player2.pv -= player1.arme.puissance;
                            } else {
                                player2.pv -= player1.arme.puissance * 40 / 100;
                            }

                        } else {
                            player2.pv -= player1.arme.puissance / 2;
                        }
                    }
                    majAffichage();
                }
                return function() {
                    this.limiteMouvements = 0;
                };
            }
        }
    };

    this.draw = function() {
        context.drawImage(this.img, this.x * tailleCase + 5, this.y * tailleCase + 5, tailleCase - 10, tailleCase - 10)
    };
}


var player1 = new Player(1, imgPlay1,
    "JOUEUR 1",
    Math.floor(Math.random() * taillePlateau),
    Math.floor(Math.random() * taillePlateau),
    crayon,
    100
);
var player2 = new Player(2, imgPlay2,
    "JOUEUR 2",
    Math.floor(Math.random() * taillePlateau),
    Math.floor(Math.random() * taillePlateau),
    crayon,
    100);