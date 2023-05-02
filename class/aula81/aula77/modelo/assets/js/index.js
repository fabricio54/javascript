class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        console.log(camposValidos, senhasValidas);

        // se todas as validações foram feitas ele da um alert e envia o formulário
        if(camposValidos && senhasValidas) {
            alert('Formulário enviado.');
            this.formulario.submit();
        }
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisar ser iguais.');
            valid = false;
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha, 'Senha precisa estar entre 6 a 12 caracteres');
            valid = false;
        }

        return valid;
    }

    camposSaoValidos() {
        let valid = true;

        // método que remove todos os erros para não ocorrer repetição de erros
        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            // pegando o irmão anterior ao elemento campo no for
            const label = campo.previousElementSibling.innerText;
            // erro para campos em branco
            if(!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid; 
    }

    validaCPF(campo) {
        let valid = true;
        const cpf = new Cpf(campo.value);

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            valid = false;
        }
        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;
        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.')
            valid = false;
        }
        // utizando um pouco do conceito de expressões regulares. essa expressão verifica se o usuário tem letras minuscular, números e maísculas.
        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou e números.');
            valid = false;
        }
        return valid;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        // cria uma classe no elemento div
        div.classList.add('error-text');
        // inseri um elemento ao elemento campo com os parâmetros depois no final e o elemento a insirir
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();