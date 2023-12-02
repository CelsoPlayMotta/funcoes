/*
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 
*/



let jogador ="Celso"
let Vitorias = SaldoPartidas(210,101)
let rank = "iniciante"


switch(true){

    case Vitorias <= 10:
        rank ="ferro"
        break
    case Vitorias >= 11 && Vitorias <= 20:
        rank ="Bronze"
        break
    case Vitorias >= 21 && Vitorias <= 50:
        rank ="Prata"
        break
    case Vitorias >= 51 && Vitorias <= 80:
        rank ="ouro"
        break
    case Vitorias >= 81 && Vitorias <= 90:
        rank ="Diamanmte"
        break
   case Vitorias >= 91 && Vitorias <= 100:
        rank ="Lendario"
        break
    case Vitorias >101:
        rank ="Imortal"
        break

}

console.log("o saldo de vitorias do jogador "+jogador," é "+ Vitorias ,"e esta no nivel de "+rank);


function SaldoPartidas(Victory,Defeat){
   let saldo =Victory-Defeat;
   return saldo;
}


