<?php
$im=file("le_chemin_vers_ton_image_gif");
Header("Content-type: image/gif");
echo $im;
?>