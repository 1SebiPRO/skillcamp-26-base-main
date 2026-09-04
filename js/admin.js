    fetch("http://localhost:8888/courir/api/inscritptions/")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur HTTP : " + response.status);
            }

            return response.json();
        })
        .then(data => {
            console.log("Données reçues :", data);

            console.log("Participants :", data.inscriptions);

            data.inscriptions.forEach(inscriptions => {
                console.log("Nom :", inscriptions.nom);
                console.log("Prénom :", inscriptions.prenom);
                console.log("Email :", inscriptions.email);
            });
        })
        .catch(error => {
            console.error("Erreur lors de la récupération :", error);
        });


