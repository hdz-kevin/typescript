
// Type Alias: Permite crear un alias para un tipo de dato
// Indicando la forma que debe tener un objeto

type User = {
    name: string;
    email: string;
}

const user: User = {
    name: "Tommy",
    email: "tommy@tommy.com",
}

// Una funcion puede recibir o retornar un objeto de nuestro type
const createUser = (name: string, email: string): User => {
    return {
        name,
        email,
    };
}

const dani = createUser("Dani", "dani@dani.com");
console.log(dani);
