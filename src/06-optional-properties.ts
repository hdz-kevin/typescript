
// Optional Properties

// // Template Literal Types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// type Hero = {
//     // readonly: Indica que la propiedad no se puede modificar
//     readonly id?: HeroId;
//     name: string;
//     age: number;
//     isActive?: boolean;
// }

// const ironMan: Hero = {
//     name: "Iron Man",
//     age: 85,
//     isActive: false,
// }

// console.log(ironMan);


// const createHero = (name: string, age: number): Hero => {
//     return {
//         id: crypto.randomUUID(),
//         name,
//         age,
//         isActive: true,
//     };
// }

// const thor = createHero("Thor", 1500);
// console.log(thor.id?.toString()); // Optional Chaining

// // thor.id = 23232 // Error: Cannot assign to 'id' because it is a read-only property.
