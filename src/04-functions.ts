
/**
 * Recibir funciones como parametros con tipado
 * 
 * Cuando usas void para tipar el retorno de un callback, TypeScript lo interpreta como:
 *  "No me importa lo que retorne esta función, simplemente voy a ignorar el valor de retorno."
 */
const sayHiFromFunction = (fn: (name: string) => void) => {
    console.log(fn('Tommy'));
}

sayHiFromFunction((name: string) => {
    return `Hello ${name}`;
});


// Tipo never: Indica que la funcion nunca va a devolver nada
function throwError(message: string): never {
    throw new Error(message);
}


/**
 * Al declarar explícitamente una función con tipo de retorno void, la función no puede devolver nada
 * (solo puede devolver undefined explicitamente)
 */
const message = (message: string): void => {
    console.log(message);
    return;
}

console.log(message('hello'));
