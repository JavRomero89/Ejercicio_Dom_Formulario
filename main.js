
function Submit() {
    const form = document.getElementById('Form');
    const input = document.getElementById('name');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 
        const inputValue = input.value; // obtener el valor de entrada
        result.innerText = inputValue; // mostrar el valor en la etiqueta <p>
        
    });
}


document.addEventListener('DOMContentLoaded',Submit);

//////////////////////////////////////////////////////////////////////////

document.getElementById('myForm').addEventListener('submit', function(event) {
    const input = document.getElementById('datos');
    const error = document.getElementById('error');

    // Si el campo de entrada está vacío (incluso con espacios), muestra un mensaje de error y previene el envío del formulario
    if (input.value === "") {
        event.preventDefault();
        error.innerText = "Este campo es obligatorio";
    }
});

//////////////////////////////////////////////////////////////////////////

// document.getElementById('myForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // prevenir el envío del formulario
//     var input = document.getElementById('number');
//     var container = document.getElementById('resultsContainer');

//     // Limpiar el contenedor de resultados
//     container.innerHTML = "";

//     // Crear los botones
//     for (var i = 1; i <= input.value; i++) {
//         var button = document.createElement('button');
//         button.textContent = i;
        
//         // Establecer el color de fondo del botón
//         if (i % 10 === 0) {
//             button.style.backgroundColor = 'red'; // cambiar a cualquier color para números múltiplos de 10
//         } else if (i % 2 === 0) {
//             button.style.backgroundColor = 'blue'; // cambiar a cualquier color para números pares
//         } else {
//             button.style.backgroundColor = 'green'; // cambiar a cualquier color para números impares
//         }

//         // Agregar el botón al contenedor de resultados
//         container.appendChild(button);
//     }

//     // Limpiar el valor de entrada
//     input.value = "";
// });
