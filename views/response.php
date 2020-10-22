<?php

$filename = "override.php";
$file = file_get_contents($filename);

echo json_encode(
    [
        'status' => 'ok',
        'view' => $file,
    ]
);

?>