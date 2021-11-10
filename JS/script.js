// ****Mail 

// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// ****Gioco dei dadi 

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?


const elenco = ["pippo@hotmail.it", "pluto@hotmail.it", "paperino@hotmail.it"];

const controllo = prompt("Inserisci la tua mail");

let mail = false;

for (let i = 0; i < elenco.length; i++){

    if (controllo == elenco[i]){
        mail = true;
    }
}

if (mail){
    alert("Utente registrato");

} else {
    alert("Utente non registrato");
}

let utente = document.getElementById("utente");

let computer = document.getElementById("computer");


utente.addEventListener("click", function(){
    utente = Math.floor((Math.random() * 6) + 1);
    console.log(utente);
})

computer.addEventListener("click", function(){
    computer = Math.floor((Math.random() * 6) + 1);
    console.log(computer);
})


