//Percorrer um objeto, verificar se existe a chave "dependentes"e, caso exista, enviar uma mensagem
//de oferta de seguro

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

    function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
        if(propsClientes.includes ("dependentes")) //include retorna true ou false
         {
            console.log(`Oferta de seguro de vida para ${obj.nome}`);

        }
    }
    
   // console.log(Object.values(cliente))
   // console.log(Object.entries(cliente))
    oferecerSeguro(cliente)