let contador=0;
const spanNumero = document.getElementById("numero");
const btnAumentar = document.getElementById("btn-aumentar");
const btnReset = document.getElementById("btn-reset");

btnAumentar.addEventListener("click",()=>{
    contador++;
    spanNumero.innerText=contador;
});

btnReset.addEventListener('click', () => {
    contador = 0;
    spanNumero.innerText = contador;
});

