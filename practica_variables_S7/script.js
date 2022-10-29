function Variables() {
    var a = 5;
    let x = 10;
    var a = "10";
    const a1 = "20";
    document.getElementById("Var1").innerHTML = a;
    document.getElementById("Let1").innerHTML = x;
    document.getElementById("Const1").innerHTML = a1;
    a1 = 200;
    x = 200;
}

function Variables2() {
    var a = 5;
    var a = "1000";
    let x = "20";
    const a1 = 20;
    x = 200;
    document.getElementById("Var1").innerHTML = a;
    document.getElementById("Let1").innerHTML = x;
    document.getElementById("Const1").innerHTML = a1;
}

function ValoresB() {
    var a,b,c;
    a = 10;
    b = 200;
    c = a>b;
    document.getElementById("Var1").innerHTML = c;
    c = a+b;
    document.getElementById("Let1").innerHTML = c;
}
