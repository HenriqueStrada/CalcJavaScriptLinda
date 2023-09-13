var screen = document.querySelector("#screen");

document.querySelector("#limpar").addEventListener("click", function (){
    screen.value = "";
});

document.querySelector("#deletar").addEventListener("click", function (){
    screen.value = screen.value.substring(0,(screen.value.length -1));
});