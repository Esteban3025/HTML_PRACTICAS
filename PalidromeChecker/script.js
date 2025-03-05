const result = document.getElementById("result");
const boton = document.getElementById("check-btn");
const title = document.getElementById("title");
const userInput = document.getElementById("text-input");

function stringClean(valor) {
  const regex = /[+\-_,.:()\s]/g;
  return valor.replace(regex, '').toLowerCase();
}

function alReves(valor) {
  return stringClean(valor).split("").reverse().join("").toLowerCase();
}

function palidrome() {
  const input = document.getElementById("text-input").value;
  result.innerText = "";

  if (stringClean(input) === "") {
    alert("Please input a value");
    return
  };
  
  if (stringClean(input) === alReves(input)) {
    result.innerText = input + " is a palindrome.";
  } else if (stringClean(input) !== alReves(input)) {
    result.innerText = input + " is not a palindrome.";
  }

  console.log(stringClean(input));
  console.log(alReves(input));
}

boton.addEventListener("click", palidrome);

userInput.addEventListener("keydown", e => {
  if (e.key === 'Enter') {  
    palidrome();
    userInput.value = '';
  }
});