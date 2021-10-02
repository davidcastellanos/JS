
let resultadoHumano;


export const verificarDatosHumano = (datoHumano) => {

    isNaN(datoHumano) || datoHumano == null ? resultadoHumano = 'Dato inválido, intente de nuevo': 
            datoHumano <= 0 || datoHumano > 3 ? resultadoHumano = 'Número inválido, intente de nuevo' : resultadoHumano = datoHumano;

    return resultadoHumano;

}

