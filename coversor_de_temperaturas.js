//* Conversor de temperaturas

//Importamos readline para poder leer lo que el usuario escriba en la consola

const readLine = require('readline');

//Creamos la conexión con la consola
const entrada = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* Función que convierte Celsius a Fahrenheit
   fórmula: Fahrenheit = (Celsius x 9/5) + 32*/
function celsiusAFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

/* Función que convierte Fahrenheit a Celsius
   fórmula: Celsius = (Fahrenheit - 32) x 5/9
*/
function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
// Mostrar el menú
function menu() {

    console.log("\nCONVERSOR DE TEMPERATURAS\n");
    console.log("1. Celsius a Fahrenheit\n");
    console.log("2. Fahrenheit a Celsius\n");
    console.log("3. SALIR\n");

    entrada.question("Escoge una opción: ", function(opcion) {

        /* SWITCH revisa qué opción escogió el usuario */
        switch (opcion) {

            case '1':

                entrada.question("Ingresa la temperatura en Celsius: ", function(celsius) {

                    celsius = Number(celsius);

                    let resultado = celsiusAFahrenheit(celsius);

                    console.log(
                        celsius + " Celsius = " + resultado + " Fahrenheit."
                    );

                    menu();
                });

                break;


            case '2':

                entrada.question("Ingresa la temperatura en Fahrenheit: ", function(fahrenheit) {

                    fahrenheit = Number(fahrenheit);

                    let resultado = fahrenheitACelsius(fahrenheit);

                    console.log(
                        fahrenheit + " Fahrenheit = " + resultado + " Celsius."
                    );

                    menu();
                });

                break;


            case '3':

                console.log("\nPrograma finalizado.");

                entrada.close();

                break;


            default:

                console.log("\nOpción no válida");

                menu();

                break;
        }
    });
}


// Iniciar el programa
menu();