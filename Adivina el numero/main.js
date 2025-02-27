    const reset = document.getElementById("reset");
    const send = document.getElementById("send");
    const numbers = document.getElementById("numbers");
    let randomNum = document.getElementById("randomNum");
    const title = document.getElementById("title");
    let intentos = document.getElementById("contador");
    
    
    let guess = numbers.value;
    let contador = 0;
    let num = Math.floor(Math.random() * 100) + 1;
    let turnos = 7;
    
    title.innerText += " " + turnos;
    randomNum.innerText = num;
    intentos.innerText = contador;
    
    reset.style.display = "none";
    randomNum.style.display = "none";
    
    function enviar() {
        contador++;
        if (contador < turnos || contador === turnos) {
            intentos.innerText = contador;
            guess = numbers.value;
            if (guess == num) {
                win();
            } else if (guess > num) {
                title.innerText = "El numero es mas bajo";
            } else if (guess < num) {
                title.innerText = "El numero es mas alto";
            }
        } else {
            lost();
        }
    }
    
    function win() {
        title.innerText = "lo adivinaste";
        reset.style.display = "block";
        send.style.display = "none";
        numbers.style.display = "none";
    }
    
    function lost() {
        title.innerText = "Haz perdido tio";
        reset.style.display = "block";
        send.style.display = "none";
        numbers.value = 0;
        numbers.style.display = "none";
        contador = 0;
        num = Math.floor(Math.random() * 100) + 1;
        randomNum.innerText = num;
    }
    
    function reiniciar() {
        title.innerText = "Adivina el numero antes de llegar al intento " + turnos;
        reset.style.display = "none";
        send.style.display = "block";
        numbers.value = 0;
        intentos.innerText = contador;
        numbers.style.display = "block";
        num = Math.floor(Math.random() * 100) + 1;
        randomNum.innerText = num;
    }
    
    send.addEventListener("click", enviar);
    reset.addEventListener("click", reiniciar);