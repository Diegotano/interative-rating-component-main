let valor = null;

function c1(){
    valor = 1;
}

function c2(){
    valor = 2;
}

function c3(){
    valor = 3;
}

function c4(){
    valor = 4;
}

function c5(){
    valor = 5;
}

function ifmos(){
    if (valor !== null) {
        let principal = document.getElementById("principal");
        principal.innerHTML = `<div>
        <div class="imagentele">
            <img src="images/illustration-thank-you.svg" alt="un celular pero diseñado con tarjeta y cosas">
        </div>
        <div class="puntaje">
            <p class="puntaje2">You selected ${valor} out of 5</p>
        </div>
        <div class="texto">
            <h1>Thank You!</h1>
            <p2>We appreciate you taking the time to give a rating.</p2>
            <p2>If you ever need more support, don't hesitate to</p2>
            <p2> get in touch!</p2>
        </div>
        </div>`;
    }
}