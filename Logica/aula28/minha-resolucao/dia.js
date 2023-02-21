function diaSemanaTexto (dia) {
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

function inseriData (date) {
    const form = document.querySelector('#date');
    form.innerHTML = `${diaSemanaTexto(date.getDay())}, ${date.getDate()} de ${mesTexto(date.getMonth())} de ${date.getFullYear()} ${inseriZero(date.getHours())}:${inseriZero(date.getMinutes())}`; 
}

const date = new Date();
inseriData(date);

