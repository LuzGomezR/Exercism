
const checkbox1 = document.getElementById('caballeroEstaDespierto');
const checkbox2 = document.getElementById('arqueroEstaDespierto');
const checkbox3 = document.getElementById('prisioneroEstaDespierto');
const checkbox4 = document.getElementById('mascotaPresente');

const mostrarResultado = document.getElementById('tx-resultado');

function ataqueRapido() {
    if (checkbox1.checked) {
        mostrarResultado.textContent = 'NO PUEDE EJECUTAR UN ATAQUE RÁPIDO, EL CABALLERO ESTA DESPIERTO';
    } else {
        mostrarResultado.textContent = 'PUEDE EJECUTAR UN ATAQUE RÁPIDO';
    }
}

function espiar(){
    if (checkbox1.checked || checkbox2.checked || checkbox3.checked){
        mostrarResultado.textContent = 'PUEDE ESPIAR';
    } else {
        mostrarResultado.textContent = 'NO PUEDE ESPIAR, TODOS LOS PERSONAJES ESTAN DURMIENDO';
    }
}

function señalarPrisionero(){  
    if (!checkbox2.checked && checkbox3.checked){
        mostrarResultado.textContent = 'PUEDE SEÑALAR EL PRISIONERO';
    } else {
        mostrarResultado.textContent = 'NO PUEDE SEÑALAR EL PRISIONERO, EL ARQUERO ESTA DESPIERTO O EL PRISIONERO DURMIENDO';
    }
}

function liberarPrisionero(){
    if (!checkbox2.checked && checkbox4.checked){
        mostrarResultado.textContent = 'PUEDE LIBERAR EL PRISIONERO 🎉';
    } else if (!checkbox1.checked && !checkbox2.checked && checkbox3.checked){
        mostrarResultado.textContent = 'PUEDE LIBERAR EL PRISIONERO 🎉';
    } else {
        mostrarResultado.textContent = 'NO PUEDE LIBERAR EL PRISIONERO 😢';
    }
}



