// Functions

// Los parametros no tipados son de tipo any por defecto, lo que abre a que se pueda pasar cualquier valor
// const greet = (name) => `Hello ${name}`

function greet2(name: string) {
    return `Hello ${name.toUpperCase()}`;
}

console.log(greet2("kavin"));
// console.log(greet2(3)); // Error


// Tipando propiedades de objetos (por defecto son any)
function greet3({ name, age }: { name: string, age: number }) {
    return `Hello ${name}, you are ${age} years old`;
}

// Otra forma de tipar un objeto, sin desestructurar
function greet4(person: { name: string, age: number }) {
    const { name, age } = person;
    return `Hello ${name}, you are ${age} years old`;
}

console.log(greet3({ name: "Kavin", age: 23 }));
console.log(greet4({ name: "Manolo", age: 20 }));


// Anotaciones de retorno

function greet5(person: { name: string, age: number }): string {
    const { name, age } = person;
    return `Hello ${name}, you are ${age} years old`;
}
