// sessionStorage e localStorage sono due tecnologie ormai diffuse in tutti i
// browser moderni. Hanno come scopo la memorizzazione LOCALE di piccole quantità
// di informazioni, atte a migliorare l'esperienza utente senza salvare nessun'informazione
// vitale.
// Nascono con la standardizzazione di HTML5

// Queste 2 tecnologie nascono per migliorare una già esistenze (i "cookies").
// Ne superano le due principali limitazioni:
// - i cookies possono memorizzare al massimo 4KB di dati (mentre queste memorie
// hanno megabytes di spazio a disposizione)
// - i cookies non hanno mai avuto un concetto di "sessione"

// Le due tecnologie di cui andiamo a parlare funzionano in maniera assolutamente
// analoga a parte per una differenza: il sessionStorage viene periodicamente
// e automaticamente svuotato, ad ogni chiusura del tab/browser

// il localStorage viene tradizionalmente utilizzato per memorizzare cose come
// login, tema chiaro/scuro, varie preferenze utente etc.
// il sessionStorage di solito viene utilizzato per informazioni sensibili,
// livelli di scroll della pagina etc.

// sia il sessionStorage che il localStorage vengono "compartimentati" a livello
// di DOMINIO: amazon ha i propri, epicode ha i propri, facebook ha i propri etc.
// e ogni dominio può interagire SOLO con i propri "compartimenti"

// andiamo nel pratico: quali operazioni possiamo compiere con queste memorie...
// - setItem(chive, valore) -> metodo che vi permette di SALVARE un'informazione
// - getItem(chiave) -> metodo che vi permette di RECUPERARE un'informazione
// - removeItem(chiave) -> metodo che vi permette di ELIMINARE un'informazione
// - clear() -> metodo che vi permette di RIPULIRE INTERAMENTE la memoria selezionata

// proviamo a salvare un'informazione nel localStorage

// const changeThemeLight = function () {
//   localStorage.setItem('theme', 'light')
// }
// const changeThemeDark = function () {
//   localStorage.setItem('theme', 'dark')
// }

const body = document.querySelector('body') // <body></body>
const h1 = document.querySelector('h1') // <h1></h1>

const buttonClick = function () {
  // questo serve per memorizzare il valore nel localStorage
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.setItem('theme', 'light')
  } else {
    localStorage.setItem('theme', 'dark')
  }

  // questo serve per applicare gli stili alla pagina
  // metto o tolgo alla pagina le classi "dark", grazie al metodo "toggle"
  applyTheme()
}

const applyTheme = function () {
  // in base al valore corrente del localStorage, applico le classi
  // di conseguenza
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('style-dark-bg')
    h1.classList.add('style-dark-text')
  } else {
    body.classList.remove('style-dark-bg')
    h1.classList.remove('style-dark-text')
    // così facendo RIMETTO il tema chiaro
  }
}

applyTheme()

// ora sono in grado di mantenere salvato il tema colore selezionato
