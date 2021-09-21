/* Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado */

let acumulado = 0,
    numero;

do {

    numero = parseInt(prompt('Ingresa número')); 
    acumulado += numero;
    console.log({numero});
    console.log({acumulado});
    
} while (!isNaN(numero) && acumulado <= 100);



/*Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
 */

let texto,
    encadenado = 'El texto es:';

do {

    texto = prompt('Ingresa texto');
    console.log(`${encadenado} ${texto}`);
    
    
} while (texto !== null);



/*Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada. */

let cantidad = parseInt(prompt('Ingresa la cantidad de veces que desees ejecutar el programa')); 

if (isNaN(cantidad)) {
    alert('Ingrese el número correctamente')
} else {

    for (let i = 1; i <= cantidad; i++) {
        console.log('hola');
        
    }
    
}

