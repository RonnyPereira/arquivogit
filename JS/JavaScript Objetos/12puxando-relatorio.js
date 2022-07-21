//Percorrer um objeto e extrair informações basicas do cliente em um formato mais legivel
//e de forma automatizad para fornecer  outros departamentos do banco

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

    let relatorio="";

    for (let info in cliente){
        if(typeof cliente[info]=== "object" || typeof cliente[info] ==="function")
        {
           continue 
        }else{
            relatorio += `${info} ==> ${cliente[info]}
            `

        }
    }

    console.log(relatorio)