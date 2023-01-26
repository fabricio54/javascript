// Operadores Aritméticos +(Adição / Concatenação) -(Subtração) *(Multiplicação) /(Divisão) **(potenciação) %(Resto da divisão)

/* 
Ordem de precendência
()
**
* / %
+ -
*/
const num1 = 5;
const num2 = 2;
console.log(num1 + num2); // imprime o valor 15. apartir do momento que mudamos uma dessas variáveis para string o comportamento será diferente (concatenará os valores)

// elevando um número a outro
console.log(num1 ** num2); // nesse exemplo a seguir estamos elevando o primeiro número ao segundo

// calculando o resto da divisão
console.log(num1 % num2); // nesse caso especifico o calculo da divisão será feito e vai ser retornado o resto

// assim como na matemática os operadores aritméticos tem precendência no calculo
const num3 = 4;
console.log(num1 + num2 * num3); // nesse caso como na matemática a multiplicação vem primeiro a adição 

console.log((num1 + num2) * num3); // caso queiramos que a soma seja executada primeiro temos que envolver a expressão em parentesis também como na matemática

// como converter uma String que seja número e um valor do type number
const n1 = 5;
const n2 = parseInt('4'); // temos que ter certeza que a String é um número. para números inteiros (parseInt) flutuantes (float) ou se não quisermos distiguir so colocamos (Number)
console.log(n1 + n2);


