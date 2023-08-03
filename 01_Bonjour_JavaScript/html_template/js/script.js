//Demande prénom
var nom = ""
function askName() {
    nom = prompt("Comment t'appelles-tu ?");
}

//Demande année de naissance
var age = 0

function askBirthYear() {
    var annee = parseInt(prompt("Quelle est ton année de naissance ?"));
    var mois = parseInt(prompt("Quel est ton mois de naissance (1-12)?"));
    var dateActuelle = new Date();
    var anneeActuelle = dateActuelle.getFullYear();
    age = anneeActuelle - annee;

    // Vérifier si l’utilisateur n’a pas encore fêté son anniversaire cette année
  var moisActuel = dateActuelle.getMonth() + 1; 
  if (moisActuel < mois) {
    age--;
  }  
}

//Affichage
askName()
askBirthYear()

document.body.innerHTML += "<h2>👋 Bonjour " + nom + " !</h2>"
document.body.innerHTML += "<h3>Tu as " + age + " ans</h3>"