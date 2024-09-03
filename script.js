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

// 1.	Descrizione: Crea un array di oggetti che rappresentano libri in una biblioteca. Ogni libro avrà proprietà come titolo, autore, numero di pagine, e anno di pubblicazione.
// 	2.	Obiettivo:
// 	•	Usa .filter() per creare un array di libri con meno di 300 pagine.
// 	•	Usa .map() per creare un nuovo array contenente solo i titoli dei libri e l’anno di pubblicazione.
// 	•	Trova il libro più vecchio (con l’anno di pubblicazione più basso).

// SNACK 2: Filtra, Mappa e Trova lo Studente con il Punteggio Più Alto

// 	1.	Descrizione: Crea un array di oggetti che rappresentano studenti in una classe. Ogni studente avrà proprietà come nome, cognome, età, e punteggio finale.
// 	2.	Obiettivo:
// 	•	Usa .filter() per creare un array di studenti con un punteggio finale superiore a 80.
// 	•	Usa .map() per creare un nuovo array contenente solo i nomi degli studenti e i loro punteggi.
// 	•	Trova lo studente con il punteggio finale più alto.

// SNACK 3: Filtra, Mappa e Trova la Città con la Popolazione Più Alta

// 	1.	Descrizione: Crea un array di oggetti che rappresentano città. Ogni città avrà proprietà come nome, popolazione, area (in km²), e nazione.
// 	2.	Obiettivo:
// 	•	Usa .filter() per creare un array di città con una popolazione inferiore a 1 milione di abitanti.
// 	•	Usa .map() per creare un nuovo array contenente solo i nomi delle città e la loro popolazione.
// 	•	Trova la città con la popolazione più alta.

// SNACK 4: Filtra, Mappa e Trova il Film con il Maggior Incasso

// 	1.	Descrizione: Crea un array di oggetti che rappresentano film. Ogni film avrà proprietà come titolo, regista, anno di uscita, e incasso al botteghino (in milioni di euro).
// 	2.	Obiettivo:
// 	•	Usa .filter() per creare un array di film usciti dopo l’anno 2000.
// 	•	Usa .map() per creare un nuovo array contenente solo i titoli dei film e i loro incassi.
// 	•	Trova il film con il maggior incasso.

// SNACK 5: Filtra, Mappa e Trova il Giocatore più Anziano

// 	1.	Descrizione: Crea un array di oggetti che rappresentano giocatori di una squadra di calcio. Ogni giocatore avrà proprietà come nome, ruolo, età, e numero di gol segnati.
// 	2.	Obiettivo:
// 	•	Usa .filter() per creare un array di giocatori con più di 10 gol segnati.
// 	•	Usa .map() per creare un nuovo array contenente solo i nomi dei giocatori e i loro ruoli.
// 	•	Trova il giocatore più anziano.

// SNACK 6: Filtra, Mappa e Trova il Prodotto più Costoso

// 	1.	Descrizione: Crea un array di oggetti che rappresentano prodotti in un negozio. Ogni prodotto avrà proprietà come nome, categoria, prezzo, e quantità in magazzino.
// 	2.	Obiettivo:
// 	•	Usa .filter() per creare un array di prodotti con un prezzo inferiore a 50 euro.
// 	•	Usa .map() per creare un nuovo array contenente solo i nomi dei prodotti e i loro prezzi.
// 	•	Trova il prodotto più costoso.

// SNACK 7: Filtra, Mappa e Trova il Gadget con la Batteria Più Duratura

// 	1.	Descrizione: Crea un array di oggetti che rappresentano gadget elettronici. Ogni gadget avrà proprietà come nome, tipo, durata della batteria (in ore), e prezzo.
// 	2.	Obiettivo:
// 	•	Usa .filter() per creare un array di gadget con una durata della batteria superiore a 10 ore.
// 	•	Usa .map() per creare un nuovo array contenente solo i nomi dei gadget e la loro durata della batteria.
// 	•	Trova il gadget con la batteria più duratura.

// SNACK 8: Filtra, Mappa e Trova il Più Giovane Musicista

// 	1.	Descrizione: Crea un array di oggetti che rappresentano musicisti. Ogni musicista avrà proprietà come nome, strumento suonato, età, e numero di album pubblicati.
// 	2.	Obiettivo:
// 	•	Usa .filter() per creare un array di musicisti con meno di 30 anni.
// 	•	Usa .map() per creare un nuovo array contenente solo i nomi dei musicisti e i loro strumenti.
// 	•	Trova il musicista più giovane.