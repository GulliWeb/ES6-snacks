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

people.map(person => person.age >= 18 ? console.log(`${person.name} ${person.lastName} avendo ${person.age} anni ed essendo MAGGIORENNE può guidare!`) : console.log(`${person.name} ${person.lastName} avendo ${person.age} anni ed essendo MINORENNE non può guidare!`))

// SNACK BONUS (4)
// Creo un array di oggetti che rappresentano libri. Ogni libro avrà proprietà titolo, autore e pagine. creare un nuovo array contenente solo i libri che hanno più di 300 pagine. Creare poi un array di stringhe che descrivono ogni libro nel formato "Il libro [titolo] è stato scritto da [autore]. trova poi il libro con il maggiore numero di pagine utilizzando reduce."

// Creo l'array di oggetti 
const boooks = [
    { title: 'I segreti del reame', author: 'James kollins', pages: 181 },
    { title: 'Athomics habits', author: 'Peter robbins', pages: 241 },
    { title: 'I segreti del pensiero', author: 'Arthut Fizz', pages: 91 }, 
    { title: 'La telenovela di pablito', author: 'Pablito jr', pages: 431 },
    { title: 'universo nel vuoto', author: 'Michel collins', pages: 982 },
    { title: 'Come funziona un automobile?', author: 'James kollins', pages: 121 },
    { title: 'Cristiano Ronaldo, la biografia', author: 'Jorge mendes', pages: 321 },
    { title: 'Gli animali come compagni di vita', author: 'Martina Smithz', pages: 411 }, 
    { title: 'The bible', author: 'Gli Apostoli', pages: 1600 } 
]

// Creo l'array di oggetti contente solo quelli con 300 + pagine.
const books300Pages = boooks.filter(book => book.pages > 300);
console.log(books300Pages)

// SNACK BONUS (5)
// Creo un array di oggetti che rappresentano studenti. Ogni studente avrà proprietà come nome, cognome e voti(Array di numeri). Usare .map() per creare un nuovo array che contiene solo i nomi completi degli studenti, nome e cognome. Usare .filter() per creare un array di studenti che hanno una media di voti superiore a 7. Usare la destrutturazione per estrarre nome, cognome e media voti di ogni studente in un nuovo array di oggetti.

// Creo l'array di oggetti che rappresentano STUDENTI
const students = [
    { name: 'Andrea', lastName: 'Gulli', votes: [7, 6.5, 8, 9, 10] },  
    { name: 'Dennis', lastName: 'Ferrante', votes: [6, 5.5, 3, 6, 6] },  
    { name: 'Francesca', lastName: 'Lenta', votes: [9, 8.5, 9, 9.5, 10] },
    { name: 'Francesco', lastName: 'Rossotti', votes: [8, 7.5, 7.5, 9.5, 5] },  
    { name: 'Vincenzo', lastName: 'Meli', votes: [5, 5, 4.5, 7, 5.5] }  
]

// Creo l'array di studenti contenente solo i nomi completi degli studenti
students.map(student => {
    console.table(student.name, student.lastName)
})

// Creo l'array di studenti che hanno una media voti superiore a 7.
students.forEach(student => {
    let somma = 0
    student.votes.forEach((voto, index) => {
        somma += voto

    });
    // Calcolo la media dei voti
    let media = somma /student.votes.length
    media = media.toFixed(2)
    student.media = media

    // Stampo il risultato in console
    console.log(`Somma dei voti di ${student.name}: ${somma}`);
    console.log(`Media dei voti di ${student.name}: ${media}`);
});

const studentAvg7 = students.filter(student => student.media >= 7)

studentAvg7.forEach(student => {
    console.log(`La media voti di ${student.name} è di ${student.media}`)
})