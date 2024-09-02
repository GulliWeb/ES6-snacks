// SNACK 1
//Partendo da un array di stringhe, creo un secondo formattando le stringhe del primo in minuscolo e l'iniziale maiuscola

// Creo il primo array
let names = ['andrea', 'GIULIA', 'Ludovica'] 

// Creo il secondo array
let LowerNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())

console.log(LowerNames)

let UpperNames = names.map(name => name.charAt(0).toLowerCase() + name.slice(1).toUpperCase())
console.log(UpperNames)

// SNACK 2
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

// SNACK 3
// Creo un array di oggetti che rappresenta delle persone. Ognuna ha un nome, cognome e età. Creare quindi un nuovo array inserendo per ogni persona, una frase con il nome e cognome  el'indicazione se può guidare in base all'età

// Creo l'array di oggetti 
const people = [
    {name: 'Andrea', lastName: 'Gulli', age: 20},
    {name: 'Giulia', lastName: 'Rossi', age: 26},
    {name: 'Ludovica', lastName: 'Serafini', age: 17}
]

people.map(person =>{
    person.age >= 18 ? console.log(`${person.name} ${person.lastName} avendo ${person.age} anni ed essendo MAGGIORENNE può guidare!`) : console.log(`${person.name} ${person.lastName} avendo ${person.age} anni ed essendo MINORENNE non può guidare!`)
})




