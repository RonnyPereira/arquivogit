//Aproveitar o Cliente que ja existe e criar a partir dele um novo tipo de cliente para contas poupanca

function cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function (valor) {

        this.saldo += valor
    }
}


function clientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoupsaldoPoup = saldoPoup
}


const ju = new clientePoupanca("Ju", "564564564564", "ju@email.com", 100, 200)

console.log(ju)


clientePoupanca.prototype.depositaPoup = function (valor) {

    this.saldoPoup += valor
}

ju.depositaPoup(30)

console.log(ju.saldoPoup)