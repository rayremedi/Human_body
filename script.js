var titleArray = {
    Epaule: 'Epaule',
    Main: ' Main',
    Genou: ' Genou',
    Pied: ' Pied',
    Hanche: ' Hanche',
    Avantbras: ' Avant-bras'
}

var paraArray = {
    Epaule: "L'épaule est la région morphologique se situant à la jonction du tronc avec le membre supérieur.",
    Main: "La main est l'organe préhensile effecteur situé  à l'extrémité de l'avant-bras et relié à ce  dernier  par le poignet",
    Genou: "Le genou est une articulation qui permet de joindre la jambe à la cuisse",
    Pied: "Le pied désigne originellement une partie du corps d'un homme,d'un animal ou d'une plante en contact avec le sol, et par extension le support d'un objet.",
    Hanche: "La hanche est une articulation qui permet d ejoindre la cuisse au bassin.",
    Avantbras: "l'avant-bras est,chez l'Homme,la partie du membre supérieur comprise entre le coude et le poignet."
}


function bodyappearRed(id) {
    // mettre couleur rouge sur les divs rondes en mouseover
    var monElt = document.getElementById(id);
    monElt.style.backgroundColor = 'red';

    //Fait apparaitre le texte des parties du corps quand la souris est sur la div
    var titleParts = document.getElementById("txt-title");
    var txtParts = document.getElementById("txt-para");

    titleParts.innerHTML = titleArray[id];
    titleParts.style.display = "block";



}

function onClick(id) {
    txtParts = document.getElementById("txt-para");
    txtParts.innerHTML = paraArray[id];
    txtParts.style.display = "block";
    console.log(paraArray[id])
}

function bodydisappearRed(id) {
    //mettre couleur d'origine des divs rondes en mouseout
    var monElt = document.getElementById(id);
    monElt.style.backgroundColor = 'rgba(0, 0, 0, 0.719)';
    //Fait disparaitre le texte des parties du corps quand la souris est sur la div
    var titleParts = document.getElementById("txt-title");
    var txtParts = document.getElementById("txt-para");
    titleParts.innerHTML = titleArray[""];
    titleParts.style.display = "none";
    txtParts.innerHTML = paraArray[""];
    txtParts.style.display = "none";

}


