function ejercicio1() {
    n1 = parseInt(prompt("ingrese el 1er numero"),10);
    n2 = parseInt(prompt("ingrese el 2do numero"),10);
    n3 = parseInt(prompt("ingrese el 3er numero"),10);
    n4 = parseInt(prompt("ingrese el 4to numero"),10);
    n5 = parseInt(prompt("ingrese el 5to numero"),10);

    listaA = [n1,n2,n3,n4,n5];
    listaB = [n1,n2,n3,n4,n5];

    listaB.sort(function(a,b) {return a-b});

    document.getElementById("Entradas").innerHTML = "Numeros ingresados: " + listaA;
    document.getElementById("Ordenados").innerHTML = "Numeros ordenados: " + listaB;
    document.getElementById("Mayor").innerHTML = "Mayor: " + listaB[4];
    document.getElementById("Menor").innerHTML = "Menor: " + listaB[0];
    document.getElementById("Tercer_Menor").innerHTML = "Tercer Menor: " + listaB[2];
}

function ejercicio2() {
    n = parseInt(prompt("ingrese el numero"),10);
    
    d4 = Math.trunc(n/1000);
    d3 = Math.trunc((n - d4*1000)/100);
    d2 = Math.trunc((n - d4*1000 - d3*100)/10);
    d1 = Math.trunc((n - d4*1000 - d3*100 - d2*10));

    document.getElementById("D4").innerHTML = "D4: " + d4;
    document.getElementById("D3").innerHTML = "D3: " + d3;
    document.getElementById("D2").innerHTML = "D2: " + d2;
    document.getElementById("D1").innerHTML = "D1: " + d1;

    suma = 0;

    if (d4%2 != 0) {
        suma = suma + d4;
    }
    if (d3%2 != 0) {
        suma = suma + d3;
    }
    if (d2%2 != 0) {
        suma = suma + d2;
    }
    if (d1%2 != 0) {
        suma = suma + d1;
    }

    document.getElementById("Suma").innerHTML = "Suma: " + suma;
}