const livros = require('./02objeto-array-for2') // faz o vinculo com a exportacao do objeto

//const precosLivros =[25,15,30,50,45,20]

let atual =0;
let maisBarato = 0;

for (let atual =0;atual<livros.length; atual ++){

    if(livros[atual].preco <livros[maisBarato].preco){
       maisBarato=atual

    }


}

console.log(`o livro mais barato custa ${livros[maisBarato].preco} e o titulo e ${livros[maisBarato].titulo}`)