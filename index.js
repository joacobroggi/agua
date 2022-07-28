/* elements */
let tomado = document.getElementById('tomado');
let litrosInput = document.getElementById("litros");
let form = document.getElementById("miForm");
let resetBtn = document.getElementById('reset');


const litrosGoal = 2800;


let litrosConsumidos = localStorage.getItem("litros-consumidos");


let litrosDisplay = localStorage.getItem("litros-consumidos");

tomado.innerHTML = litrosDisplay;
    


function agregarLitros() {
    let num = litrosInput.value;

    litrosConsumidos = parseInt(litrosConsumidos, 10) + parseInt(num, 10);

    

    localStorage.setItem("litros-consumidos", litrosConsumidos);

    litrosDisplay = localStorage.getItem("litros-consumidos");

    tomado.innerHTML = litrosDisplay;

    console.log(litrosConsumidos);
}

function check() {
    if (litrosGoal == litrosDisplay) {
        alert('completaste tu meta')
    } else {
        alert('te falta water')
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