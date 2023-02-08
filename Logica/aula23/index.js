/* Operadores Lógicos
&& -> AND -> E -> Todas as expressões devem ser verdadeiras
|| -> OR -> OU -> Basta que uma seja verdadeira para retorna verdadeiro
! -> NOT -> não -> Nega ou inverte uma expressão
*/

/* Valor literal e valores que são por padrão falsos no javascript

FALSY
*false (literal)
0
'' "" ``
null / undefined
NaN*/

console.log('Luiz' && 'Maria'); // ja que nenhum desses valores e considerados false. ele retorna o ultimo

console.log('Luiz' && '' && 'Maria'); // como a string vazia e considerada por padrão false. retorna a string vazia