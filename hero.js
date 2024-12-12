const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nome;
let xp ;
let nivel;

rl.question("Digite seu nome: ", (inputName) => {
    rl.question("Digite seu nivel de XP: ", (inputXp) =>{
    nome = inputName; // Define o valor da variável com o input do usuário
    xp = parseInt (inputXp);
    


if(xp < 1000 ){
    nivel = "Ferro";
}
else if (xp >= 1000 && xp < 2000){
    nivel = "Bronze";
}
else if (xp >= 2000 && xp < 5000){
    nivel = "Prata";
}
else if (xp >= 5000 && xp < 7000){
    nivel = "Ouro";
}
else if(xp >= 7000 && xp<8000){
    nivel = "Platina";
}
else if(xp >= 8000 && xp <9000){
    nivel = "Ascendente";
}
else if(xp >= 9000 && xp <10000){
    nivel = "Imortal";
}
else if(xp >= 10000){
    nivel = "Radiante";
}
console.log(`Olá, ${nome}!, nivel ${xp}, Rank ${nivel}`);
rl.close(); // Encerra a interface
})});