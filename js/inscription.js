const params = new URLSearchParams(window.location.search);
const raceId = params.get("race");

console.log("ID de la course :", raceId); // dans la console je vien afficher l'id de ma course sélectioner

const raceName = document.querySelector("#race-name");
const raceDistance = document.querySelector("#race-distance");
const raceRegistered = document.querySelector("#race-registered");
const raceCapacity = document.querySelector("#race-capacity");

const layout = document.querySelector('.registration-layout')

if (!raceId) {
    layout.innerHTML = "Aucune course sélectionnée."; // si aucune course n'est sélectioner (pas d'id) => innerHTML sur le layout pour modifier et enlever la présentation de la course 
    // et le formulaire
} else {

    fetch("http://localhost:8888/courir/api?race="+raceId)
        .then(response => response.json())
        .then(data => {

            const race = data
            console.log(race)

            if (!race?.name) { // es ce que race à un nom ???
                layout.innerHTML = '<p class="card race-summary"> Cette course n\'existe pas.<p>'; // dans ce cas si comme elle n'esxiste pas => innerHTML sur le layout pour modifier et 
                // enlever la présentation de la course et le formulaire
                return;
            }

            raceName.textContent = race.name;
            raceDistance.textContent = race.distance;
            raceRegistered.textContent = race.registered;
            raceCapacity.textContent = race.maxParticipants;

            const template = `
                <span>📍 ${race.city}</span>
                <span>🏃 ${race.distance} km</span>
                <span>👥 ${race.registered} / ${race.maxParticipants} participants</span>
            `;

            document.querySelector(".race-card__meta").innerHTML = template;

            const placesRestantes =
                race.maxParticipants - race.registered;

            document.querySelector("#availability-message").innerHTML = `
                <strong>
                    ${placesRestantes > 0
                        ? `Il reste ${placesRestantes} places !`
                        : "Course complète."}
                </strong>
            `;

            document.querySelector(".race-summary__media img").src = race.img;

            document.querySelector(".race-summary__media img").alt = race.name;

            document.querySelector(".race-summary__body .badge").textContent =
                placesRestantes === 0
                    ? "Complet"
                    : placesRestantes <= 15
                        ? "Presque complet"
                        : "Places disponibles";

            document.title = `Inscription — ${race.name}`;
        })
        .catch(() => {
            layout.innerHTML =
                "Erreur lors du chargement de la course."; // 
        });
}