// SNACK 5 
//Partendo da un array di stringhe, creo un secondo formattando le stringhe del primo in minuscolo e l'iniziale maiuscola

// Creo il primo array
let names = ['andrea', 'GIULIA', 'Ludovica'] 

// Creo il secondo array
let LowerNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())

console.log(LowerNames)

let UpperNames = names.map(name => name.charAt(0).toLowerCase() + name.slice(1).toUpperCase())
console.log(UpperNames)

// SNACK 6
// Creare un array di oggetti che rappresenta degli animali. Ognuno di esso ha un nome, famiglia ed una classe. Creare ora un nuovo array con la lista dei MAMMIFERI

// Creo array di OGGETTI 
const animals = [
    {name: 'leone', family: 'feilidi', classes: 'mammiferi'},
    {name: 'squalo', family: 'cartilagineo', classes: 'Chondrichthyes'},
    {name: 'gallina', family: 'feilidi', classes: 'mammiferi'}
]
console.table(animals)

// Creo l'array con solo i mammifer
const mammiferi = animals.filter(animal => animal.classes == 'mammiferi') 

console.table(mammiferi)

