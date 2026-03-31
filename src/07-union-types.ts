
// Optional Properties

// Template Literal Types
type HeroId = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = "local" | "planetary" | "galactic" | "universal" | "multiversal"

type HeroBasicInfo = {
    name: string
    age: number
}

type HeroProperties = {
    // readonly: Indica que la propiedad no se puede modificar
    readonly id?: HeroId
    isActive?: boolean
    powerScale?: HeroPowerScale
}

// Intersection Types: Hero será de tipo HeroProperties y HeroBasicInfo a la vez,
// es decir, tendrá todas las propiedades de ambos types
type Hero = HeroProperties & HeroBasicInfo

const ironMan: Hero = {
    name: "Iron Man",
    age: 85,
    isActive: false,
}

ironMan.powerScale = "local"
console.log(ironMan)

const createHero = (basicHero: HeroBasicInfo): Hero => {
    const { name, age } = basicHero
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true,
    }
}

const thor = createHero({ name: "Thor", age: 1500 })
console.log(thor.id?.toString()) // Optional Chaining
thor.powerScale = "galactic"
console.log(thor)

// thor.id = 23232 // Error: Cannot assign to 'id' because it is a read-only property.
