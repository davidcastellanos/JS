let numero = parseInt(prompt('Ingresa un número'));

/* IF-ELSE VALIDAR NÚMERO*/
// if (isNaN(numero)) {

//     alert('El dato que ingresaste no es válido, prueba de nuevo')    
    
// } else if (numero < 0){

//     alert(`Tu número ${numero} es un número negativo`)
    
// } else if(numero >= 0 && numero <= 1000){

//     alert(`Tu número ${numero} es positivo y está en el rango de 0 a 1000 inclusive`);

// } else {

//     alert(`Tu número ${numero} es positivo y es mayor a 1000`);
// };


/* TERNARIO VALIDAR NÚMERO*/
 let msj;
isNaN(numero) ? msj = 'El dato que ingresaste no es válido, prueba de nuevo' :
numero < 0 ? msj = `Tu número ${numero} es un número negativo` : 
numero >= 0 && numero <= 1000 ? msj = `Tu número ${numero} es positivo y está en el rango de 0 a 1000 inclusive`: msj = `Tu número ${numero} es positivo y es mayor a 1000`;

alert(msj);






/* IF-ELSE VALIDAR TEXTO*/
const textoHola = prompt('Ingresa exactamente la palabra "Hola"');

// if (textoHola !== 'Hola' && textoHola !== 'HOLA' && textoHola !== 'hola' ) {
    
//     console.log('No te muestro el alert, pero no ingresaste la palabra solicitada');
    
// } else {

//     alert(`al final de cuentas pusiste ${textoHola}`);   
// }

/* TERNARIO VALIDAR  TEXTO*/
textoHola != 'Hola' && textoHola != 'HOLA' && textoHola != 'hola' ? msj = 'no ingresaste la palabra solicitada'  : msj = `al final de cuentas pusiste ${textoHola}`;

alert(msj);






/* IF-ELSE VALIDAR NÚMERO 10 a 50*/
let numero2 = parseInt(prompt('Ingresa un número'));
// if (isNaN(numero2)) {

//     alert('El dato que ingresaste no es válido, prueba de nuevo')    
    
// } else if (numero2 < 10){

//     alert(`Tu número ${numero2} es un número menor a 10 y está fuera de rango`)
    
// } else if(numero2 >= 10 && numero2 <= 50){

//     alert(`Tu número ${numero2} está en el rango de 10 a 50 inclusive`);

// } else {

//     alert(`Tu número ${numero2} es mayor y está fuera de rango`);
// };

/* TERNARIO VALIDAR NÚMERO  10 a 50*/
isNaN(numero2) ? msj = 'El dato que ingresaste no es válido, prueba de nuevo' :
numero2 < 10 ? msj = `Tu número ${numero2} es un número menor a 10 y está fuera de rango` : 
numero2 >= 10 && numero2 <= 50 ? msj = `Tu número ${numero2} está en el rango de 10 a 50 inclusive`: msj = `Tu número ${numero2} es mayor y está fuera de rango`;

alert(msj);