const boton = document.getElementById("sum");
const contador = document.getElementById("contador");
const reset = document.getElementById("reset");
const resta = document.getElementById("restar");
const error = document.querySelector(".error");
error.style.display = "none";

let contar = 0;

function sumar() {
    contar++;
    error.style.display = "none";
    resta.style.display = "block";
    contador.innerHTML = contar;
}

function restart() {
    contar = 0;
    contador.innerHTML = 0;
    sum.style.display = "block";
    resta.style.display = "block";
    error.style.display = "none";
}

function restar() {
    if (contar >= 1) {
    contar--;
    contador.innerHTML = contar; 
    } else {
    resta.style.display = "none";
    error.style.display = "block";
    sum.style.display = "block";
    }
}

sum.addEventListener("click", sumar);
reset.addEventListener("click", restart);
resta.addEventListener("click", restar);