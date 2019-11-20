const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  let card = document.querySelector('.characters-container')
  let cardHTML;

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then((characterList) => {
        card.innerHTML = ''
        characterList.data.forEach(el => {

          cardHTML = `<div class="character-info">
          <div class="id">Id:  <span>${el.id}</span></div>
          <div class="name">Name: <span>${el.name}</span></div>
          <div class="occupation">Occupation: <span>${el.occupation}</span></div>
          <div class="cartoon">Is a Cartoon? <span>${el.cartoon}</span></div>
          <div class="weapon">Weapon <span>${el.weapon}</span></div>
        </div>`

          card.innerHTML += cardHTML;
        })
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let characterID = document.querySelector('input[name="character-id"]').value
    charactersAPI.getOneRegister(characterID)
      .then(oneCharacter => {

        card.innerHTML = ''
        let el = oneCharacter.data

          cardHTML = `<div class="character-info">
          <div class="id">Id:  <span>${el.id}</span></div>
          <div class="name">Name: <span>${el.name}</span></div>
          <div class="occupation">Occupation: <span>${el.occupation}</span></div>
          <div class="cartoon">Is a Cartoon? <span>${el.cartoon}</span></div>
          <div class="weapon">Weapon <span>${el.weapon}</span></div>
        </div>`

          card.innerHTML += cardHTML;
      
      })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let characterID = document.querySelector('input[name="character-id-delete"]').value
    charactersAPI.deleteOneRegister(characterID)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    let characterID = document.querySelector('input[name="chr-id"]').value
    charactersAPI.updateOneRegister(event, characterID)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    charactersAPI.createOneRegister(event)
    .then((createdCharacter) => {
      console.log(createdCharacter.data)
    })
  });
});
