const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
          const characters = await charactersAPI.getFullList()
          document.querySelector('.characters-container').innerHTML = ''
          characters.forEach(character => {
            const div = document.createElement('div')
            div.className = 'character-info'
            div.innerHTML = `
      <div class="id">Id: ${character.id}</div>
      <div class="name">Name: ${character.name}</div>
      <div class="occupation">Occupation: ${character.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
      <div class="weapon">Weapon: ${character.weapon}</div>`
            document.querySelector('.characters-container').appendChild(div)
          })
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
          const $searchid = document.querySelector('input[name="character-id"]')
          const character = await charactersAPI.getOneRegister($searchid.value)
          document.querySelector('.characters-container').innerHTML = ''
          const div = document.createElement('div')
          div.className = 'character-info'
          div.innerHTML = `
      <div class="id">Id: ${character.id}</div>
      <div class="name">Name: ${character.name}</div>
      <div class="occupation">Occupation: ${character.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
      <div class="weapon">Weapon: ${character.weapon}</div>`
          document.querySelector('.characters-container').appendChild(div)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
     const $searchid = document.querySelector('input[name="character-id-delete"]')
     charactersAPI.deleteOneRegister($searchid.value)
       .then(r => alert('Registro eliminado'))
       .catch(err => alert('The character doesnt exist'))
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
          event.preventDefault()
          const id = document.querySelector('#edit-character-form input[name="chr-id"]').value
          const name = document.querySelector('#edit-character-form input[name="name"]').value
          const occupation = document.querySelector('#edit-character-form input[name="occupation"]').value
          const weapon = document.querySelector('#edit-character-form input[name="weapon"]').value
          const cartoon = (document.querySelector('#edit-character-form input[name="cartoon"]').value == 'on') ? true : false
          await charactersAPI.updateOneRegister(id, {
              name,
              occupation,
              weapon,
              cartoon
            })
            .then(res => alert('Edited record'))
            .catch(err => alert('Error registering record'))
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
          event.preventDefault()
          const name = document.querySelector('#new-character-form input[name="name"]').value
          const occupation = document.querySelector('#new-character-form input[name="occupation"]').value
          const weapon = document.querySelector('#new-character-form input[name="weapon"]').value
          const cartoon = (document.querySelector('#new-character-form input[name="cartoon"]').value == 'on') ? true : false
          await charactersAPI.createOneRegister({
              name,
              occupation,
              weapon,
              cartoon
            })
            .then(res => alert('New record'))
            .catch(err => alert('Error creating record'))
  });
});
