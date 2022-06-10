let usuario_elegir = "";
let usuario_final = "";
let j =0;
let c =0;
let e =0;
let ganador ="";





function elegir(usuario){
    usuario_elegir = usuario.id;
    document.getElementById('button_play').value = usuario_elegir;
    document.getElementById("Piedra").style = "";
    document.getElementById("Papel").style = "";
    document.getElementById("Tijera").style = "";
    

    if((j > 0) || (c >0) || (e > 0)){
        document.getElementById(usuario_elegir).style = "box-shadow: 0 10px 10px 0 rgba(0,0,0,0.24), 0 17px 100px 0 rgba(0,0,0,0.19); margin-top: 200px";
    }else{
        document.getElementById(usuario_elegir).style = "box-shadow: 0 10px 10px 0 rgba(0,0,0,0.24), 0 17px 100px 0 rgba(0,0,0,0.19);margin-top:50px";
    }

}

function jugar(usuario){
    let message ="";

   
   if(usuario.value.length == 0){
    Swal.fire({
        
        icon: 'warning',
        title: 'Oops...',
        text: '¡Selecciona una Opción para jugar!',
      })
   }else{
        let cpu = Math.round(Math.random() * 2);
        let cpu_final = "";
        
        if(cpu == 0){
            cpu_final = 'Piedra';
        }else if(cpu == 1){
            cpu_final = 'Papel';
        }else{
            cpu_final = 'Tijera';
        }
        
        usuario_final = usuario.value;
        console.log("Vas a jugar con: " + usuario_final);
        console.log("Cpu va a jugar con: " + cpu_final);

        if(usuario_final == cpu_final){
            message = "EMPATE";
            e++;
            e=e;
            
            
        }else if((usuario_final == "Piedra" && cpu_final == "Tijera") || (usuario_final == "Papel" && cpu_final == "Piedra") || (usuario_final == "Tijera" && cpu_final == "Papel")){
            message = "¡GANA JUGADOR!";
            j++;
            j=j;
        }else{
            message = "¡GANA CPU!";
            c++;
            c=c;
        }
        
        document.getElementById('Piedra').style = "display:none;";
        document.getElementById('Papel').style = "display:none;";
        document.getElementById('Tijera').style = "display:none;";

        document.getElementById('button_play').style = "display:none;";
        document.getElementById('result_game').style = "";
        document.getElementById('Retultado_img_cpu').src = "../imagenes/"+cpu_final+".png";
        document.getElementById('Retultado_img_usuario').src = "../imagenes/"+usuario_final+".png";
        document.getElementById("mensaje").innerHTML = message;
        document.getElementById("contador_jugador").innerHTML = "N° Veces Ganadas (Jugador): " + j;
        document.getElementById("contador_cpu").innerHTML = "N° Veces Ganadas (CPU): " + c;
        document.getElementById("contador_empate").innerHTML = "N° Veces Empatadas: " + e;

        if((j > c) || (j > e) ){
            document.getElementById("ganador_final").innerHTML = "¡El Ganador Final es JUGADOR con " + j + " juegos ganados!";
        }else if((c > j) || (c > e) ){
            document.getElementById("ganador_final").innerHTML = "¡El Ganador Final es CPU con " + c + " juegos ganados!";
        }else{
            document.getElementById("ganador_final").innerHTML = "¡Hay " + e + " total de empates, nadie gana!";
        }

        
    }

   
        
}


function reset(){
    document.getElementById('button_play').value = "";
    document.getElementById(usuario_elegir).style = "";
    document.getElementById('result_game').style = "display:none";
    document.getElementById('button_play').style = "";
    document.getElementById('Piedra').style = "margin-top:200px;";
    document.getElementById('Papel').style = "margin-top:200px;";
    document.getElementById('Tijera').style = "";
}

