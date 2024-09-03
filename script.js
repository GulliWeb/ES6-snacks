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

// Usa la destrutturazione per estrarre nome, cognome, e media voti di ogni studente in un nuovo array di oggetti.
const stad = students.map(({ name, lastName, media }) => ({
    name,
    lastName,
    media
}))
console.table(stad)

// SNACK BONUS (6)
/*	•	Descrizione: Crea un array di oggetti che rappresentano auto in un concessionario. Ogni auto avrà proprietà come marca, modello, chilometri, e anno.
	•	Obiettivo:
	•	Usa .filter() per creare un array di auto che hanno meno di 50.000 chilometri.
	•	Usa .map() per creare un nuovo array contenente solo i modelli delle auto e il loro anno di produzione.
	•	Trova l’auto più vecchia (con l’anno di produzione più basso).
*/

// Creo l'array di oggetti AUTO
const cars = [
    {brand: 'Ferrari', model: 'F570 pista', km: 12000, year: 2015},
    {brand: 'Audi', model: 'RS3', km: 2000, year: 2023},
    {brand: 'Bmw', model: 'M2 competition', km: 64000, year: 2019}
]

// Creo array di auto con meno di 50000 km
const carsKm50 = cars.filter(car => car.km <= 50000)
console.table(carsKm50)

// Creo un nuovo array contenente solo il modello e anno dell'auto
const carsInfo = cars.map(({model, year})=> ({
  model,
  year,
}))
console.table(carsInfo)

// Trovo l'auto con l'anno di produzione più basso
let oldestCar = cars[0]

for (let i = 1; i < cars.length; i++) {
    if (cars[i].year < oldestCar.year) {
        oldestCar = cars[i]
    }    
}
console.log('Auto con l\'anno di produzione più basso:', oldestCar);

// SNACK BONUS (7)
/* •	Descrizione: Crea un array di oggetti che rappresentano prodotti in un magazzino. Ogni prodotto avrà proprietà come nome, categoria, quantità, e prezzo.
   •	Obiettivo:
   •	Usa .filter() per creare un array di prodotti che appartengono a una determinata categoria (ad esempio “elettronica”).
   •	Usa .map() per creare un nuovo array che contiene i nomi dei prodotti e il loro prezzo.
*/

// Creo array di oggetti PRODOTTI
const products = [
    {name: 'Maglione', category: 'dresses', qta: 1872, price: 27.99},
    {name: 'Computer', category: 'technology', qta: 62, price: 2099.99},
    {name: 'hat', category: 'dresses', qta: 19212, price: 7.99},
    {name: 'belt', category: 'dresses', qta: 674, price: 15.99},
    {name: 'balls', category: 'sport&hobby', qta: 12872, price: 9.99},
]

// Creo un array di solo prodotti appartenenti alla categortia DRESSES 
const dresses = products.filter(product => product.category == 'dresses')
console.table(dresses)

// Creo un nuovo array che contenga solo i nomi dei prodotti con il loro relativo prezzo
const infoProducts = products.map(( {name, price} ) => ({
    name,
    price,
}))
console.table(infoProducts)

// SNACK BONUS (8) Filtra, Mappa e Trova la Città con la Popolazione Più Alta
// 	1.	Descrizione: Crea un array di oggetti che rappresentano città. Ogni città avrà proprietà come nome, popolazione, area (in km²), e nazione.
// 	2.	Obiettivo:
// 	•	Usa .filter() per creare un array di città con una popolazione inferiore a 1 milione di abitanti.
// 	•	Usa .map() per creare un nuovo array contenente solo i nomi delle città e la loro popolazione.
// 	•	Trova la città con la popolazione più alta.

// Creo array di oggetti CITTA
const cities = [
    {name: 'Bra', popolation: 29000, area: 2321, nation: 'Italy'},
    {name: 'Torino', popolation: 300000, area: 98212, nation: 'Italy'},
    {name: 'Los Angeles', popolation: 2190000, area: 832131, nation: 'USA'}
]

// Creo un array di città contenenti solo le città con meno di 1MLN di abitanti
const oneMlnLower = cities.filter(city => city.popolation <= 1000000)
console.table(oneMlnLower)

// Creo un array contente solo i nomi delle città e la loro relativa popolazione
const cityInfo = cities.map(( {name, popolation} ) => ({
    name,
    popolation,
}))
console.table(cityInfo)

// Trovo la città con la popolazione più alta
let cityName = cities[0].name
let lowerPopulation = cities[0].popolation
for (let i = 0; i < cities.length; i++) {
    if (cities[i].popolation > lowerPopulation) {
        cityName = cities[i].name
        lowerPopulation = cities[i].popolation
        
    }
}
console.log(`La città con più abitanti è ${cityName} con ${lowerPopulation} abitanti.`)

// SNACK BONUS (9) Filtra, Mappa e Trova il Film con il Maggior Incasso
// 	1.	Descrizione: Crea un array di oggetti che rappresentano film. Ogni film avrà proprietà come titolo, regista, anno di uscita, e incasso al botteghino (in milioni di euro).
// 	2.	Obiettivo:
// 	•	Usa .filter() per creare un array di film usciti dopo l’anno 2000.
// 	•	Usa .map() per creare un nuovo array contenente solo i titoli dei film e i loro incassi.
// 	•	Trova il film con il maggior incasso.

//Creo oggetti FILM
const movies = [
        { title: 'Inception', director: 'Christopher Nolan', year: 2010, boxOffice: 836.8 },
        { title: 'The Matrix', director: 'The Wachowskis', year: 1999, boxOffice: 466.5 },
        { title: 'Avatar', director: 'James Cameron', year: 2009, boxOffice: 2787.9 },
        { title: 'The Avengers', director: 'Joss Whedon', year: 2012, boxOffice: 1518.8 },
        { title: 'Titanic', director: 'James Cameron', year: 1997, boxOffice: 2187.5 }
    ]

// Creo un array contenente solo i film usciti dopo l'anno 2000
const moviesAfter2000 = movies.filter(movie => movie.year >= 2000)
console.table(moviesAfter2000)

// Creo un array contenente solo i titoli dei film e i loro incassi
const infoMovies = movies.map(({title, boxOffice}) => ({
    title,
    boxOffice,
}))
console.table(infoMovies)

// Trovo il film con il maggiore incasso
let maxGained = movies[0].boxOffice
for (let i = 0; i < movies.length; i++) {
    if (movies[i].boxOffice > maxGained) {
        maxGained = movies[i].boxOffice        
    }
}
console.log(maxGained)