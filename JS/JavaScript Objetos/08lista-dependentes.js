// Verificar a melhor forma de agregar a informação de um novo dependente  ao objeto Cliente.

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "5465465464",
    email: "andre@gmail.com",
    fones: ["6546466546", "89789797"],
    
    //array de denpendentes
    dependentes:[ {
        nome:"Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }   ]    
}
cliente.dependentes.push({
nome:"Samia Maria",
parentesco:"filha",
dataNasc:"04/01/2014"
})


console.log(cliente)

//procurar dentro do array quem e a filha mais nova
const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc ==="04/01/2014")

console.log(filhaMaisNova[0].nome)
