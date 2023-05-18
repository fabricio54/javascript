import GeraCPF from './modules/GeraCFP';
import './assets/css/style.css';
import ValidaCPF from './modules/ValidaCPF';

/* Minha solução
function criaResultado(div) {
    const stylePag = getComputedStyle(document.body);
    const background = stylePag.backgroundColor;
    div.style.textAlign = 'center';
    div.style.backgroundColor = background;
    div.style.color = 'white';
    return div;
}

document.addEventListener('click', (e) => {
    e.preventDefault();
    const el = e.target;
    
    if (el.classList.contains('button')) {
        const gerarCPF = new GeraCPF();
        const cpf = gerarCPF.geraNovoCpf();
        const validaCpf = new ValidaCPF(cpf);
        try {
            validaCpf.valida();
        } catch (error) {
            console.log(error);
        }
        let div = document.createElement('div');
        div.innerHTML = cpf;
        div = criaResultado(div);
        const resultado = document.querySelector('.container');
        resultado.appendChild(div);
    }
});
*/

// solução professor
(function() {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();