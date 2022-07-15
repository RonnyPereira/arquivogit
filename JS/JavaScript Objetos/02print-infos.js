//Acessar um objeto com informacoes de um cliente e exibir essas informacoes no console.

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "5465465464",
    email: "andre@gmail.com"
}


console.log(`O nome do cliente e:${cliente.nome} ,ele tem ${cliente.idade} anos.`)

// imprimir so os 3 primeiros numeros do CPF
console.log(cliente.cpf.substring(0,3))



