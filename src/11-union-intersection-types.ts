
type HeroBasicInfo = {
    name: string
    age: number
}

type HeroProperties = {
    // readonly: Indica que la propiedad no se puede modificar
    readonly id: number
    isActive: boolean
    powerScale?: "local" | "planetary" | "galactic"
}

// Union: Puede ser de tipo HeroBasicInfo o HeroProperties, o ambos
type HeroUnion = HeroBasicInfo | HeroProperties;

const heroUnion: HeroUnion = {
    name: "Iron Man",
    age: 90,
}
console.log(heroUnion);



// Intersection: Debe cumplir con ser de ambos tipos a la vez, es decir, tener todas las propiedades requeridas de ambos types
type HeroIntersection = HeroBasicInfo & HeroProperties;

const heroIntersection: HeroIntersection = {
    name: "Hulk",
    age: 90,
    id: 1,
    isActive: true,
    powerScale: "planetary",
}
console.log(heroIntersection);
