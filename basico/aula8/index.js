/* 
Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.925925925925924
*/
const nome = 'Luiz Otávio';
const sobreNome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.8;

let imc; // peso / (altura * altura)
let anoNascimento = 2023 - idade;

imc = peso / (altura * altura);

console.log(nome, sobreNome,'tem', idade,'anos, pesa',peso,'kg tem',altura,'e seu IMC é de',imc,'\n',nome,'nasceu em',anoNascimento);

// utilizando template strings. nesse caso utilizamos crase
console.log(`${nome} ${sobreNome} tem ${idade} anos pesa ${peso} kg tem ${altura} e seu IMC e de ${imc} \n ${nome} nasceu em ${anoNascimento}`);


