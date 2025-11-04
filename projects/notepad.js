// lo scopo di questo progetto è creare una specie di "blocco note"
// in grado di, programmaticamente, salvare nel localStorage il suo contenuto.
// questo contenuto potrà poi in caso venire ri-caricato all'interno del
// blocco note.

const KEY = 'memory' // costante per evitare typos

// prendi i riferimenti ai 3 bottoni

const saveButton = document.getElementById('save')
const loadButton = document.getElementById('load')
const resetButton = document.getElementById('reset')

const textAreaField = document.getElementById('content')

// 1) PULSANTE SALVA
saveButton.addEventListener('click', () => {
  // questo pulsante deve:
  // a) prelevare il contenuto attuale della textarea
  const textAreaContent = textAreaField.value // è una stringa
  console.log('il contenuto attuale è', textAreaContent)
  // b) memorizzarlo nel localStorage
  localStorage.setItem(KEY, textAreaContent)
})

// 2) PULSANTE CARICA
loadButton.addEventListener('click', () => {
  // questo pulsante deve:
  // a) recuperare il contenuto precedentemente salvato (se presente!)
  const savedMemory = localStorage.getItem(KEY)
  // b) inserire questo contenuto nella textarea
  if (savedMemory) {
    // nel caso savedMemory NON sia null e NON sia stringa vuota....
    textAreaField.value = savedMemory
  }
})

// 3) PULSANTE RESET
resetButton.addEventListener('click', () => {
  // questo pulsante deve:
  // a) svuotare il contenuto della textarea nella pagina
  textAreaField.value = ''
  // b) svuotare il contenuto di KEY nel localStorage
  // localStorage.clear() <-- approccio bulldozer
  localStorage.removeItem(KEY) // 'memory'
})

// i motori di storage nascono per salvare contenuti TESTUALI...
// cosa succede se salviamo tipi di dato che NON sono stringhe?

// 2 -> '2'
// true -> 'true'
// { name: 'Stefano' } -> [object Object]

// X FILIPPO
const x = 'Ciao, io mi chiamo'
const y = 'Filippo'

const frase1 = x + y // 'Ciao, io mi chiamoFilippo'
const frase2 = x + ' ' + y // 'Ciao, io mi chiamo Filippo'
const frase3 = `${x} ${y}` // 'Ciao, io mi chiamo Filippo'
// il template literal serve per valutare il contenuto di una variabile
// nella stesura di una stringa
