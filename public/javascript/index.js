const charactersAPI = new APIHandler('http://localhost:8000')
const charactersContainer = document.querySelector('.characters-container')

//functions

const drawCard = character => {
    let card = document.createElement('div')
    card.className = "character-info"
    card.innerHTML = `
      <div class="name"><b>Name:</b> ${character.name}</div>
      <div class="occupation"><b>Occupation:</b> ${character.occupation}</div>
      <div class="cartoon"><b>Cartoon:</b> ${character.cartoon}</div>
      <div class="weapon"><b>Weapon:</b> ${character.weapon}</div>`
    charactersContainer.appendChild(card) 
}


const drawCards = cards => {
  cards.forEach(card => drawCard(card))
}







//listeners

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(res => {
      charactersContainer.innerHTML = ''
      drawCards(res.data)
    })
    .catch(e => console.log(e))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(document.getElementById('identification').value)
    .then(res => {
      charactersContainer.innerHTML = ''
      drawCard(res.data)
    })
    .catch(e => console.log(e))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI
    .deleteOneRegister(document.getElementById('identification_del').value)
    .then(() => {
      console.log('deleted')
    })
    .catch(e => { showNotification(e) })

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
