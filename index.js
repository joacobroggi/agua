/* elements */
let tomado = document.getElementById('tomado');
let litrosInput = document.getElementById("litros");
let form = document.getElementById("miForm");
let resetBtn = document.getElementById('reset');
let msj = document.getElementById('msj');
let success = document.getElementById('success')
let falta = document.querySelector('.necesidad')
const litrosGoal = 2800;
let h2n = document.querySelector('.h2-n')


let litrosConsumidos = localStorage.getItem("litros-consumidos");


let litrosDisplay = localStorage.getItem("litros-consumidos");

let necesidad = litrosGoal - litrosConsumidos;

falta.innerHTML = necesidad;

tomado.innerHTML = litrosDisplay;
    
window.onload = function() {
    check()
  };


function agregarLitros() {
    let num = litrosInput.value;

    litrosConsumidos = parseInt(litrosConsumidos, 10) + parseInt(num, 10);

    

    localStorage.setItem("litros-consumidos", litrosConsumidos);

    litrosDisplay = localStorage.getItem("litros-consumidos");

    tomado.innerHTML = litrosDisplay;
    necesidad = litrosGoal - litrosConsumidos;
    falta.innerHTML = necesidad;
    form.reset();
    console.log(litrosConsumidos);
}

function check() {
    if (litrosGoal <= litrosDisplay) {
       document.body.classList.add('si');
       falta.classList.add('no')
       h2n.classList.add('no')
       success.innerHTML = '✅'
    } else {
        msj .innerHTML = 'te falta water maestro'
    }
}

form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    agregarLitros();
    check();
});

resetBtn.addEventListener('click', function () {
    localStorage.setItem("litros-consumidos", 0);

    window.location.reload();
})


console.log(localStorage.getItem("litros-consumidos"));