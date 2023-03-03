const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function rel() {
  let data = new Date('2023-03-02 00:00:00');

  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}

//function iniciarCronometro() {
//  // pegando o evento do clique em iniciar com
//  return iniciar.addEventListener(relogio.innerHTML = rel(), //1000);
//};

function pausarCronometro() {
  // pausando a contagem do relógio
  return pausar.inn
}

function zerarCronometro() {
  // zerando o cronômetro
}


iniciar.addEventListener(relogio.innerHTML = rel(), 1000);

//pausar.addEventListener('click', function(event) {
//  alert('Clique no pausar');
//});

//zerar.addEventListener('click', function(event) {
//  alert('Clique no pausar');
//})