let string = "O rato roeu a roupa do rei de roma";

// indice de uma string
console.log(string[3]); // retornará o caracter de indice 3 da string

// utilizando a função charAt
console.log(string.charAt(1)); // retorna o caracter do indice que passamos

// concatenar um string a outra
console.log(string.concat(" em roma.")); // função faz a junção da string com outra.

// procurando um indice onde começa uma letra ou palavra
console.log(string.indexOf("roma")); // ele retornara o indice de onde começa a palavra acima.

// observação: se colocarmos 'r' ele retornara o indice da primeira instância que ele encontrar
console.log(string.indexOf("r"));

// podemos procurar de traz para frente
console.log(string.lastIndexOf("r")); // a ultima instância desse caracter será retornado

// usando expressões regulares retorna a primeira letra em minúsculo com algumas especificações e informamos o limite de onde ele dever começar e chegar das letras.
console.log(string.match(/[a-z]/));

// retorna o array dos caracteres em minusculo
console.log(string.match(/[a-z]/g));

// retorna o indece da primeira letra do intervalo estabelecido
console.log(string.search(/[a-f]/));

// procurando a propria letra
console.log(string.search(/r/));

// usando a função replace para trocar o trecho informado
console.log(string.replace("roma", "Turim"));

// também podemos trabalhar com expressões lambdas
console.log(string.replace(/roma/, "Turim"));

// substituindo todas as instâncias. utilizando o g
console.log(string.replace(/r/g, "#"));

// como saber o tamanho da string
console.log(string.length);

// pegar uma parte específica da string utilizando slice informado o indice onde começa e onde termina
console.log(string.slice(2, 5));

// no slice podemos trabalhar com os números negativos também
console.log(string.slice(-20)); // aqui ele vai do 20 ate o final ja que não especificamos
console.log(string.slice(5));

// também podemos trabalhar com substrings mais demanda complexidade
console.log(string.substring(string.length - 5, string.length - 1));

// dividir a string em um array informando um caracter para dividir
console.log(string.split(" "));

// definindo o intervalo para dividir a string
console.log(string.split(" ", 4)); // pega so os quatro primeiros espaços

// retorna a string em maísculas
console.log(string.toUpperCase());

// retorn a string em minusculas
console.log(string.toLowerCase());

