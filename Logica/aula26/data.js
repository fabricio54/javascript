// trabalhando com o objeto date
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

//const data = new Date(); // função construtora sem parâmetros

//const data = new Date(2019, 3, 20, 15, 14, 27); // podem ser feita com parâmetros. so números e estando na sequência (ano, mês , dia, hora, minuto, segundo (ainda pode ser manadado milésimos de segundos))

/* const data = new Date('2019-04-20 20:20:59'); // podemos inicializar no formato toString

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(Date.now()); // retorna os milésimos de segundos do marco 0 ate o momomento

console.log(data.toString()); */

// função que coloca um zero a esquerda caso precise
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

// retorna dia, mes, ano, hora, minuto, segundo
function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
console.log(formataData(data));