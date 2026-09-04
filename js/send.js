const formulaire = document.getElementById("registration-form")
const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")
const email = document.getElementById("email")
const birthdate = document.getElementById("birthdate")






console.log("ID de la course in send :", raceId);


formulaire.addEventListener("submit", function(event) {
    event.preventDefault();
    const user = {
        firstname: firstname.value, // .value car élément de l'HTML
        lastname: lastname.value,
        email: email.value,
        birthdate: birthdate.value,
        raceId: raceId // element nom présent dans l'HTML donc quand on le récupère on obtient directement sa valeur
};
    console.log(user)





fetch("http://localhost:8888/courir/api/", { // je contact mon API
    method: "POST", // avec la méthode post pour envoyer des données au seveur
    // POST maj écriture conventionelle
    headers: {"Content-Type": "application/json" // je précise que le type de fichier ou je l'envoie en un fichier json que l'api puisse le lire
    },
    body: JSON.stringify(user) // j'envois les vrais données remplies pas les users
})


  .then(response => response.json())
  .then(data => {
    console.log("Données:", data);
  });
});
