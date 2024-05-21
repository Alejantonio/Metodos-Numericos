document.addEventListener( 'DOMContentLoaded', function (){
    document.body.style.background = "linear-gradient(to right, #ffcc00, #ff6699)";

});

const e = 2.718281828;

function fun(x) {
    let a = (2 - Math.pow(e, x) + x*x)/3;
    return a;
}

function fun(x) {
    let e = 2.718281828;
    let a = (2 - Math.pow(e, x) + x*x) / 3;
    return a;
}

function Evaluar(P0, TOL, N){
    let P, b, i = 1, OK = 1;
    var P0 = parseFloat(document.getElementById('P0').value);
    console.log('Dato ingresado:', P0);

    var Tol = parseFloat(document.getElementById('Tol').value);
    console.log('Dato ingresado:', Tol);

    var N = parseFloat(document.getElementById('Iteraciones').value);
    console.log('Dato ingresado:', N);

    while(i <= N && OK === 1) {
        P = fun(P0);
        console.log(i + "\t" + P);
        b = Math.abs(P - P0);
        
        if(b < TOL){
            var tabla = document.querySelector('table');
            var celdaResultadoP0 = tabla.rows[1].cells[0];
            celdaResultadoP0.innerHTML = + p;
            /*console.log("Solucion aproximada P = " + P);*/
            var tabla = document.querySelector('table');
            var celdaResultadoN = tabla.rows[1].cells[1];
            celdaResultadoN.innerHTML = + i;
            /*console.log("Numero de iteraciones N = " + i);*/
            var tabla = document.querySelector('table');
            var celdaResultadoTOL = tabla.rows[1].cells[2];
            celdaResultadoTOL.innerHTML = + TOL + "\n\n";
            /*console.log("Tolerancia TOL = " + TOL + "\n\n");*/
            OK = 0;
        } else {
            i++;
            P0 = P;
        }
    }

    if(OK === 1) {
        console.log("\n\nEl metodo fallo con un numero de iteraciones N = " + N + "\n\n");
    }

    /*var tabla = document.querySelector('table');
    var celdaResultado = tabla.rows[1].cells[0];
    celdaResultado.innerHTML = + r;*/
}
