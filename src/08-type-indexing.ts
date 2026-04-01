

// Type Indexing

type HeroProps = {
    isActive: boolean,
    address: {
        planet: string,
        city: string,
    }
}

const addressHero: HeroProps["address"] = {
    planet: "Earth",
    city: "New York"
}

const _thor: HeroProps = {
    isActive: true,
    address: addressHero,
}

console.log(_thor);


// Type from value

const address = {
    planet: "Earth",
    city: "New York"
}

type Address = typeof address

const myAddress: Address = {
    planet: "Mars",
    city: "CDMX",
}

console.log(myAddress);


// Type from function return

function createAddress() {
    return {
        planet: "Venus",
        city: "Venus City",
    }
}

type AddressFromFunction = ReturnType<typeof createAddress>

const addressFunc: AddressFromFunction = {
    planet: "Jupiter",
    city: "Jupiter City",
}

console.log(addressFunc);
