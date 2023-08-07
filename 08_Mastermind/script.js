let activeBall = null; // Variable pour stocker la bille active
const colors = ["Bleu", "Jaune", "Rouge", "Vert", "Violet", "Turquoise", "Noir", "Gris"]
let code = []
let nbCouleursBienPlacees = 0;
let nbCouleursMalPlacees = 0;
//let code = ["Turquoise", "Jaune", "Rouge", "Violet"]

//Choix aléatoire du code parmi les 8 couleurs disponibles
function randomCode() {
    while (code.length != 4){
        let color = colors[Math.floor(Math.random()*colors.length)];
        if (!code.includes(color)){
            code.push(color);
            //console.log(code)
        }
    }
    //Afficher les couleurs du code sur la page
    let gridCode = document.getElementById("grid-code");
    //console.log(gridCode)
        for (i=0; i<4; i++){
            let colorToCast = code[i];
            //console.log("colorToCast", colorToCast);
            gridCode.children[i].src = `./Images/${colorToCast}.png`;
            //console.log("newColorImg",gridCode.children[i].src);
        }
}

randomCode()
//console.log("code", code)



// Fonction pour afficher ou masquer la liste des couleurs
function toggleColorList(event) {
    const colorList = document.getElementById("colorList");
    colorList.style.display = colorList.style.display === "none" ? "block" : "none";

    // Enregistrez la bille cliquée comme bille active
    activeBall = event.target;

    // Positionnez la div colorList au-dessus de la bille cliquée
    if (activeBall !== null) {
        const ballRect = activeBall.getBoundingClientRect();
        const parentRect = activeBall.parentElement.getBoundingClientRect();
        const gridRect = document.querySelector(".grid-guesses").getBoundingClientRect();

        const topOffset = ballRect.top - parentRect.top - colorList.offsetHeight - 5;
        const leftOffset = ballRect.left - gridRect.left;

        colorList.style.top = `${topOffset+320}px`;
        colorList.style.left = `${leftOffset+30}px`;
    }
}

// Ajoutez un gestionnaire d'événement de clic pour chaque bille blanche
const whiteBalls = document.querySelectorAll("[id^=blanc]");
whiteBalls.forEach((ball) => {
    ball.addEventListener("click", toggleColorList);
});

// Fonction pour afficher la couleur sélectionnée sur la bille active
function showSelectedColor() {
    const selectedColor = document.querySelector("[name=Liste]").value;

    // Mettez à jour uniquement la bille active avec la couleur sélectionnée
    if (activeBall !== null) {
        activeBall.src = `./Images/${selectedColor}.png`;
    }

    // Masquer la liste une fois la couleur sélectionnée
    const colorList = document.getElementById("colorList");
    colorList.style.display = "none";
}

// Ajoutez un gestionnaire d'événement de changement pour la liste de sélection
const colorList = document.querySelector("[name=Liste]");
colorList.addEventListener("change", showSelectedColor);


// Quand je clique sur Valider, je récupère les couleurs depuis les src du grid-propose
// pour les mettre dans un tableau
let currentGridGuessBall = 1;
const validation = document.getElementById("button");
validation.addEventListener("click", () => {
    let container = document.getElementById("grid-propose");
    let codeProposition = []
    for (i=0; i<4; i++){
        let colorImg = container.children[i].src;
        let color = colorImg.split("/").pop().split(".").shift();
        codeProposition.push(color);
        container.children[i].src = "./Images/Blanc.png";
    }
    //console.log("codeProposition", codeProposition);

    //Je compare le tableau avec celui du code
    for (let i=0; i<codeProposition.length; i++) {
            if (code[i] === codeProposition[i]) {
                nbCouleursBienPlacees += 1;
            }
            if (code.includes(codeProposition[i]) && (code[i] !== codeProposition[i])) {
                nbCouleursMalPlacees += 1;
            }
        }

    //Je change les src des grid-check    
    let checkBallPos = 0;
    let c = 0;
    let checkBall = document.getElementById(`grid-check_left`);

    console.log(nbCouleursBienPlacees,"nbCouleursBienPlacees")
    while (nbCouleursBienPlacees > 0){
        checkBallPos++
        checkBall.children[c].src = "./Images/Vert.png";
        c++
        nbCouleursBienPlacees--
    }

    console.log(nbCouleursMalPlacees,"nbCouleursMalPlacees")
    while (nbCouleursMalPlacees > 0){
        checkBallPos++
        checkBall.children[c].src = "./Images/Jaune.png";
        c++
        nbCouleursMalPlacees--
    }
    
    nbCouleursBienPlacees = 0
    nbCouleursMalPlacees = 0


    if (JSON.stringify(codeProposition) == JSON.stringify(code)) {
        alert("C'est gagné")
    }
    else{
        //Je change les src des grid-guesses
        let c = 0;
        if (currentGridGuessBall < 24){
            let gridGuess = document.getElementById("grid-guesses_left");
            //console.log(gridGuess,"left");
            for (j=currentGridGuessBall-1; j<(currentGridGuessBall+3); j++){
                gridGuess.children[j].src = `./Images/${codeProposition[c]}.png`;
                c++;
            }
            currentGridGuessBall += 4
        }else if (currentGridGuessBall > 44){
            alert("C'est perdu")
        }else{
            gridGuess = document.getElementById("grid-guesses_right");
            //console.log(gridGuess,"right");
            for (j=currentGridGuessBall-1; j<(currentGridGuessBall+3); j++){
                gridGuess.children[j-24].src = `./Images/${codeProposition[c]}.png`;
                c++;
            }
            currentGridGuessBall += 4
        }
    }
    })