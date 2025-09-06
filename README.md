# Documentação em Markdown

# Classificador de Nível de Herói
Este projeto contém um script em JavaScript que classifica o nível de um herói de acordo com sua experiência (XP).

## Como funciona
O código verifica o valor de XP do herói e atribui um nível conforme a tabela abaixo:

- Menos de 1000: **Ferro**
- 1000 a 2000: **Bronze**
- 2001 a 4000: **Prata**
- 4001 a 6000: **Ouro**
- 6001 a 7000: **Platina**
- 7001 a 8000: **Diamante**
- 8001 a 9000: **Ascendente**
- 9001 a 10000: **Imortal**
- 10001 a 20000: **Radiante**
- Acima de 20000: **Lendário**

## Código
```javascript

// Classificador de Nível de Heroi

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
console.log("O heroi Gandalf está no nível 10000 de XP, portanto, seu nível é Ascendente.");
console.log(`O herói ${NomeDoHeroi} está no nível ${Xp} de XP, portanto, seu nível é ${Nível}.`);
```

## Como executar

1. Salve o código acima em um arquivo chamado `index.js`.
2. Abra o terminal no VS Code.
3. Execute o comando:

   ```
   node index.js
   ```

## Saída esperada

```
O herói Gandalf está no nível 100000 de XP, portanto, seu nível é Ascendente.
```
