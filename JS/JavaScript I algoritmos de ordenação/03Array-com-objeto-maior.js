const livros = require('./02objeto-array-for2') // faz o vinculo com a exportacao do objeto

//const precosLivros =[25,15,30,50,45,20]

let atual = 0;

let maisCaro = 0;

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco > livros[maisCaro].preco) {
        maisCaro = atual;

    }
}

console.log(`o livro mais caro custa ${livros[maisCaro].preco} e o titulo e ${livros[maisCaro].titulo}`)