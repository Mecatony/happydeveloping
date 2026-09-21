// Importamos readline porque Node.js no tiene prompt()
// y necesitamos pedirle un dato al usuario.
const readLine = require("readline");

//Creamos una conexion con la consola
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
  });

// Esta funcion recibe un numero y comprueba si es primo, devuelve true o false
function esPrimo (numero) {

  // Un numero menor o igual a 1 NO es primo
  if (numero <= 1) {
    return false;
  }

  //Empezamos a probar divisores desde el numero 2 hasta numero -1
  //Usamos for porque necesitamos repetir la comprobacion
  for (let i=2; i < numero; i++) {

    // % obtiene el sobrante de la division
    // Si es 0, la division es exacta y encontramos un divisor
    if (numero % i === 0) {
      return false;
    }
  }

  // No encontramos ningun divisor, entonces si es primo
  return true;
}

// Funcion para pedir numeros continuamente
function preguntar () {

//Pedimos al usuario que escriba un numero.
rl.question("Escribe un numero: (o 'salir' para continuar): ", function(respuesta) {

  //Si escribe "salir", terminamos el programa
  if(respuesta.toLowerCase() === "salir"){
    console.log("Programa terminado: ");
    rl.close();
    return;
  }

  //Lo escrito llega como texto, por eso lo convertimos a numero
  const numero =  Number(respuesta);

  //Llamamos a esPrimo () para saber si es primo
  if (esPrimo(numero)) {

    //Si devuelve true, mostramos que es primo.
    console.log("El numero " + numero + " es primo");
  } else {

    //Si devuelve false, mostramos que no es primo
    console.log("El numero " + numero + " no es primo");
  }

  //terminamos la lectura de la consola
  preguntar();
});
}

//Empezamos el programa
preguntar();