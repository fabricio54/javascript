// trabalhando como o xml (ajax). pode fazer requisição de qualquer tipo de dado

/*
const request = obj => { // criamos uma requisição que recebe um ojbjeto
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); // utilizamos uma constante que recebe um construtor de xmlhttprequest
        xhr.open(obj.method, obj.url, true); // utilizando o método open do xml passamos como parâmetros: método, url, e se e ou não assincrono 
        // caso o método utilizado fosse post mandarioamos os dados para o send
        xhr.send();

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            }else {
                reject(xhr.statusText);
            }
        })
        })
}
*/

/*
document.addEventListener('click', e => {
    const el = e.target; // pegando o elemento clicado
    const tag = el.tagName.toLowerCase();
    // pegando o nome da tag

    if(tag === 'a') {
        e.preventDefault(); // ao clicar no link eu quero q ele não va no link estou previnindo o evento
        carregaPagina(el);
    }
})
*/

/*
async function carregaPagina(el) {
    // criando uma constante para pegar o href
    const href = el.getAttribute('href');
    //console.log(href); // imprimindo o href

    // utilizando as promisses (then / catch) jeito mais antigo
    /*
    request({
        method: 'GET',
        url: href
    })
    .then(response => carregaResultado(response))
    .catch(error => {
        console.log(error);
    })
    */
     
    /*
    const ObjConfig =  ({
        method: 'GET', 
        url: href
    });

    // englobando num catch 
    try {
        const response = await request(ObjConfig);
        carregaResultado(response);
    }catch (error) {
        console.log(error);
    }
}
*/

// carregando aquela página a onde foi chamada a função utilizando xml (ajax) (para não ter que recarregar a página novamente)
/*
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
*/

const request = object => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(object.method, object.url, true)
        xhr.send()

        document.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            }else{
                reject(xhr.statusText)
            }
        })
    })
}

document.addEventListener('click', (e) => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(el)

}})

async function carregaPagina(elemento) {
    const href = elemento.getAttribute('href')

    const object = {
        method: 'GET',
        url: href
    }

    try {
        const resultado = await request(object)
        carregaResultado(resultado)
    } catch (error) {
        console.log(error)
    }
}

function carregaResultado(resultado) {
    const div = document.querySelector('.resultado')
    div.innerHTML = resultado
}