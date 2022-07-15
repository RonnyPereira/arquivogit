//Consultar um objeto utilizando uma lista de chaves relativas a informacoes de clientes gerada pelo sistema e printar o resultado na tela.

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "5465465464",
    email: "andre@gmail.com"
}
               //0      //1     //2   //3
const chaves =["nome","idade","cpf","email"]

//console.log(cliente[chaves[0]])


chaves.forEach(info=>console.log(cliente[info]))

console.log("***********teste de indefinido*******")

console.log(cliente["conta"])



