let countdown;
let seconds = 60; // Inicia la cuenta en 60
let isRunning = false;

// Obtener los elementos del DOM 
const secondsInput = document.getElementById('secondsInput');
const display = document.getElementById('seconds-counter');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

// Función que lee el valor del input y lo establece como el tiempo inicial
function initializeTime() {
    // 1. Convertimos el valor del input a un número entero
    let inputValue = parseInt(secondsInput.value);

    // 2. Aplicamos la regla: máximo 60 y mínimo 1
    if (inputValue > 60) {
        inputValue = 60;
        secondsInput.value = 60; // Actualiza el input si el valor era demasiado alto
    } else if (inputValue < 1 || isNaN(inputValue)) {
        inputValue = 1;
        secondsInput.value = 1; // Actualiza el input si el valor era demasiado bajo/inválido
    }
    
    // 3. Establece el valor inicial de la cuenta regresiva
    seconds = inputValue;
    updateDisplay();
}

// Función para actualizar el display
function updateDisplay() {
    // Formatea el número a dos dígitos (ej: 09)
    const displayValue = seconds < 10 ? `0${seconds}` : seconds;
    display.textContent = displayValue;

    // Aplica el estilo de "low-time" (rojo sutil) cuando quedan 5 segundos o menos
    if (seconds <= 5 && seconds > 0) {
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
        seconds--; // ¡DECREMENTA!
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
    }, 1000); 
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