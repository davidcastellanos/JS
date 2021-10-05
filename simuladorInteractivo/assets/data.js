class CrearEstudiante {
  constructor(nombre, parcial1, parcial2, examenFinal) {
    this.nombre = nombre;
    this.parcial1 = parcial1;
    this.parcial2 = parcial2;
    this.examenFinal = examenFinal;
  }
}

let estudiante1 = new CrearEstudiante('David', 0, 0, 0);
//console.log([estudiante1]);
let estudiante2 = new CrearEstudiante('Pedro', 0, 0, 0);
let estudiante3 = new CrearEstudiante('Juan', 0, 0, 0);

export let datosEstudiantes = [estudiante1, estudiante2, estudiante3];

//console.log(datosEstudiantes);

// export let datosEstudiantes = [
//   {
//     nombre: 'David',
//     parcial1: 0,
//     parcial2: 0,
//     examenFinal: 0,
//   },

//   {
//     nombre: 'Pedro',
//     parcial1: 0,
//     parcial2: 0,
//     examenFinal: 0,
//   },

//   {
//     nombre: 'Juan',
//     parcial1: 0,
//     parcial2: 0,
//     examenFinal: 0,
//   },
// ];
