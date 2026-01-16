const boton = document.getElementById('startButton');
const display = document.getElementById('display');
const contenedorCarro = document.getElementById('carro-contenedor');

async function iniciarCarrera() {
    let segundos = 60; 
    boton.disabled = true;
    
    // Reset 
    contenedorCarro.classList.remove('arrancar', 'vibrar');
    display.textContent = segundos;

    // Promesa del temporizador
    await new Promise((resolve) => {
        const contador = setInterval(() => {
            segundos--;

            if (segundos < 10) {
                display.textContent = "0" + segundos;
            } else {
                display.textContent = segundos;
            }

            // Si quedan 5 segundos, empieza a vibrar
            if (segundos <= 5 && segundos > 0) {
                contenedorCarro.classList.add('vibrar');
            }

            if (segundos <= 0) {
                clearInterval(contador);
                resolve();
            }
        }, 1000);
    });

    // ¡ARRANQUE!
    display.textContent = "¡GO!";
    contenedorCarro.classList.remove('vibrar');
    contenedorCarro.classList.add('arrancar');

    // Resetear botón tras el despegue
    setTimeout(() => {
        boton.disabled = false;
    }, 3000);
}

boton.addEventListener('click', iniciarCarrera);