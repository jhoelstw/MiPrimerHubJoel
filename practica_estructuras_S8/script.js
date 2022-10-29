function condicional1() {
    var a = parseInt(document.getElementById("text1").value);
    var b = parseInt(document.getElementById("text2").value);
    var c = parseInt(document.getElementById("text3").value);
    var d = parseInt(document.getElementById("text4").value);
    var e = parseInt(document.getElementById("text5").value);
    var ma = a;

    if(b>ma) ma=b;
    if(c>ma) ma=c;
    if(d>ma) ma=d;
    if(e>ma) ma=e;

    document.getElementById("text6").innerText=ma;
}

function condicional2() {
    var a = parseInt(document.getElementById("text1").value);
    var b = parseInt(document.getElementById("text2").value);
    var c = parseInt(document.getElementById("text3").value);
    var d = parseInt(document.getElementById("text4").value);
    var e = parseInt(document.getElementById("text5").value);
    var ma = a;

    if(b<ma) ma=b;
    if(c<ma) ma=c;
    if(d<ma) ma=d;
    if(e<ma) ma=e;

    document.getElementById("text6").innerText=ma;
}


function condicional3() {
    var a = parseInt(document.getElementById("text1").value);
    var b = parseInt(document.getElementById("text2").value);
    var c = parseInt(document.getElementById("text3").value);
    var d = parseInt(document.getElementById("text4").value);
    var e = parseInt(document.getElementById("text5").value);
    var ma1 = condicional1();
    var me1 = condicional2();
    me2 = ma1;
    if(a<me2 && a>me1) me2=a;
    if(b<me2 && b>me1) me2=b;
    if(c<me2 && c>me1) me2=c;
    if(d<me2 && d>me1) me2=d;
    if(e<me2 && e>me1) me2=e;
    
}