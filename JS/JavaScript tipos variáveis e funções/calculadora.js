function soma() {
    return n1 + n2
}
function subtracao() {
    return n1 - n2
}

function multiplicacao(n1, n2) {
    return n1 * n2
}
function divisao() {
    return n1 / n2
}


function imprime(texto) {
    console.log(texto)
}



console.log("1-+");
console.log("2--");
console.log("3-*");
console.log("4-/");

let opcao = 3;

let n1 = 1;
let n2 = 3;

switch(opcao) {
    case 1: imprime(soma()); break;
    case 2: imprime(subtracao()); break;
    case 3: imprime(multiplicacao(n1,n2)); break;
    case 4: imprime(divisao()); break;
}

// if (opcao == 1) {
//     console.log(soma())
// }
// if (opcao == 2) {
//     imprime(subtracao())
// }

// if (opcao == 3) {
//     imprime(multiplicacao())
// }

// if (opcao == 4) {
//     imprime(divisao())
// }




