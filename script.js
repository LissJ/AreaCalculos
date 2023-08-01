function AreaRetangulo() {
    let x = Number(prompt('Informe o valor h (altura)'));
    let y = Number(prompt('Informe o valor b (base)'));
    let resultado = x * y;
    alert("A área do retângulo é " + resultado + "m²");

    resp=("A área do retângulo é "+resultado+"m²");
    document.getElementById("result_ret").innerHTML=resp
}

function AreaTriangulo() {
    let x = Number(prompt('Informe o valor h (altura)'));
    let y = Number(prompt('Informe o valor b (base)'));
    let resultado = x * y / 2;
    alert("A área do triângulo é " + resultado + "m²");

    resp=("A área do triângulo é "+resultado+"m²");
    document.getElementById("result_tri").innerHTML=resp
}

function AreaCirculo() {
    let pi = Math.PI
    let x = Number(prompt('Informe o diâmetro do círculo'));
    let resultado = pi * (x / 2) ** 2;
    alert("A área do círculo é " + resultado + "m²");

    resp=("A área do círculo é "+resultado+"m²");
    document.getElementById("result_cir").innerHTML=resp
}

function AreaTrapezio() {
    let x = Number(prompt('Informe o valor B (base maior)'));
    let y = Number(prompt('Informe o valor b (base menor)'));
    let z = Number(prompt('Informe o valor h (altura)'));
    let resultado = (x + y) * z / 2;
    alert("A área do trapézio é " + resultado + "m²");

    resp=("A área do trapézio é "+resultado+"m²");
    document.getElementById("result_tra").innerHTML=resp
}

function AreaLosango() {
    let x = Number(prompt('Informe o valor D (diagonal maior)'));
    let y = Number(prompt('Informe o valor d (diagonal menor)'));
    let resultado = x * y / 2;
    alert("A área do losango é " + resultado + "m²");

    resp=("A área do losango é "+resultado+"m²");
    document.getElementById("result_los").innerHTML=resp
}