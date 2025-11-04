// qui dentro inseriremo la logica necessaria per far funzionare la pagina
// "rubrica.html"
// il risultato che voglio ottenere è stampare in console un oggetto
// contenente i dati inseriti nel form nella pagina; questo oggetto
// dovrà venire creato tramite una CLASSE

// costante per la key del localStorage
const KEY = 'rubrica-memory'

// classe per creare l'oggetto "contatto telefonico"
class Contact {
  constructor(_firstName, _lastName, _phone) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.phone = _phone
  }
  prefix = '0039'
  favourite = false
}

const generateCard = function (c) {
  // c è l'oggetto del contatto che sto passando alla funzione

  // vado a inserire nel DOM una card da questo contatto appena creato
  const row = document.getElementById('cards-section') // questa è la row
  row.innerHTML += `
    <div class="col">
      <div class="card">
        <img src="https://placebear.com/300/300" class="card-img-top" alt="orso">
        <div class="card-body">
          <h5 class="card-title">${c.firstName} ${c.lastName}</h5>
          <p class="card-text">N. telefono: ${c.phone}</p>
        </div>
      </div>
    </div>
  `
}

// CREIAMO UN ARRAY PER SALVARE I CONTATTI
// voglio salvare nel localStorage un ARRAY di contatti
// questo array deve contenere contatti vecchi e nuovi
let contacts = []

// recuperiamo eventuali contatti presenti in localStorage
const arrayOfSavedContacts = JSON.parse(localStorage.getItem(KEY))
// JSON.parse() fa l'INVERSO di JSON.stringify()
// da array/oggetto spiattellato come stringa ritorna alla forma originale
console.log('MEMORY', arrayOfSavedContacts)

if (arrayOfSavedContacts.length > 0) {
  contacts = arrayOfSavedContacts
  // abbiamo delle cards da ricreare!
  contacts.forEach((contactObject) => {
    generateCard(contactObject)
  })
}

// cominciamo con il recuperare i riferimenti dei 3 campi input

const firstNameInput = document.getElementById('firstName') // <input />
const lastNameInput = document.getElementById('lastName') // <input />
const phoneInput = document.getElementById('phone') // <input />

// recupero un riferimento al form e lavoro sul suo evento di "submit"
const form = document.getElementById('rubrica-form')
form.addEventListener('submit', (e) => {
  e.preventDefault() // fermo il refresh della pagina
  // ora prendo i 3 VALORI dei campi input al momento del submit del form
  const firstName = firstNameInput.value // sempre .value per gli input
  const lastName = lastNameInput.value
  const phone = phoneInput.value

  // creerò l'oggetto risultante con una CLASSE!
  const contact = new Contact(firstName, lastName, phone) // gli fornisco 3 stringhe
  console.log('GENERATO CONTATTO RUBRICA', contact)

  generateCard(contact)

  contacts.push(contact) // un array pieno

  // salvo il contatto appena creato in localStorage
  localStorage.setItem(KEY, JSON.stringify(contacts))

  // DOVETE USARE JSON.STRINGIFY() QUANDO VOLETE SALVARE NEL LOCALSTORAGE
  // UN ARRAY O UN OGGETTO (strutture dati complesse)

  // dopo aver creato la card, svuoto il form
  form.reset() // maniera smart
})
