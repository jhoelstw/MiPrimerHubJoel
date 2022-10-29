//el mayor de los numeros
function mayorDe3() {
    n1 = parseInt(prompt("ingrese el 1er numero"),10);
    n2 = parseInt(prompt("ingrese el 2do numero"),10);
    n3 = parseInt(prompt("ingrese el 3er numero"),10);

    if(n1>n2) {
        medio=n1;
    } else {
        medio=n2;
    }

    if(medio>n3){
        mayor=medio
    } else {
        mayor=n3
    }
    document.write("el numero mayor es: " + mayor);
    //document.write("el numero mayor es: " + mayor);
}


//el segundo mayor de numeros
function segundoMayorDe3() {
    n1 = parseInt(prompt("ingrese el 1er numero"),10); //3
    n2 = parseInt(prompt("ingrese el 2do numero"),10); //15
    n3 = parseInt(prompt("ingrese el 3er numero"),10); //20

    lista = [n1,n2,n3];
    lista.sort(function(a,b) {return a-b});
    
    document.write("el segundo numero mayor es: " + lista[1]);
}

//Menor numero
function menorDe3() {
    a = parseInt(prompt("ingrese el 1er numero"));
    b = parseInt(prompt("ingrese el 2do numero"));
    c = parseInt(prompt("ingrese el 3er numero"));

    lista = [a, b, c];
    lista.sort((a, b) => a - b);

    document.write("el menor numero es: " + lista[0])
    
  }

//convertir grados
  function convertirHorasMinutos(numero) {
    numero=prompt("ingrese grados")
    if(Number.isInteger(numero)) {
        if (numero > 0) {
            let horas = Math.floor(numero / 60);
            let minutos = numero % 60;

            horas = ('0' + horas).slice(-2);
            minutos = ('0' + minutos).slice(-2);
            return `${horas}:${minutos}`;
        } else {
            return null;
        }
    } else {
        throw new Error('El valor pasado como argumento no es un número entero.');
    }
}
