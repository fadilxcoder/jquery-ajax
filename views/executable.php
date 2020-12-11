<?php
function textRendering() {
    return 'Rendering `views/executable.php` ~ ' . rand(999, 999999);
}

echo '<h4>' . textRendering() . '</h4>';
?>