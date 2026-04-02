

/**
 * Tuplas
 * 
 * Una Tupla es un array con una longitud fija, permitiendo definir el o los posibles tipos de los elementos.
 * 
 */

type RGB = [number|string, number|string, number|string]

const rgb: RGB = [255, 0, 0]
const blue: RGB = [0, 0, "255"]
const red: RGB = ["255", "0", "0"]

console.log(rgb)
console.log(blue)
console.log(red)
