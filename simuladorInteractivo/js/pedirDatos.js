import { datosEstudiantes } from '../assets/data.js';

export const gestionarMensajes = () => {
  let mostrarMensaje = `Para Calcular las notas, a continuación deberá 
ingresar 3 notas por cada estudiante (de 0 a 10), teniendo en cuenta el valor de sus porcentajes

Parcial 1: 20%
Parcial 2: 20%
Exámen Final: 60%

El estudiante aprueba con 7.0 o más`;

  let pedirNotas = `A continuación ingresa las notas del estudiante:
  Nota de 0 a 10 para el 1er parcial.
  Nota de 0 a 10 para el 2do parcial.
  Nota de 0 a 10 para el Exámen Final.`;

  return { mostrarMensaje, pedirNotas };
};
