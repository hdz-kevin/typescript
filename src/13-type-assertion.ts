
// Type Assertion: Permite indicar al compilador que un valor es de un tipo específico

// TypeScript no sabe que es un elemento de tipo <img/>
// Se le tiene que decir explícitamente que trate el valor como HTMLImageElement

const image = document.getElementById("image") as HTMLImageElement | null;

if (image !== null) {
    const src = image.src;
}

// Dado que el type assertion no asegura que un valor sea del tipo que indicamos,
// es mas recomendable validar el tipo antes de hacer el type assertion

const canvas = document.getElementById('canvas');

// Esto es inferencia -> TypeScript deduce que dentro del if, canvas será un HTMLCanvasElement
if (canvas instanceof HTMLCanvasElement) {
    // En este punto, estamos seguros que el tipo es el esperado y nisiquiera se necesita usar el type assertion
    const ctx = canvas.getContext('2d');
}
