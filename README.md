
# 🏎️ Temporizador 

Este es un proyecto de un temporizador de 60 segundos. El objetivo principal fue practicar la lógica de programación en JavaScript utilizando **Promesas**, **Intervalos** y **Condicionales básicas**.

## 🚀 Funcionalidades

* **Cuenta regresiva**: Inicia desde 60 segundos al presionar el botón.
* **Lógica de formato**: Uso de condicionales `if/else` para mostrar números con formato `00` (ej. "09" en lugar de "9").
* **Efectos visuales**: El carro vibra cuando faltan 5 segundos para arrancar.
* **Animación de salida**: Al llegar a cero, el carro sale disparado de la pista.
* **Interfaz adaptativa**: El botón se deshabilita durante la carrera para evitar errores.

## 🛠️ Tecnologías utilizadas

* **HTML5**: Estructura de la pista y controles.
* **CSS3**: Animaciones (`keyframes`), transiciones y diseño de la carretera.
* **JavaScript (ES6+)**:
* `setInterval` para el manejo del tiempo.
* `DOM Manipulation` para actualizar el contador y mover el auto.
* `if/else` para la lógica de visualización.



## 📋 Estructura de Código Clave

Para el formato de los números, se utilizó una estructura de control sencilla y fácil de leer:

```javascript
if (segundos < 10) {
    display.textContent = "0" + segundos;
} else {
    display.textContent = segundos;
}

```

## 📸 Vista Previa
<img width="1024" height="604" alt="image" src="https://github.com/user-attachments/assets/7a51d21a-3949-4c21-ab8f-6c99d5079c42" />

## ✒️ Autora

* **Leandra Yanes** 





1. **Título**: Puedes cambiarlo por algo más creativo si quieres.
2. **Vista Previa**: Si tienes una captura de pantalla de tu proyecto, guárdala en tu carpeta como `preview.png` y cambia el link en el README.
3. **Links**: No olvides poner tu nombre o un link a tu perfil en la sección de autora.

**¿Te gustaría que añada una sección de "Cómo instalar" para que otras personas puedan descargar y correr tu código en sus computadoras?**
