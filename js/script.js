console.log('JS OK')

// Memorizzo in una variabile il Valore 21 e Recupero l'elemento dal DOM

const passwordNumber = '21'
const passwordPlaceholder = document.getElementById('password')
console.log(passwordPlaceholder);

// Chiedo all'utente il suo nome e lo salvo

const firstName = prompt('Inserisci il nome', 'Pasquale')
console.log(firstName);

// Chiedo all'utente il suo cognome e lo salvo;

const lastName = prompt('Inserisci il Cognome', 'DiMatteo')
console.log(lastName);

// Chiedo all'utente il suo colore preferito e lo salvo;

const favoriteColor = prompt('Inserisci il tuo colore preferito', 'Blu')
console.log(favoriteColor);

// Uso tutti gli elementi generando una password e la salvo;

const generatePassword = firstName + lastName + favoriteColor + passwordNumber
console.log(generatePassword);

// Inserisco la password all'interno dell'elemento nel DOM;

passwordPlaceholder.innerText = generatePassword;