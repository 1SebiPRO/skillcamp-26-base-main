const btnRegister = document.getElementById("btn-register")
const rules = document.getElementById("terms")

btnRegister.setAttribute('disabled', true) // par défault on vas mettre que le boutton pour s'incrire soi sur false (impossible)

rules.addEventListener('change', e => { // lors d'un chagment d'état sur rules on vas lancer une fonction
    
    if (e.target.checked) { // si le la cible(target) est coché(cheked)
        btnRegister.disabled = false; // on lance met la désactivation du bouton sur faux ce qui le rend actif
        //alert("active");
    } else { // si ce n'est pas le cas
        btnRegister.disabled = true; // le bouton est laissé sur désactiver
        //alert("inactive");
    }
    
})