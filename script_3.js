// Utilisateur rentre un nombre (par ex 5)
let userValue = prompt('Salut, bienvenue dans ma super pyramide ! Combien d étages veux-tu ?');

let spaceCount = userValue - 1;

for(let turn = 1; turn <= userValue; turn++){
    console.log(" ".repeat(spaceCount) + "#".repeat(turn));
    spaceCount -- ;
}