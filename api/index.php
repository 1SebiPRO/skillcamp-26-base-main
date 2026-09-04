<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}



if ($_SERVER['REQUEST_METHOD'] == "GET") :
$races = file_get_contents('../data/races.json');

if (!isset($_GET['race'])) {
    echo $races;
    exit;
}

$races = json_decode($races, true);

foreach ($races as $value) {
    if ($value['id'] == $_GET['race']) {
        echo json_encode($value);
        exit;
    }
}

echo json_encode([
    'error' => 'id inconnu',
    'request' => $_SERVER['REQUEST_METHOD']]
    );
else :
    //POST
     $json = file_get_contents('php://input');

    $body = json_decode($json, true);

    //conversion de texte en nombre
    $body['raceId'] = (int) $body['raceId'];

   // 1. Lire le contenu du fichier JSON
$json = file_get_contents('../data/inscriptions.json'); 

// 2. Transformer le JSON en tableau PHP
// Le "true" permet d'obtenir un tableau associatif
$data = json_decode($json, true); // décode le json pour pouvoir le lire

// 3. Ajouter la nouvelle inscription
// On accède au tableau "inscriptions" puis on ajoute l'objet à la fin
$data['inscriptions'][] = $body; // créer un nouvel array dans l'array inscription pour le remplir avec nos données

// 4. Transformer le tableau PHP en JSON
// JSON_PRETTY_PRINT permet d'avoir un fichier lisible
echo $json = json_encode($data, JSON_PRETTY_PRINT); // transforme le code en json pour pouvoir écrire

// 5. Écrire le nouveau JSON dans le fichier
file_put_contents('../data/inscriptions.json', $json); // écrit par dessus tout
endif;