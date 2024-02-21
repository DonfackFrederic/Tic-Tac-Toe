//couverture et fenetrer form
const backdrop = document.querySelector('.backdrop');
const asideFenetre = document.querySelector('.fenetre');
//form
const form = document.querySelector('form');

//input
const inputNom = document.getElementById('nom');

//btn
const ecrireJoueur1 = document.getElementById('btn-nom-joueur1');
const ecrireJoueur2 = document.getElementById('btn-nom-joueur2');
const debutJeu = document.getElementById('btn-commencer');
const sortirEnregistrement= document.getElementById('sortir');
const enregistrerJoueur= document.getElementById('editerJoueur');

//paragraphe error
const errorParagraphe = document.querySelector('.error');
const errorGame = document.querySelector('.errorGame p');

//emplacementNom
let emplacementNom = "";
let numjoueur = '';

//joueur
const joueur = [
    {   
        numero : 1,
        nom : '',
        symbole : 'X'
    },
    {
        numero : 2,
        nom: '',
        symbole : 'O'
    }
]

//jeu section
const sectionJeu = document.getElementById("jeu");
const tableauJeu = document.querySelectorAll("#jeu ul li");

//switcher
let numActuel = 0;
let numSuivant = 1;

//joueur actif
const nomJoueurActif = document.getElementById("joueur-actif")
const corpAlertJoueurActif = nomJoueurActif.parentElement;

let incrementeurDetectionFin = 0;

let jeuDonnee = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
let stopJeBoolean = "non";




ecrireJoueur1.addEventListener('click', ouvrirEditeur);
ecrireJoueur2.addEventListener('click', ouvrirEditeur);
sortirEnregistrement.addEventListener('click', fermerEditeur);
backdrop.addEventListener('click', fermerEditeur)
form.addEventListener('submit', recupererNom)
debutJeu.addEventListener('click', debut);

for(const item of tableauJeu){
    item.addEventListener('click', placerSymbole);
}

