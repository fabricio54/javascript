// segunda parte sobre erros no javascript

try {
    // executa quando não há erros
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch (e) {
    // executa quando há erros
    console.log('Tratando o erro');
} finally {
    // sempre será executado
    console.log('FINNALLY: Eu sempre sou executado');
}

function retornaHora(data) {
    // verifica se a instância do objeto Date foi mandada e se foi passado algo
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    }
    
    // verifica se o parâmetro foi mandado por que se não criamos uma instância de Date
    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
// tratar erro
// console.log(e);
} finally {
    console.log('Tenha um bom dia.')
}