



function ingresar(){
    let numero = document.getElementById('numero').value;
    if(numero.length == 0 || (numero < 1 || numero > 100)){
        Swal.fire({
             icon: 'warning',
             text: '¡Ingresa un número del 1 al 100 para continuar!',
            });
  }else{
             let numeros = [];
             let result = "";

              for(let i =1; i<=numero; i++){
                
                 if((i % 3 == 0) && (i % 5 == 0)){

                     if((i == 10) || (i == 20) || (i == 30) || (i == 40) || (i == 50) || (i == 60) || (i == 70) || (i == 80) || (i == 90) || (i == 100)){
                         result = ' FizzBuzz['+i+'] <br>';
                     }else{
                         result = ' FizzBuzz[' + i + ']';
                     }
                     numeros.push(result);
                 }else if((i % 3 == 0)){
                    
                     if((i == 10) || (i == 20) || (i == 30) || (i == 40) || (i == 50) || (i == 60) || (i == 70) || (i == 80) || (i == 90) || (i == 100)){
                         result = ' Fizz['+i+'] <br>';
                     }else{
                         result = ' Fizz['+i+'] ';
                     }

                     numeros.push(result);
                 }else if(i % 5 == 0){

                     if((i == 10) || (i == 20) || (i == 30) || (i == 40) || (i == 50) || (i == 60) || (i == 70) || (i == 80) || (i == 90) || (i == 100)){
                         result = ' Buzz['+i+'] <br>';    
                     }else{
                         result = ' Buzz['+i+'] ';
                     }
                     numeros.push(result);
                 }else{

                     if((i == 10) || (i == 20) || (i == 30) || (i == 40) || (i == 50) || (i == 60) || (i == 70) || (i == 80) || (i == 90) || (i == 100)){
                         result = " "+i+" "+"<br>";
                     }else{
                         result = " "+i+" ";    
                     }
                     numeros.push(result);
                 }
                

              }

            
               

                let numbers = numeros.join();
                 let div = document.getElementById("resultados");
                 document.getElementById('rules').style = "display:none;"
                 document.getElementById('label').style = "display:none;"

                 div.innerHTML = "<p>"+numbers+"</p>";

         }
}

       

