class Retangulo {
    constructor (largura, altura){
        this.largura = largura
        this.altura = altura
        this.numero = numero
    }
    calcularArea(){
        return ` (${this.largura}*${this.altura}) o valor da area sera ${this.numero} `
    }
    calcularPerimetro(){
        return `o perimetro tem o valor de 2 * (${this.largura} + ${altura})`
    }

   
}
const retangulo = new Retangulo (5, 10)
console.log(retangulo.calcularArea())
