/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 1");

{
  const num = 50;
  const num1 = 60;

  if (num > num1) {
    console.log(num + " è maggiore di " + num1);
  } else if (num1 > num) {
    console.log(num1 + " è maggiore di " + num);
  } else {
    console.log("I due valori sono uguali.");
  }
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 2");

{
  const num = 5;

  let num1 = 5;

  if (num1 !== num) {
    console.log("not equal");
  } else {
    console.log("The number you just typed must be 5");
  }
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 3");

{
  let num = 38;

  if (num % 5 === 0) {
    console.log(num + " è divisibile per 5");
  } else {
    console.log(num + " non è divisibile per 5");
  }
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 4");

{
  const num = 30;

  const num1 = 22;

  const num2 = num - num1;

  const num3 = num1 - num;

  const num4 = num + num1;

  const isNumber8 =
    num === 8 || num1 === 8 || num2 === 8 || num3 === 8 || num4 === 8;

  if (isNumber8 === true) {
    console.log("Number 8 was found");
  } else {
    console.log("Number 8 was not found");
  }
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 5");

{
  const totalShoppingCart = 50;

  const shippingCost = 10;

  const isShippingFree =
    totalShoppingCart > 50
      ? "You unlocked free shipping!"
      : "Shipping cost: " + shippingCost + "€";

  console.log(isShippingFree);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 6");

{
  const totalShoppingCart = 70;

  const shippingCost = 10;

  const totalDiscount = totalShoppingCart * 0.8;

  if (totalDiscount >= 50) {
    console.log(
      "Totale da pagare:" + totalDiscount + "€, spedizione gratuita."
    );
  } else {
    console.log(
      "Totale da pagare: " +
        (totalDiscount + shippingCost) +
        "€ di cui spedizione 10€"
    );
  }
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 7");

let z1 = 6;
let z2 = 14;
let z3 = 10;

if (z1 >= z2) {
  if (z3 >= z1) {
    console.log(z3, z1, z2);
  } else {
    if (z3 >= z2) {
      console.log(z1, z3, z2);
    } else {
      console.log(z1, z2, z3);
    }
  }
} else {
  if (z3 >= z2) {
    console.log(z3, z2, z1);
  } else {
    if (z3 >= z1) {
      console.log(z2, z3, z1);
    } else {
      console.log(z2, z1, z3);
    }
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 8");

{
  const value = 10;

  const value1 = typeof value;

  if (value1 === "number") {
    console.log(value + " is a number");
  } else {
    console.log(value + " is not a number");
  }
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esecizio 9");

{
  const value = 193;

  const evenOrOdd = value % 2;

  if (evenOrOdd === 0) {
    console.log(value + " is even");
  } else {
    console.log(value + " is odd");
  }
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 10");

let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 11");

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 12");

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 13");

me.skills.pop();

console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 14");

let myArray = [];
myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4);
myArray.push(5);
myArray.push(6);
myArray.push(7);
myArray.push(8);
myArray.push(9);
myArray.push(10);
console.log(myArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 15");

myArray[9] = 100;
console.log(myArray[9]);
