console.log("Olá, mundo!");
// Classificador de Nível de Heroi.

let NomeDoHeroi = "Gandalf";
let Xp = "100000";
let Nivel = "Ascendente";
for (let i = 0; i < NomeDoHeroi.length; i++) {
    let Nome = heroi[i].nome;
    let Xp = heroi[i].xp;
    let Nivel = "Ascendente;" }
if (Xp >= 1000) {
    Nivel = "Ferro"
} else if (Xp >= 1001 && Xp <= 2000) {
    Nivel = "Bronze";
} else if (Xp >= 2001 && Xp <= 4000) {
    Nivel = "Prata";
} else if (Xp >= 4001 && Xp <= 6000) {
    Nivel = "Ouro";
} else if (Xp >= 6001 && Xp <= 7000) {
    Nivel = "Platina";
} else if (Xp >= 7001 && Xp <= 8000) {
    Nivel = "Diamante";
} else if (Xp >= 8001 && Xp <= 9000) {
    Nivel = "Ascendente";
} else if (Xp >= 9001 && Xp <= 10000) {
    Nivel = "Imortal";
} else if (Xp >= 10001 && Xp <= 20000) {
    Nivel = "Radiante"; 
} else if (Xp >= 20001 && Xp <= 30000) {
}
console.log("O heroi Gandalf está no nível 10000 de Xp, por tanto, seu nível é Ascendente");
