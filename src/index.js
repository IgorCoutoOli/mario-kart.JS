// Lista de Corredores.
const players = [
    {
        name: 'Mario',
        speed: 4,
        maneuverability: 3,
        power: 3,
        points: 0
    },
    {
        name: 'Peach',
        speed: 3,
        maneuverability: 4,
        power: 2,
        points: 0,
    },
    {
        name: 'Yoshi',
        speed: 2,
        maneuverability: 4,
        power: 3,
        points: 0
    },
    {
        name: 'Bowser',
        speed: 5,
        maneuverability: 2,
        power: 5,
        points: 0
    },
    {
        name: 'Luigi',
        speed: 3,
        maneuverability: 4,
        power: 4,
        points: 0
    },
    {
        name: 'Donkey Kong',
        speed: 2,
        maneuverability: 2,
        power: 5,
        points: 0
    }
];

// Seleção de Corredores.
async function playerSelect() {
    let player2, player1 = players[await rollDice(players.length) - 1];

    // Corredor 1 não pode ser o corredor 2.
    while (true) {
        player2 = players[await rollDice(players.length) - 1];
        if (player2 != player1)
            break;
    }

    return { player1, player2 };
}

// Rolando dado.
async function rollDice(faces) {
    return Math.floor(Math.random() * faces) + 1;
}

// Resultado do bloco sorteado.
async function blockResult(playerOne, playerTwo, block) {
    let dice1 = await rollDice(6), dice2 = await rollDice(6), status1, status2;

    status1 = dice1 + (block == 1 ? playerOne.power : (block == 2 ? playerOne.maneuverability : playerOne.speed));
    status2 = dice2 + (block == 1 ? playerTwo.power : (block == 2 ? playerTwo.maneuverability : playerTwo.speed));

    let blockName = (block == 1 ? 'poder' : (block == 2 ? 'manobrabilidade' : 'velocidade'));

    console.log(`${playerOne.name} 🎲 rolou um dado de ${blockName} ${dice1} + ${playerOne.power} = ${(status1)}`);
    console.log(`${playerTwo.name} 🎲 rolou um dado de ${blockName} ${dice2} + ${playerTwo.power} = ${(status2)}`);

    if (status1 != status2) {
        console.log(`${status1 > status2 ? playerOne.name : playerTwo.name} ${block == 1 ? `venceu o confronto! ${status1 > status2 ? `${playerTwo.name} ${playerTwo.points > 0? `perdeu 1 ponto 🐢`:`não perdeu ponto por já estar com 0 🛡️`}` : `${playerOne.name} ${playerOne.points > 0? `perdeu 1 ponto 🐢`:`não perdeu ponto por já estar com 0 🛡️`}`}` : `marcou um ponto! 🏎️ 💨`}`);
        playerOne.points = (status1 > status2 && block != 1 ? playerOne.points + 1 : (status2 > status1 && block == 1 && playerOne.points > 0 ? playerOne.points - 1 : playerOne.points))
        playerTwo.points = (status2 > status1 && block != 1 ? playerTwo.points + 1 : (status1 > status2 && block == 1 && playerTwo.points > 0 ? playerTwo.points - 1 : playerTwo.points))
    } else if (block == 1)
        console.log(`Confronto empatado! Nenhum ponto foi perdido.`);

    return { player1: playerOne.points, player2: playerTwo.points }
}

// Processando corrida.
async function engineRace(player1, player2, rounds) {
    console.log(`\n🚦Corrida entre ${player1.name} e ${player2.name} começando...\n`);

    for (let round = 1; round <= rounds; round++) {
        console.log(`🔄 Rodada ${round}`);

        block = await rollDice(3);
        blockName = ['CONFRONTO', 'CURVA', 'RETA'];

        console.log(`Bloco: ${blockName[block - 1]}`);

        if (block == 1)
            console.log(`${player1.name} confrontou com ${player2.name}! 🥊`);

        resultTurn = await blockResult(player1, player2, block);

        player1.points = resultTurn.player1;
        player2.points = resultTurn.player2;

        console.log('------------------------------------------');
    }

    console.log('🏁 Resultado final: ');
    console.log(`${player1.name}: ${player1.points} ponto(s)`);
    console.log(`${player2.name}: ${player2.points} ponto(s)\n`);

    if (player1.points > player2.points)
        return player1
    else if (player2.points > player1.points)
        return player2
    else
        return null
}

(async function main() {
    // Selecionando Corredores.
    let { player1, player2 } = await playerSelect();

    // Iniciando a corrida.
    let playerWin = await engineRace(player1, player2, 5);

    // Verificando resultado da partida.
    if (playerWin)
        console.log(`${playerWin.name} venceu a corrida! Parabéns! 🏆\n`);
    else
        console.log('A corrida terminou em empate!\n');

    return;
})()