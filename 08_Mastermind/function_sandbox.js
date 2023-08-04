const colors = ["bleu", "jaune", "rouge", "vert", "violet", "turquoise", "noir", "gris"]
let code = []

function randomCode() {
    for (i=0; i<4; i++){
        let color = colors[Math.floor(Math.random()*colors.length)];
        code.push(color);
        console.log(code)
    }
}

randomCode()