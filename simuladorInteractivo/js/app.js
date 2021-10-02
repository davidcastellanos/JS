import { datosEstudiantes } from '../assets/data.js';
import { gestionarMensajes } from './pedirDatos.js';

const objetoMensajes = gestionarMensajes();
//console.log(datosEstudiantes);
let { mostrarMensaje, pedirNotas } = objetoMensajes;
//console.log(mostrarMensaje);
let contador = 1;
let arrayNotas = [];
let nota;
let resultado;

const inicioPrograma =
  confirm(`Bienvenidx al sistema de cálculo de Notas de la universidad MIT

presione Aceptar para CONTINUAR 
o presione Cancelar para SALIR`);

if (inicioPrograma) {
  alert(mostrarMensaje);

  while (contador <= datosEstudiantes.length) {
    for (const estudiante of datosEstudiantes) {
      pedirNotas = `A continuación ingresa la ${contador}er/da notas del estudiante ${estudiante.nombre}:
Nota de 0 a 10 para el 1er parcial.
Nota de 0 a 10 para el 2do parcial.
Nota de 0 a 10 para el Exámen Final.`;
      nota = parseFloat(prompt(pedirNotas));

      if (isNaN(nota) || nota < 0 || nota > 10) {
        alert(`Una o varias notas ingresadas no son válidas`);
        break;
      } else {
        arrayNotas.push(nota);
      }
    }

    contador++;
  }

  console.log(arrayNotas);

  datosEstudiantes[0].definitiva =
    arrayNotas[0] * 0.2 + arrayNotas[3] * 0.2 + arrayNotas[6] * 0.6;

  datosEstudiantes[1].definitiva =
    arrayNotas[1] * 0.2 + arrayNotas[4] * 0.2 + arrayNotas[7] * 0.6;

  datosEstudiantes[2].definitiva =
    arrayNotas[2] * 0.2 + arrayNotas[5] * 0.2 + arrayNotas[8] * 0.6;

  console.log(datosEstudiantes[0].definitiva);
  console.log(datosEstudiantes);

  for (const estudiante of datosEstudiantes) {
    console.log(estudiante.definitiva);
    estudiante.definitiva >= 7
      ? (resultado = `Aprueba`)
      : (resultado = `Desaprueba`);

    alert(
      `El estudiante ${estudiante.nombre}, sacó una nota definitiva de ${estudiante.definitiva} y ${resultado}`
    );
  }
} else {
  alert(`Adiós`);
}
