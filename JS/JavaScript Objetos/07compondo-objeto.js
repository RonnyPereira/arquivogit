//Adicionar dependentes para um dos clientes cadastrados, como o nome,idade e patentesco

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "5465465464",
    email: "andre@gmail.com",
    fones: ["6546466546", "89789797"]
}

cliente.dependentes ={
nome:"Sara",
parentesco: "filha",
dataNasc: "20/03/2011"
}

console.log(cliente)

console.log("*****Alterando o nome******")

// alterando o nome do dependente.
cliente.dependentes.nome = "Sara Silva"

console.log(cliente)