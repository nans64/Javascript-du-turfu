let userValue = prompt('De quel nombre veut tu calculer la factorielle ?');

let result = 1;

for(let count = 1; count <= userValue; count++){
    result *= count;
}

console.log(result);