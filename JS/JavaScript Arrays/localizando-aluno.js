//para localizar temos que usar dois metodos - includes e indexOf

const alunos =['joao','juliana','caio','ana']

const mediasDosAlunos =[10,7,9,6]

//includes e uma funcao booleano que retorna verdadeiro ou falso

//indexOf pega a posicao do nome dentro do array

                          //0       //1
let listaDeNotasEAlunos =[alunos,mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
                        //0   //3  no exemplo da ana 
if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){

    // indice e uma variavel para receber o verdadeiro do IF, no caso o 3 ou Ana
    indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)

               // 3 ou ana                                          //busca na medua na posição 3 que no caso e o indice
    return listaDeNotasEAlunos[0][indice] + ', sua media é: ' + listaDeNotasEAlunos[1][indice]
}else{
return "Aluno não esta cadastrado"

}

}

console.log(exibeNomeNota("ana"))

