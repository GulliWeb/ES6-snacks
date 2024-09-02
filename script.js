// Partendo da un array di stringhe, creo un secondo formattando le stringhe del primo in minuscolo e l'iniziale maiuscola

// Creo il primo array
let names = ['andrea', 'GIULIA', 'Ludovica'] 

// Creo il secondo array
let LowerNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())

console.log(LowerNames)

let UpperNames = names.map(name => name.charAt(0).toLowerCase() + name.slice(1).toUpperCase())
console.log(UpperNames)

