<?php

$numero = $_POST['numero'];

if($numero === ''){
echo json_encode('error');
}else{
    echo json_encode($numero);
}