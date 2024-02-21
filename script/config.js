function ouvrirEditeur(event){
    backdrop.style.display= 'block';
    asideFenetre.style.display = 'block';
    emplacementNom = this.parentElement.children[1];
    numjoueur = +event.target.dataset.numjoueur;
}

function fermerEditeur(){
    backdrop.style.display = 'none';
    asideFenetre.style.display = 'none';
    inputNom.value = ""
    errorParagraphe.style.display = 'none';
}

function recupererNom(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const nomEntrer = formData.get('nom').trim();
    if(!nomEntrer){
        errorParagraphe.textContent = "veillez entrer un nom valide";
        errorParagraphe.style.display = 'block';
        return;
    }else{
        emplacementNom.textContent = nomEntrer;
        joueur[numjoueur-1].nom = nomEntrer;
    }
    fermerEditeur()
}