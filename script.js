document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (this.textContent === '=') {
                // Realizar cálculos
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else if (this.textContent === 'C') {
                // Borrar el contenido
                display.value = '';
            } else {
                // Agregar números y operadores al display
                display.value += this.textContent;
            }
        });
    });
});
