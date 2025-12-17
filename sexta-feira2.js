const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const quiz = [
    {
        pergunta: "Quem descobriu o Brasil?",
        opcoes: ["Colombo", "Princesa Isabel", "Arrascaeta", "Cabral"],
        resposta: 3
    }
]

let score = 0;

function fazerPergunta(index) {
    if (index >= quiz.length) {
        console.log(`Quiz concluído. Você acertou ${score} de ${quiz.length} perguntas.`);
        rl.close();
        return;
    }

    const pergunta = quiz[index];
    console.log(`\nPergunta ${index +1}: ${pergunta.pergunta}`);
    pergunta.opcoes.forEach((opcao, i) => {
        console.log(`${i +1}. ${opcao}`);
    });

    rl.question("Sua resposta: ", (answer) => {
        const resposta = parseInt(answer) -1;
        if (resposta === pergunta.resposta){
            score++;
            console.log("Correto! Gênio!!!!");
        } else {
            console.log(`Errouuuuu! A resposta certa era: ${pergunta.opcoes[pergunta.resposta]} `);
        }
        fazerPergunta(index + 1)
    })
}

fazerPergunta(0);