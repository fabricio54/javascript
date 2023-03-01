// Break e continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros){
    // Quando ele encontrar o número 2 ele vai pular para próxima iteração pulando o trecho de código abaixo
    if(numero === 2){
        continue;
    }

    console.log(numero);

    if(numero === 7){
        break;
    }

}