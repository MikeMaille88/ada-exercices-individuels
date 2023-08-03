/* const didIWin = (givenNumber) => { 
    while (givenNumber != 22) {
        if (givenNumber < 22) {
            givenNumber = prompt("Plus grand");
        }else if (givenNumber > 22){
            givenNumber = prompt("Plus petit");
        }
    }
    alert ("Bravo ! Vous avez deviné le nombre");
}

const gamePlay = () => {
    let givenNumber = parseInt(prompt("Devine le nombre auquel je pense"));
    didIWin(givenNumber);
}
    
gamePlay() */


const playerOne = () => {
	let input = parseInt(prompt("Joueur 1, rentrez un nombre entre 0 et 50 (sauf 0 et 50)"));
    if (input > 0 || input < 50) {
        return input;
    }else{
        return playerOne();
    }
}

const didIWin = (givenNumber, playerOneNumber) => { 
	let result;
	if (givenNumber !== playerOneNumber) {
    result = false  
    }else{
    result = true
    }
    return result
}

const gamePlay = () => {
	let givenNumber = parseInt(prompt("Devinez le nombre auquel je pense (entre 0 et 50 (sauf 0 et 50))"));
    	if (didIWin(givenNumber, playerOneNumber) === false) {
    		gamePlay();
    	}else{
    		alert ("Bravo ! Vous avez deviné le nombre");
    	}
}

let playerOneNumber = playerOne()
console.log(playerOneNumber)
gamePlay()