
// Arrays

const languages: string[] = [];
languages.push("TypeScript", "Python");
// languages.push(20);
console.log(languages);


const arr: (string | number | boolean | object)[] = [];
arr.push("Python", 20, true, {});

console.log(arr);


// Tipar arrays a partir de la clase Array<T>

const ages: Array<number | string> = [];

ages.push(20, 30, "old", 19, "young");
console.log(ages);


// Matrix

/**
 *** GameBoard ***
 [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "", "O"],
 ]
 */

const gameBoard: string[][] = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "", "O"],
];

console.log(gameBoard);
gameBoard[1][2] = "anything";
console.log(gameBoard);


/** Tipar las celdas de la matriz */
type CellValue = "X" | "O" | "";

const gameBoard2: CellValue[][] = [
    ["X", "O", "X", "O"],
    // La cantidad de columnas o celdas por fila no esta definida
    ["O", "X", "O", "", "X", "O"],
    ["X", "", "O"],
]

// gameBoard2[2][0] = "anything"; // Error: Evita que pueda insertar cualquier valor
console.log(gameBoard2)


/** Tipar GameBoard, definiendo la catidad de filas y columnas usando tuplas */
type Cell = "X" | "O" | "";
type GameBoard = [
    [Cell, Cell, Cell],
    [Cell, Cell, Cell],
    [Cell, Cell, Cell],
]

const gameBoard3: GameBoard = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "", "O"],
]

console.log(gameBoard3);
