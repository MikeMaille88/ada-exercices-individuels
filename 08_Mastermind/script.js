let activeBall = null; // Variable pour stocker la bille active

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
const validation = document.getElementById("button");
validation.addEventListener("click", () => {
    let container = document.getElementById("grid-propose");
    console.log(container);
    let codeProposition = []
    for (i=0; i<4; i++){
        let colorImg = container.children[i].src;
        console.log(colorImg);
        let color = colorImg.split("/").pop().split(".").shift()
        codeProposition.push(color);
        }
    console.log(codeProposition);
    })

//Je compare le tableau avec celui du code

//Je change les src des grid-guesses
