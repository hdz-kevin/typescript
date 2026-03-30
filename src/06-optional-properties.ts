
// Optional Properties

type Hero = {
    name: string;
    age: number;
    isActive?: boolean;
}

const ironMan: Hero = {
    name: "Iron Man",
    age: 85,
    isActive: false,
}

console.log(ironMan);


const createHero = (name: string, age: number): Hero => {
    return {
        name,
        age,
        isActive: true,
    };
}

const thor = createHero("Thor", 1500);
console.log(thor);
