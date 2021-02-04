const alreadyRegisteredUsernames = ["kim", "emmanuel", "nicolas"];

document.querySelector("form").addEventListener("submit", () => {
  // avant d'envoyer les données au serveur, on peut faire une étape de validation

  // on n'envoie pas vraiment les données pour l'exercice
  document.querySelector("main").innerHTML = "Compte créé :)";
});

//fonctionement: lorque je tape le mot de passe sur mot de passe le mot de passe repeté 
//doit etre indentique au mot de passe taper

const elementConfirmMotDePasse = document.getElementById("confirm-password")
const elementmotdepasse = document.getElementById("password")
const elementUtilisateurs = document.getElementById("username")

elementConfirmMotDePasse.addEventListener("input", function(event){
  if(elementConfirmMotDePasse.value !== elementmotdepasse.value){   
    elementConfirmMotDePasse.setCustomValidity("les deux mots de passes ne sont pas identiques")
  }else {
    elementConfirmMotDePasse.setCustomValidity("")
  }
})
