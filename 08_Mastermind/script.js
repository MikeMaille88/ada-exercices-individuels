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
