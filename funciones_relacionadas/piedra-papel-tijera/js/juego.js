import { pedirDatosHumano } from "./pedirDatos.js";
import { verificarDatosHumano } from "./verificador.js";
import { generarJuegoPC } from "./datosPC.js";




let eleccionPC,
    eleccionHumano,
    conteo = 1,
    arrayPC = [],
    arrayJugador = [],
    msjPantalla;



while (conteo < 4) {
    eleccionHumano = parseInt(prompt(pedirDatosHumano()));
    eleccionPC = generarJuegoPC(1,4);

    if (verificarDatosHumano(eleccionHumano) == 'Dato inválido, intente de nuevo' || verificarDatosHumano(eleccionHumano) == 'Número inválido, intente de nuevo') {

        conteo = conteo + 0;
        alert(verificarDatosHumano(eleccionHumano));
        

        
    } else if( eleccionHumano === eleccionPC) {
        msjPantalla = `Empate, nadie Gana!!! 😌 Gana 2 de 3`
       
        conteo = conteo + 0;
        alert(msjPantalla)


    } else {

        if (eleccionHumano == 2 && eleccionPC == 1 || eleccionHumano == 1 && eleccionPC == 3 ||  eleccionHumano == 3 && eleccionPC == 2) {

            msjPantalla = `Ganaste éste turno!!! 🥳🥳🥳 `;
            arrayJugador.push(msjPantalla)

            
        } else {
            msjPantalla = `Gana PC éste turno!!! 😢😢😢`;
            arrayPC.push(msjPantalla)


        }

        
        conteo++;
        alert(msjPantalla)
        console.log({eleccionHumano});
        console.log({eleccionPC});
    }
    


    
}

arrayPC.length === arrayJugador.length ? msjPantalla = `Empate en el juego, nadie Gana!!! 😌` :
arrayPC.length > arrayJugador.length ? msjPantalla = `Gana PC el juego!!! 😢😢😢 es una pena...`: msjPantalla = `Ganaste el juego!!! Eres mi ídolo 🥳🥳🥳 `;


alert(msjPantalla);