const livros =require('./02objeto-array-for2')
const menorValor = require('./menorValor')


for (let atual=0; atual < livros.length; atual++ ){
    let menor =menorValor(livros, atual)

    let livroAtual = livros[atual];
    console.log('livro atual',livros[atual])
    let livroMenorPreco = livros[menor]
    console.log('livro menor preço', livros[menor])

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual

}

console.log(livros)