const livros = require('./02objeto-array-for2') // faz o vinculo com a exportacao do objeto



function menorValor(arrprodutos, posicaoInicial) {
    let maisBarato = posicaoInicial

    for (let atual = posicaoInicial; atual < arrprodutos.length; atual++) {

        if (arrprodutos[atual].preco < arrprodutos[maisBarato].preco) {
            maisBarato = atual

        }


    }
    return maisBarato;
}

module.exports = menorValor