<?php

$num = htmlspecialchars($_GET['number']);

echo str_repeat('*', $num);

