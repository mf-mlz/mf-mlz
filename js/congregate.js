if(navigator.geolocation){ // para ver si tu navegador acepta la geolocalizacion
    alert("puedes ser localizado");
    navigator.geolocation.getCurrentPosition(success);
}else{
    alert("no puedes ser localizado");
}

function success(geolocationPositions){

    let coords= geolocationPositions.coords;
    console.log(geolocationPositions);

 document.getElementById("mymap").innerHTML = ("Latitud: " + coords.latitude + " Longitud: " + coords.longitude);

}