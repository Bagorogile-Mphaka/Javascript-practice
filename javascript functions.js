"use strict"

let scoreKoalas= 65+54+49;
console.log(scoreKoalas);


let scoreDolphins= 44+23+71;
console.log(scoreDolphins);

function calcAverageKoalas(score){return score/3};
calcAverageKoalas(168);
const averageKoalas= calcAverageKoalas(168);
console.log(averageKoalas);

function calcAverageDolphins(score){return score/3};
calcAverageDolphins(138);
const averageDolphins= calcAverageDolphins(138);
console.log(averageDolphins);

function checkWinner(averageKoalas,averageDolphins){
    if (averageKoalas > averageDolphins) 
    {console.log(`Koalas win ${averageKoalas} points, vs ${averageDolphins} points`)} 
    else {console.log(`Dolphins win ${averageDolphins} points, vs ${averageKoalas}points`)};
 }
 checkWinner (56,46);
 const winner= checkWinner(56,46);
 console.log(winner);

