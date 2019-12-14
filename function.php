<?php

$arr = [
    'POST data'     => ($_POST),
    'FILES_data'    => ($_FILES)
];

echo json_encode($arr);