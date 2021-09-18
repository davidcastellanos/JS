let num = parseInt(prompt('Ingrese número:'));

if (num % 2 === 0 ) {
    alert('ES PAR');
} else {
    alert('ES IMPAR');
}

// POR TERNARIO
mensaje = '';
num % 2 === 0 ? mensaje ='ES PAR' : mensaje ='ES IMPAR';
alert(mensaje)