<?php

// for html rendering
$filename = "override.php";
$file = file_get_contents($filename);

// for php file rendering
$filename = "executable.php";
ob_start();
include($filename);
$file = ob_get_clean();
ob_end_clean();

echo json_encode(
    [
        'status' => 'ok',
        'view' => $file,
    ]
);

?>