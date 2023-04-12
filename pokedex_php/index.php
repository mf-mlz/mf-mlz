<?php
//Consumo de PokeAPI

$pokemon = array(
    "pikachu",
    "pichu",
    "dragonite",
    "ditto",
    "charmander",
    "charizard",
    "mew",
    "mewtwo"
);
$num_aleatorio = random_int (0, 7);


$name_pokemon = 'dragonite';
$api = curl_init("https://pokeapi.co/api/v2/pokemon/$pokemon[$num_aleatorio]");
curl_setopt($api, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($api);
curl_close($api);
$json = json_decode($response, true); //Aqui viene el resultado
$types = '';
$color_last_type = '';



$colors = array(
    "electric" => "#FFEA70",
    "normal" => "#B09398",
    "fire" => "#FF675C",
    "water" => "#0596C7",
    "ice" => "#AFEAFD",
    "rock" => "#999799",
    "flying" => "#7AE7C7",
    "grass" => "#4A9681",
    "psychic" => "#FFC6D9",
    "ghost" => "#561D25",
    "bug" => "#A2FAA3",
    "poison" => "#795663",
    "ground" => "#D2B074",
    "dragon" => "#DA627D",
    "steel" => "#1D8A99",
    "fighting" => "#2F2F2F",
    "default" => "#2A1A1F",

);




    foreach($json['types'] as $type){
        $types = $types.' '.$type['type']['name']. '<br>'; //Nombre del Tipo
        $color_last_type = $colors[$type['type']['name']]; //Color del último tipo, lo sacamos del objeto de colores
  
    }

//Cuerpo Página
$html = '
    <style>

    body {
        background: linear-gradient(to right, #EE8130, #F7D02C, #8BB8E8);
      }

        .container_father{
            display: flex;
            justify-content: center;
            padding: 30px;
        }
        .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            width: 20%;
        }

        .img{
            display: flex;
            background-color: white !important;
        }

        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }

        .container {
            padding: 2px 16px;
        }

        h4, h1, p {
            text-align: center !important;
        }

        hr{
            border: 1px solid black;
        }

    </style>
    <div class="container_father">
        <div class="card">
            <div class="img">
                <img src='.$json['sprites']['front_default'].' alt="Pokemon" style="width:100%;border: 1px solid #efebeb;">
                <img src='.$json['sprites']['front_shiny'].' alt="Pokemon" style="width:100%;border: 1px solid #efebeb;">
            </div>
        <div class="container" style="background-color:'.$color_last_type.'">
            <h1><b>'.$json['forms'][0]['name'].'</b></h1> 
            <hr>
            <h4> Type </h4>
            <p>'.$types.'</p> 
        </div>
        </div>
    </div>';



echo $html;

?>