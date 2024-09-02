// Partendo da un array di stringhe, creo un secondo formattando le stringhe del primo in minuscolo e l'iniziale maiuscola

// Creo il primo array
let names = ['andrea', 'GIULIA', 'Ludovica'] 

// Creo il secondo array
let LowerNames = names.map(name => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
})

console.log(LowerNames)
e
