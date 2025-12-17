class Pessoa {
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    cumprimentar(){
        return `ola meu nome e ${this.nome} e tenho ${this.idade} anos`
    }
}
const meuNome = new Pessoa ("mario", 29)
    console.log(meuNome.cumprimentar())