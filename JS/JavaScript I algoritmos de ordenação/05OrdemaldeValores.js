const livros = require('./02objeto-array-for2')

function insertionSort(lista){

    for(let atual =0; atual < lista.length; atual++){

        let analise = atual;
        while (analise>0 && lista[analise].preco<lista[analise -1].preco){

            let itemAnalise = livros[analise];
            let itemAnterior = lista[analise -1];

            lista[analise] = itemAnterior
            lista[analise -1] = itemAnalise

            analise--
        }
    }

console.log(lista)
}
insertionSort(livros)