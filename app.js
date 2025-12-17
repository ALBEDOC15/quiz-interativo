class Carro {
    constructor (marca, cor) {
        this.marca = marca;
        this.cor = cor;
        this.velocidade = 0;
    }
    // Metodo:
    ligar(){
        return `O carro ${this.marca} de cor ${this.cor} ligou o motor. `
    }
    acelerar(quantidade){
        this.velocidade+= quantidade;
        return `${this.marca} esta acelerando. Velocidade atual: ${this.velocidade} km/h`
    }
    reduzir(quantidade){
        this.velocidade-= quantidade;
        return `${this.marca} esta reduzindo. Velocidade atual: ${this.velocidade} km/h`
    }
    frear(){
        this.velocidade = 0
        return `${this.marca} Parou`
    }
    }
class Caminhonete extends Carro {
    constructor(marca, cor, capacidadedeCarga){
        super(marca, cor);
        this.capacidadedeCarga = capacidadedeCarga
    }
    // Metodo especifico
    carregar(peso){
        if(peso <= this.capacidadedeCarga) {
            return `carregamento de ${peso}kg. Capacidade ok(ate ${this.capacidadedeCarga})kg`
        } else {
            return `aviso: o peso de ${peso}kg excede a capacidade de ${this.capacidadedeCarga}`
        }
    }
}
const hiluxCaminhonete = new Caminhonete ("hilux", "prata", 800);
const s10Caminhonete = new Caminhonete ("s10", "Azul", 1000);
console.log(hiluxCaminhonete.carregar(500))
console.log(s10Caminhonete.carregar(1500))