function debut(){
    if(joueur[1].nom =="" || joueur[0].nom ==""){
        errorGame.textContent = "veillez renseigner les joueurs ";
        errorGame.parentElement.style.display = "block";
        return;
    }
    numActuel = 0;
    numSuivant = 0;
    nettoyerPourCommencerLeJeu();
}

function nettoyerPourCommencerLeJeu(){
    sectionJeu.style.display = "block";
    errorGame.parentElement.style.display = "none";
    corpAlertJoueurActif.style.display = "block";
    nomJoueurActif.textContent = joueur[0].nom;
    document.getElementById("jeu-terminer").style.display = "none";
    stopJeBoolean = "non";
    incrementeurDetectionFin = 1;
    
    for(const item of tableauJeu){
        item.textContent = "";
        item.classList.remove("desactiver");
    }
}

function changerJoueur(){
    if(numActuel == 0){
        numActuel = 1;
        numSuivant = 0;
    }
    else{
        numActuel = 0;
        numSuivant = 1;
    }
    const idGagnant = verifierLeGagnent();
    if(idGagnant==1 || idGagnant==2){
        afficherGagnant(idGagnant);
        stopJeu();
    }
    nomJoueurActif.textContent = joueur[numActuel].nom;
}
function afficherGagnant(id){
    document.getElementById("joueur-gagnant").textContent=joueur[id-1].nom;
    document.getElementById("jeu-terminer").style.display = "block";
}
function stopJeu(){
    corpAlertJoueurActif.style.display= "none";
    stopJeBoolean = "oui";
    //reinitialisation du tableau de donnee jeu
    for(const item of jeuDonnee){
        item[0] = 0;
        item[1] = 0;
        item[2] = 0;
    }
    
}




function verifierLeGagnent(){
    //verification sur ligne
    for(const item of jeuDonnee){
        if(item[0]>0 && item[0]==item[1] && item[1]==item[2]){
            return item[0];
        }
    }

    //verification sur colone
    for(let i= 0 ;i<3 ;i++){
        if(jeuDonnee[0][i]>0 && jeuDonnee[0][i]==jeuDonnee[1][i] && jeuDonnee[1][i]==jeuDonnee[2][i] ){
            return jeuDonnee[0][i];
        }
    }

    //verification oblique \
    if( jeuDonnee[0][0]>0 && jeuDonnee[0][0]==jeuDonnee[1][1] && jeuDonnee[1][1]==jeuDonnee[2][2] ){
        return jeuDonnee[0][0];
    }
    //verificatio oblique /
    if(jeuDonnee[0][2]>0 && jeuDonnee[0][2]==jeuDonnee[1][1] && jeuDonnee[1][1]==jeuDonnee[2][0]){
        return jeuDonnee[0][2];
    }

    if(incrementeurDetectionFin === 10){
        errorGame.textContent= "Macth NULL"
        errorGame.parentElement.style.display = "block";
        stopJeu();
        return -1;
    }
    return 0;
}

function placerSymbole(event){
    if(stopJeBoolean == "oui"){
        alert("jeu terminer veillez cliquer sur recommencer !")
        return;
    }
    const itemColSelect = event.target.dataset.col - 1;
    const itemRowSelect = event.target.dataset.row - 1;
    
    if(jeuDonnee[itemRowSelect][itemColSelect]>0){
        alert("selectionnez une case vide !");
        return;
    }

    event.target.textContent = joueur[numActuel].symbole;
    jeuDonnee[itemRowSelect][itemColSelect] = joueur[numActuel].numero;

    event.target.classList.add("desactiver");
    incrementeurDetectionFin ++;
    changerJoueur();  
}