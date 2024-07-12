
<h1>Desafio de projeto: Mario Kart.JS</h1>

<table>
    <tr>
        <td>
            <img src="./docs/header.gif" alt="Mario Kart" width="200">
        </td>
        <td>
            <b>Objetivo:</b>
            <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. O objetivo deste projeto é criar uma simulação de uma corrida de Mario Kart onde dois jogadores competem em uma pista com diferentes blocos que afetam a corrida.</p>
        </td>
    </tr>
</table>

<h2>Corredores</h2>
<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
<tr>
    <td style="border: 1px solid black; text-align: center;">
        <p>Mario</p>
        <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
        <p>Velocidade: 4</p>
        <p>Manobrabilidade: 3</p>
        <p>Poder: 3</p>
    </td>
        <td style="border: 1px solid black; text-align: center;">
        <p>Peach</p>
        <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
        <p>Velocidade: 3</p>
        <p>Manobrabilidade: 4</p>
        <p>Poder: 2</p>
    </td>
        <td style="border: 1px solid black; text-align: center;">
        <p>Yoshi</p>
        <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
        <p>Velocidade: 2</p>
        <p>Manobrabilidade: 4</p>
        <p>Poder: 3</p>
    </td>
</tr>
<tr>
    <td style="border: 1px solid black; text-align: center;">
        <p>Bowser</p>
        <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
        <p>Velocidade: 5</p>
        <p>Manobrabilidade: 2</p>
        <p>Poder: 5</p>
    </td>
    <td style="border: 1px solid black; text-align: center;">
        <p>Luigi</p>
        <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
        <p>Velocidade: 3</p>
        <p>Manobrabilidade: 4</p>
        <p>Poder: 4</p>
    </td>
    <td style="border: 1px solid black; text-align: center;">
        <p>Donkey Kong</p>
        <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
        <p>Velocidade: 2</p>
        <p>Manobrabilidade: 2</p>
        <p>Poder: 5</p>
    </td>
</tr>
</table>

<h2>Visão Geral do Código</h2>

<p>Este projeto é uma simulação de corrida entre dois personagens do Mario Kart. O código implementa uma série de regras e mecânicas inspiradas na série de jogos, onde os jogadores enfrentam desafios e competem para acumular pontos ao longo de cinco rodadas.</p>

<h2>Componentes do Código</h2>

<h3>1. Lista de Corredores</h3>
<p>A primeira parte do código define uma lista de corredores, cada um representado por um objeto com atributos como <b>velocidade</b>, <b>manobrabilidade</b> e <b>poder</b>. Esses atributos determinam o desempenho dos corredores nas diferentes etapas da corrida. A <b>velocidade</b> afeta a capacidade de alcançar a linha de chegada mais rapidamente, a <b>manobrabilidade</b> influencia como o corredor lida com curvas, e o <b>poder</b> é usado em confrontos diretos entre os corredores.</p>

<h3>2. Seleção de Corredores</h3>
<p>O código inclui uma função para selecionar aleatoriamente dois corredores para a corrida. O processo garante que os dois corredores não sejam iguais, escolhendo um corredor inicial e depois selecionando um segundo corredor que é diferente do primeiro.</p>

<h3>3. Rolando o Dado</h3>
<p>Uma das mecânicas do jogo é o lançamento de um dado de seis lados para determinar o resultado de várias situações na corrida. A função para rolar o dado é usada para gerar números aleatórios que, combinados com os atributos dos corredores, determinam o resultado de cada bloco de pista.</p>

<h3>4. Resultado do Bloco de Pista</h3>
<p>Durante a corrida, a função de resultado do bloco de pista determina o efeito de cada bloco sorteado. Existem três tipos de blocos: <b>RETA</b>, <b>CURVA</b> e <b>CONFRONTO</b>. A RETA é uma competição direta baseada na velocidade, a CURVA exige uma verificação de manobrabilidade e o CONFRONTO é uma batalha baseada no poder dos corredores. Os resultados determinam se um jogador ganha ou perde pontos.</p>

<h3>5. Processando a Corrida</h3>
<p>A função principal da corrida gerencia o fluxo do jogo ao longo de cinco rodadas. Ela seleciona aleatoriamente um bloco de pista a cada rodada, aplica os efeitos do bloco e atualiza os pontos dos corredores. No final das cinco rodadas, a função determina o vencedor com base no total de pontos acumulados.</p>

<h3>6. Função Principal</h3>
<p>A função principal do código coordena a execução do jogo. Ela seleciona os corredores, inicia a corrida e, ao final, verifica quem acumulou mais pontos para determinar o vencedor. Caso os pontos sejam iguais, a corrida termina em empate.</p>

<h2>🕹️ Regras & Mecânicas</h2>
<ul>
    <li><b>Jogadores:</b> O jogo começa com dois personagens selecionados aleatoriamente.</li>
    <li><b>Pistas:</b> A corrida acontece em uma pista de cinco rodadas. A cada rodada, um bloco é sorteado, podendo ser uma RETA, CURVA ou CONFRONTO, e o resultado do bloco determina a pontuação dos jogadores.</li>
    <li><b>Condição de Vitória:</b> O jogador com mais pontos ao final das cinco rodadas vence a corrida.</li>
</ul>

<h2>Execução do Código</h2>
<p>Para executar o jogo, você precisa rodar o script. O jogo selecionará dois corredores, conduzirá a corrida e exibirá os resultados finais, indicando o vencedor ou um empate.</p>

<h2>Conclusão</h2>
<p>Este projeto é uma prática de programação que combina conceitos de lógica de jogos com JavaScript. Ele serve como uma introdução a práticas comuns no desenvolvimento de jogos, como a criação de estados de jogo, a implementação de regras e a utilização de funções assíncronas.</p>

<h2>Créditos</h2>
<p>Este projeto foi um desafio do <b>Curso de NodeJS da DIO</b> com o <b>Professor Felipe Bittencourt</b>. O código base para este desafio foi adaptado a partir do repositório original disponível em: <a href="https://github.com/FelipeBittencourt/mario-kart.js" target="_blank">FelipeBittencourt/mario-kart.js</a></p>
<p>Agradecemos ao repositório original por fornecer a base para este desafio de programação!</p>
