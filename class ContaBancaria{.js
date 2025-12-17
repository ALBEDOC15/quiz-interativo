class ContaBancaria{
    constructor (titular){
        this.titular = titular
        this.saldo = 0
    }
    depositar(valor){
        this.saldo+= valor
        return `seu saldo e de ${this.saldo}R$`
    }
    Sacar(valor){
        this.saldo-= valor
        return `o senhor(a) sacou ${this.saldo}R$`
    }
    consultarSaldo(){

        this.saldo 
        return `seu saldo e de ${this.saldo}`
    }

    }
    
    const conta = new ContaBancaria("Evandro")
    console.log(conta.depositar(890))
    console.log(conta.Sacar(600))
    console.log(conta.saldo)


