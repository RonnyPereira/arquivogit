//Adicionar uma propriedade que permita "acoes", para que os clientes que estao cadastrados
// consigam fazer operacoes bancarias

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "5465465464",
    email: "andre@gmail.com",
    fones: ["6546466546", "89789797"],
    
    dependentes:[ {
        nome:"Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
            },      

        {
        nome:"Samia Maria",
        parentesco:"filha",
        dataNasc:"04/01/2014"
        }
    ],
    saldo:100,
        depositar:function(valor){
            this.saldo += valor 
        }

    }
    console.log(cliente.saldo)
    cliente.depositar(30)
    console.log(cliente.saldo)
    
