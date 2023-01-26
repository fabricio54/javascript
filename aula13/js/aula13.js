let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/*let aux = varA;

varA = varB;
varB = varC;
varC = aux;

console.log(`os valores de varA, varB e varC respectivamente são ${varA}, ${varB} e ${varC}`);*/

// outra maneira de se fazer esse exercicio

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);

