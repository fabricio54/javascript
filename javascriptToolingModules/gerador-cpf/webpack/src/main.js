import GeraCPF from './modules/GeraCFP';
import './assets/css/style.css';

document.addEventListener('click', (e) => {
    const el = e.target;
    console.log('chegui aqui')
    
    if (el.classList.contains('button')) {
        const gerarCPF = new GeraCPF();
        const cpf = gerarCPF.geraNovoCpf();
        const div = document.createElement('div');
        div.innerHTML = cpf;
    }
});
