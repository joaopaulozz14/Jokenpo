const prompt = require("prompt-sync")();










let escolhaUsuario = [];
let escolha;
let numeroAleatorio;
let arrayAleatorio = [];
let qtdRodadas;
let contador = 1;
let vitoriaJogador = 0;
let vitoriaMaquina = 0;
let jogarNovamente;
let resp;

while(resp != 'nao'){

console.log('--------Jokenpô--------');
qtdRodadas = +prompt("Quantas rodadas você quer jogar?: ");

    
loopExterno: while(contador <= qtdRodadas){
    console.log(`-------${contador}ºRodada--------`);
    escolha = prompt('Pedra, papel e tesoura: ');
    
    while(escolha.toLowerCase() != 'pedra' &&  escolha.toLowerCase() != 'papel' && escolha.toLowerCase() != 'tesoura'){
        console.log("Opção inválida, digite novamente corretamente!");
        continue loopExterno;
    }   
        
        escolhaUsuario.push(escolha.toLowerCase());
        contador++

       /****************************************************************/
        /*******Atribuindo número aleatório as opções*************/
        numeroAleatorio = Math.floor(Math.random() * 3);

        if(numeroAleatorio == 0){
            numeroAleatorio = 'pedra'
        }else if(numeroAleatorio == 1){
            numeroAleatorio = 'papel';
        }else{
            numeroAleatorio = 'tesoura';
        }
        arrayAleatorio.push(numeroAleatorio.toLowerCase());
   
    console.log(`Máquina = ${numeroAleatorio}`);
}

console.log(escolhaUsuario, "Opção Usuário");
console.log(arrayAleatorio, "Opção PC");

for(let contador2 = 0; contador2 <= qtdRodadas; contador2++){
    if(escolhaUsuario[contador2] == 'pedra' && arrayAleatorio[contador2] == 'tesoura'){ 
        console.log(`Rodada ${contador2 + 1}: vencedor Pedra! vencedor: Jogador!`);
        vitoriaJogador = vitoriaJogador + 1;
    }else if(escolhaUsuario[contador2] == 'tesoura' && arrayAleatorio[contador2] == 'pedra'){
        console.log(`Rodada ${contador2 + 1}: vencedor Pedra! vencedor: Máquina!`);
        vitoriaMaquina = vitoriaMaquina + 1;
    }else if(escolhaUsuario[contador2] == 'tesoura' && arrayAleatorio[contador2] == 'tesoura'){
        console.log(`Rodada ${contador2 + 1}: EMPATE!!`);
    }

    if(escolhaUsuario[contador2] == 'papel' && arrayAleatorio[contador2] == 'pedra'){
        console.log(`Rodada ${contador2 + 1}: vencedor Papel! vencedor: Jogador!`);
        vitoriaJogador = vitoriaJogador + 1;
    }else if(escolhaUsuario[contador2] == 'pedra' && arrayAleatorio[contador2] == 'papel'){
        console.log(`Rodada ${contador2 + 1}: vencedor Papel! vencedor: Máquina!`);
        vitoriaMaquina = vitoriaMaquina + 1;
    }else if(escolhaUsuario[contador2] == 'pedra' && arrayAleatorio[contador2] == 'pedra'){
        console.log(`Rodada ${contador2 + 1}: EMPATE!!`);
    }

    if(escolhaUsuario[contador2] == 'tesoura' && arrayAleatorio[contador2] == 'papel'){
        console.log(`Rodada ${contador2 + 1}: vencedor Tesoura! vencedor: Jogador!`);
        vitoriaJogador = vitoriaJogador + 1;
    }else if(escolhaUsuario[contador2] == 'papel' && arrayAleatorio[contador2] == 'tesoura'){
        console.log(`Rodada ${contador2 + 1}: vencedor Tesoura! vencedor: Máquina!`);
        vitoriaMaquina = vitoriaMaquina + 1;
    }else if(escolhaUsuario[contador2] == 'papel' && arrayAleatorio[contador2] == 'papel'){
        console.log(`Rodada ${contador2 + 1}: EMPATE!!`);
    }
}
if(vitoriaJogador > vitoriaMaquina){
    console.log(`O jogador ganhou!! Ganhou ${vitoriaJogador} rodada(s), de um total de ${qtdRodadas} rodada(s)!`);
}else if(vitoriaJogador < vitoriaMaquina){
    console.log(`A máquina ganhou!! Ganhou ${vitoriaMaquina} rodadas(s), de um total de ${qtdRodadas} rodada(s)!`);
}else{
    console.log(`Deu empate!`);
}
jogarNovamente = prompt("Deseja jogar novamente? ");
resp = jogarNovamente.toLowerCase();

escolhaUsuario.splice(0);
escolha = 0;
numeroAleatorio = 0;
arrayAleatorio.splice(0);
qtdRodadas = 0;
contador = 1;
vitoriaJogador = 0;
vitoriaMaquina = 0;

}
