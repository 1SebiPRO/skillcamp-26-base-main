<?php
header('Content-Type: application/json');

$races = file_get_contents('../data/races.json');
echo $races;
?>