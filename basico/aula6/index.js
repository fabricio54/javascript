/* variáveis em javascript */
let nome = 'joão'; // para criar variáveis mais atualmente. obs: utilizaremos esse primeira opção
var nome2 = 'joão'; // criação de variáveis antigamente

/* imprimindo a variável */
console.log(nome,'nasceu em ...');

/* podemos declarar um variável sem acrescentar um valor */
let nome3; // declarando a variável
console.log(nome3); // variável sem valor 'undefined'
nome3 = 'qualquer coisa'; // Inicializando a variável

// Não podemos criar variáveis com palavras reservadas da linguagem
/* let if (ERRADO), let let (ERRADO) */
// as variáveis precisam ter nomes significativos ou seja ter siginificado de acordo com o contexto que você está progamando
// Não podemos criar uma variável com números
/* let 1fabricio = 'f'; (ERRADO) */
// as variáveis não podem conter espaços ou traços. Observação em nomes compostos utilizamos o conceito de camelcase (sempre onde temos uma palavra composta colocamos letra maíscula para identificar)
let nomeCompleto = 'Raisa';
console.log(nomeCompleto); 
// a linguagem e case-sensitive ou seja letras maiusculas diferem de minusculas
/* let nomeCliente = '...' and let nomecliente = '...' para o javascript são variáveis diferentes */
// Não utilizar var, utilizar let.




