// ¡Bienvenido a TypeScript!
// Aquí tienes un ejemplo simple para probar qué pasa cuando hay errores de tipado.

// Definimos una función que recibe un número y un string
function saludar(nombre: string, edad: number) {
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);
}

// Llamada correcta:
saludar("Tommy", 25);

// Llamada con error de typado (descomenta la siguiente línea para ver el error en la terminal):
// saludar(25, "Tommy");

// Prueba a crear tus propias variables con tipos:
let mensaje: string = "Aprendiendo TypeScript";
// mensaje = 10; // Esto también daría un error
console.log(mensaje);
