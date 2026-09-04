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
$inscriptions = file_get_contents('../../data/inscriptions.json');
//exit();
$data = json_decode($inscriptions, true);

foreach($data['inscriptions'] AS $index => $value) :
    $race = file_get_contents('http://localhost:8888/courir/api?race=' . $value['raceId']);
    $data['inscriptions'][$index]['course'] = json_decode($race);
endforeach;

echo json_encode($data);

endif;
