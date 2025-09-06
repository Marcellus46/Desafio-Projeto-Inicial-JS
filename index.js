// Classificador de Nível de Heroi.

let NomeDoHeroi = "Gandalf";
let Xp = 100000;
let Nivel = "";

if (Xp < 1000) {
    Nivel = "Ferro" 
} else if (Xp <= 2000) {
    Nivel = "Bronze"; 
} else if (Xp <= 4000) {
    Nivel = "Prata"; 
} else if (Xp <= 6000) {
    Nivel = "Ouro";
} else if (Xp <= 7000) {
    Nivel = "Platina";
} else if (Xp <= 8000) {
    Nivel = "Diamante";
} else if (Xp <= 9000) {
    Nivel = "Ascendente";
} else if (Xp <= 10000) {
    Nivel = "Imortal";
} else if (Xp <= 20000) {
    Nivel = "Radiante"; 
} else if (Xp <= 30000) {
} else {
    Nivel = "Lendário";
}
console.log(`O herói ${NomeDoHeroi} está no nível ${Xp} de XP, portanto, seu nível é ${Nível}.`);
console.log("O heroi Gandalf está no nível 10000 de XP, portanto, seu nível é Ascendente.");
