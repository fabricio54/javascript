/*function diaSemanaTexto (dia) {
    switch (dia) {
        case 0:
            return 'domingo';
        case 1:
            return 'segunda-feira';
        case 2:
            return 'terça-feira';
        case 3:
            return 'quarta-feira';
        case 4:
            return 'quinta-feira';
        case 5:
            return 'sexta-feira';
        case 6:
            return 'sábado';
    }
}

function mesTexto(num) {
    switch (num) {
        case 0:
            return 'janeiro';
        case 1:
            return 'fevereiro';
        case 2:
            return 'março';
        case 3:
            return 'abril';
        case 4:
            return 'maio';
        case 5:
            return 'junho';
        case 6:
            return 'julho';
        case 7:
            return 'agosto';
        case 8:
            return 'setembro';
        case 9:
            return 'outubro';
        case 10:
            return 'novembro';
        case 11:
            return 'dezembro';
        default:
            return '';
    }
}

function inseriZero(num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const nomeDia = diaSemanaTexto(data.getDay());
    const nomeMes = mesTexto(data.getMonth());

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${inseriZero(data.getHours())}:${inseriZero(data.getMinutes())}`;
}

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = criaData(data);
*/

// opção mais avançada

const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short' });
