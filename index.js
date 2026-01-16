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

<<<<<<< HEAD
boton.addEventListener('click', iniciarCarrera);
=======
// Función para actualizar el display
function updateDisplay() {
    // Formatea el número a dos dígitos (ej: 09)
    const displayValue = seconds < 10 ? `0${seconds}` : seconds;
    display.textContent = displayValue;

    // Aplica el estilo de "low-time" (rojo sutil) cuando quedan 5 segundos o menos
    if (seconds <= 6 && seconds > 0) {
        display.classList.add('low-time');
    } else {
        display.classList.remove('low-time');
    }
}

// Función principal del temporizador
function timer() {
    // Evita iniciar múltiples intervalos si ya está corriendo
    if (isRunning) return; 

    isRunning = true;
    startButton.disabled = true;
    pauseButton.disabled = false;
    
    // Inicia el contador: se ejecuta cada 1000ms (1 segundo)
    countdown = setInterval(() => {
        seconds-= 2; // ¡DECREMENTA!
        updateDisplay();

        // Lógica de finalización: detiene el temporizador cuando llega a 0
        if (seconds < 1) {
            clearInterval(countdown);
            isRunning = false;
            pauseButton.disabled = true;
            startButton.disabled = true;
            display.textContent = '00'; // Muestra 00 al finalizar
            display.classList.remove('low-time');
        }
    }, 2000); 
}

// Función para pausar
function pause() {
    clearInterval(countdown); // Detiene el intervalo
    isRunning = false;
    startButton.disabled = false; // Permite reanudar
    pauseButton.disabled = true;
}

// Función para reiniciar
function reset() {
    pause(); // Asegura que se detenga cualquier intervalo activo
    seconds = 60; // Vuelve a establecer el valor inicial
    updateDisplay();
    startButton.disabled = false;
    pauseButton.disabled = true;
}

// Asignar funciones a los botones
startButton.addEventListener('click', timer);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);
secondsInput.addEventListener('input', initializeTime);

// Inicializar el display al cargar la página 
initializeTime();
>>>>>>> 60b14929f90efee87b7fece72e3dd6df3082fd5b
