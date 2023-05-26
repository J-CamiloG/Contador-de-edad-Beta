
//generamos la funcion para el llamado del onclick del boton
function mostrarValores() {
    // generamos la fecha actual para posteriormente poder sacar el ressultado 
    let fechaActual = new Date();
    let diaActual = fechaActual.getDate();
    let mesActual = fechaActual.getMonth() + 1;
    let añoActual = fechaActual.getFullYear();
    // generamos el llamado para los strings que el usuario haya digitado
    let inputDia = document.getElementById("inputDias");
    let inputMes = document.getElementById("inputMeses");
    let inputAño = document.getElementById("inputAños");
    //convertimos los strings a numero para poder operarlos 
    let diaIngresado = parseInt(inputDia.value);
    let mesIngresado = parseInt(inputMes.value);
    let añoIngresado = parseInt(inputAño.value);
    // operamos el valor ingresado y el valos actual
    let resultadoDia = diaActual - diaIngresado;
    let resultadoMes = mesActual - mesIngresado;
    let resultadoAño = añoActual - añoIngresado;
    
    // cuadramos que el mes no sea negativo en el caso que el valor ingresado sea menor al actual
    if (mesActual < mesIngresado) {
        resultadoAño--;
        resultadoMes += 12;
    }
    //llamamos a los h3 del html para poder imprimir el resultado 
    let parrafoAños = document.getElementById("parrafoAños");
    let parrafoDias = document.getElementById("parrafoDias");
    let parrafoMeses = document.getElementById("parrafoMeses");

    //le damos el valor a cada h3
    parrafoAños.textContent=resultadoAño;
    parrafoMeses.textContent=resultadoMes;
    parrafoDias.textContent=resultadoDia;
}