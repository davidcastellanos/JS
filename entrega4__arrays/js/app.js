import { arrayObjetos } from '../assets/data.js';

/* ORDENAR OBJETOS POR NOMBRE ASCENDENTE */

const nombreAscendente = (productos) => {
  console.log(
    productos.sort((a, b) => {
      if (a.nombre < b.nombre) return -1;
      if (a.nombre > b.nombre) return 1;

      return 0;
    })
  );
};

//nombreAscendente(arrayObjetos);

/* ORDENAR OBJETOS POR NOMBRE DESCENDENTE */

const nombreDescendente = (productos) => {
  console.log(
    productos.sort((a, b) => {
      if (a.nombre < b.nombre) return 1;
      if (a.nombre > b.nombre) return -1;

      return 0;
    })
  );
};
//nombreDescendente(arrayObjetos);

//

/* ORDENAR OBJETOS POR ID ASCENDENTE*/
const idAscendente = (productos) => {
  console.log(productos.sort((a, b) => a.id - b.id));
};
//idAscendente(arrayObjetos);

/* ORDENAR OBJETOS POR ID DESCENDENTE*/
const idDescendente = (productos) => {
  console.log(productos.sort((a, b) => b.id - a.id));
};
//idDescendente(arrayObjetos);

//

/* ORDENAR OBJETOS POR PRECIO ASCENDENTE*/
const precioAscendente = (productos) => {
  console.log(productos.sort((a, b) => a.precio - b.precio));
};
precioAscendente(arrayObjetos);

const precioDescendente = (productos) => {
  console.log(productos.sort((a, b) => b.precio - a.precio));
};
//precioDescendente(arrayObjetos);
