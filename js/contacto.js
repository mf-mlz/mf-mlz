var inputs = document.getElementsByClassName('formulario__input'); //OBTEN TODOS LOS ELEMENTOS CON LA CLASE formulario__input
for ( var i =0; i < inputs.length; i++){
inputs[i].addEventListener('keyup', function(){

if(this.value.length>=1){
    this.nextElementSibling.classList.add('fijar');
}else{
    this.nextElementSibling.classList.remove('fijar');
}
});
}
