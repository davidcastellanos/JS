let datoPC;

export const generarJuegoPC = (min, max) => {
    datoPC = Math.floor(Math.random() * (max - min)) + min;
    return datoPC;
}