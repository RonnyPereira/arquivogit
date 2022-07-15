//Acessar a lista de numeros de telefone das pessoas cadastradas no sistema
// e impri-la, verificando se ha mais de um numero em algum cadastro

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "5465465464",
    email: "andre@gmail.com",
    fones: ["6546466546", "89789797"]
}
//atual
cliente.fones.forEach(fone=> console.log(fone))

console.log("****************************")

//adicionando um numero
cliente.fones.push("23131313")
cliente.fones.forEach(fone=> console.log(fone))

console.log("****************************")
//retirando o ultimo numero
cliente.fones.pop()
cliente.fones.forEach(fone=> console.log(fone))
