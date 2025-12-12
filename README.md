# 🧘 Temporizador Zen Personalizable

## 📝 Descripción del Proyecto

El **Temporizador Zen** es una aplicación web enfocada en la usabilidad y la concentración. Permite a los usuarios establecer una cuenta regresiva personalizada (desde 1 hasta 60 segundos) mediante una interfaz limpia y minimalista, diseñada para reducir la fatiga visual y las distracciones.

La aplicación destaca por su robusta validación de entrada y su feedback visual sutil.

### 🎯 Características Principales

* **Tiempo Personalizable:** El usuario selecciona el tiempo de cuenta regresiva (1 a 60 segundos).
* **Validación de Datos:** Restricción estricta de 1-60 segundos manejada por JavaScript.
* **Diseño "Foco Zen":** Estilo minimalista, tipografía prominente y bajo contraste.
* **Controles Dinámicos:** Los botones se habilitan y deshabilitan automáticamente para guiar al usuario.
* **Alerta Visual:** El color del número cambia sutilmente cuando la cuenta regresiva está en los últimos 5 segundos.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Rol en el Proyecto |
| :--- | :--- |
| **HTML5** | Estructura base de la interfaz (Input, Display, Botones). |
| **CSS3** | Estilizado bajo el concepto "Foco Zen" y manejo de la clase de alerta `.low-time`. |
| **JavaScript (ES6+)** | Lógica de tiempo (`setInterval`), control de estado, validación de inputs y manipulación del DOM. |
| **Node.js / Express** | (Opcional) Servidor local utilizado para servir los archivos estáticos durante el desarrollo. |

---

## 🚀 Instalación y Ejecución Local

Para poner en marcha el temporizador en tu máquina local:

### Requisitos

* Un navegador web moderno (Chrome, Firefox, Edge, etc.).
* Opcional: Node.js (para ejecutar el servidor Express).

### Pasos

1.  Clona el repositorio o descarga los archivos.
2.  Abre la terminal en la carpeta del proyecto.
3.  **Para Ejecución Simple (Recomendada):** Abre el archivo `index.html` directamente en tu navegador.
4.  **Para Ejecución con Servidor (Usando Node.js):**
    ```bash
    npm install express
    node server.js
    ```
    Luego, navega a `http://localhost:3000`.

---

## 💡 Funcionamiento y Lógica (Clave para la Defensa)

La lógica del temporizador se basa en un control estricto de los eventos y el estado, centrado en el archivo `index.js`.

### 1. Sistema de Validación (`initializeTime`)

* **Función:** Lee el valor del `<input>` y usa la función `parseInt()` para convertirlo a número.
* **Restricción:** Implementa una condición `if / else if` que garantiza que el tiempo siempre esté dentro del rango **[1, 60]**. Si el usuario intenta ingresar un valor inválido, el código lo corrige automáticamente y actualiza el campo de entrada.
* **Sintaxis Clave:** El código utiliza la **Interpolación de Cadenas** (ej: \`0${seconds}\`) para asegurar el formato de dos dígitos ('05', '60').

### 2. El Motor de Tiempo (`timer`)

* **Activación:** Se lanza al hacer clic en **Iniciar** y usa una bandera (`isRunning`) para prevenir múltiples ejecuciones.
* **Control de Bucle:** Utiliza la función `setInterval(función, 1000)` para ejecutar la lógica de decremento **cada segundo**. El ID único retornado por esta función se guarda en la variable `countdown`. 
* **Finalización:** Al llegar a cero, se llama a `clearInterval(countdown)` para detener el bucle, desactivando la ejecución en milisegundos.

### 3. Interacción con el DOM

| Elemento | Acción de JS | Propósito |
| :--- | :--- | :--- |
| **Input de Segundos** | Se habilita/deshabilita con `.disabled = true/false`. | Impide que el usuario cambie el tiempo mientras la cuenta está activa. |
| **Display del Tiempo** | `display.textContent = ...` | Escribe el tiempo restante. |
| **Alerta Visual** | `display.classList.add('low-time')` | Añade la clase CSS de alerta en los últimos 5 segundos. |

---

## ✍️ Autor

**Leandra Yanes**

* [GitHub Profile](https://github.com/leandrayanesdeveloper)


---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
