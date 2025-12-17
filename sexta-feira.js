const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const quiz = [
    {
    pergunta: "quem descobriu o Brasil? ",
    opçoes:["Colombo", "Prinecesa Isabel","Getulio", "Cabral"],
    resposta: 3
},

{
    pergunta: "quem e mais forte no manga de dbs? ",
    opçoes:["Kuririn", "Goku", "Vegeta", "Gohan"],
    resposta: 2
}
]

let score = 0;

function fazerPergunta(index) {
    if (index >= quiz.length){
        console.log(`Quiz concluido. voce acertou ${score} de ${quiz.length} perguntas.`);
    rl.close();
    return;
    }
    const pergunta = quiz[index];
    console.log(`\npergunta ${index +1}: ${pergunta.pergunta}`);
    pergunta.opçoes.forEach((opçao, i) => {
        console.log(`${i +1}. ${opçao}`);
    });

    rl.question("sua resposta: ", (answer) => {
        const resposta = parseInt(answer) -1;
        if (resposta === pergunta.resposta){
            score++;
            console.log("correto! Genio!!!!");
        } else{
            console.log(`Errouuuuu! A resposta certa era: ${pergunta.opçoes[pergunta.resposta]}`)
        }
        fazerPergunta(index + 1)
    })
}
fazerPergunta(0);