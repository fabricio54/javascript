// ? : operadores ternário

// utilizando os operadores ternários
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

// estruturas condicionais
//if (pontuacaoUsusario >= 1000) {
//    console.log('Usuario VIP');
//} else {
//    console.log('Usuário normal');
//}

const corUsuario = null; 
const corPadrao = corUsuario || 'Preta'; // padrão caso a constante em cima seja null
