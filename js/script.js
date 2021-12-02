/* chiedo all'utente delle informazioni che salverò dentro delle costanti*/

/* Chiedo all'utente il suo nome. */
const userName = prompt('Inserisci il tuo nome.');

/* Chiedo all'utente il suo cognome. */
const userLastname = prompt('Inserisci il tuo cognome.');

/* Chiedo all'utente il suo colore preferito. */
const userFavoritecolor = prompt('inserisci il tuo colore preferito.');

/* prendo l'elemento #pwdgen all'interno del document e lo salvo in una variabile. */
let htmlElement = document.getElementById('pwdgen');

/* imposto all'attributo innerHTML della variabile la concatenazione delle costanti
   inserite dall'utente e le ultime due cifre dell'anno corrente tramite template literal.
*/
htmlElement.innerHTML = `${userName}${userLastname}${userFavoritecolor}21`;