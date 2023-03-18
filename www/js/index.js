/*

 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
const express = require('express');
const index = express();

index.set('view engine', 'ejs');

index.use('/', require('../../router'));

function binarioInt(){
    let binario = document.getElementById("binario").value;
    
    
    var b = parseInt( binario, 2 );

    let decimal = b;
    
    console.log('resultado: %d', b);
    
    
    let info= document.getElementById("info");

    info.innerHTML = "A representaçao en Decimal e <br> "+ b;
    
}
function intBinario(){
    
    var binario2 = parseInt(document.getElementById("binario").value);
    var temp = Number(binario2).toString(2);
    
    console.log('resultado: ', Number(binario2).toString(2));
    
    let info= document.getElementById("info");

    info.innerHTML = "A representaçao en Binario e  "+ temp;
}

function calculojuros(){
    
    var capital = parseInt(document.getElementById("dinero").value);
    var meses = parseInt(document.getElementById("meses").value);
    var interes = parseFloat(document.getElementById("juros").value);
    console.log('resultado: ', capital);
    console.log('resultado: ', meses);
    console.log('resultado: ', interes);
    
    var interesx = capital*(interes/100)*meses;
    var temp = interesx + capital;
    
    let info= document.getElementById("info");

    info.innerHTML = "<br>Monto total de juros e  "+ interesx;
    info.innerHTML += "<br>Monto total da inversao e  "+ temp;
}

