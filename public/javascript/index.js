const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    charactersAPI.getFullList()
      .then(characters => {
        console.log(characters);

        characters.forEach(elm => {

          const { name, occupation, cartoon, weapon } = elm
          console.log(name);

          const html = `<div class="character-info">
      <div class="name"><p>Character Name ${name}</p></div>
      <div class="occupation"><p>Character Occupation ${occupation}</p></div>
      <div class="cartoon"><p>Is a Cartoon? ${cartoon}</p></div>
      <div class="weapon"><p>Character Weapon ${weapon}</p></div>
       </div>`

          document.querySelector('.characters-container').innerHTML += html

        });

      }
      )

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()


    const id = document.querySelector('#search-id').value
    charactersAPI.getOneRegister(id)
      .then(character => {
        console.log(character)

        const { name, occupation, cartoon, weapon } = character

        const html = `<div class="character-info">
      <div class="name"><p>Character Name ${name}</p></div>
      <div class="occupation"><p>Character Occupation ${occupation}</p></div>
      <div class="cartoon"><p>Is a Cartoon? ${cartoon}</p></div>
      <div class="weapon"><p>Character Weapon ${weapon}</p></div>
       </div>`
        document.querySelector('.characters-container').innerHTML = html

      })


  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()

    const id = document.querySelector('#delete-id').value
    charactersAPI.deleteOneRegister(id)

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    const name = document.querySelector('#edit-name').value
    const occupation = document.querySelector('#edit-occupation').value
    const cartoon = document.querySelector('#edit-cartoon').checked
    const weapon = document.querySelector('#edit-weapon').value
    const id = document.querySelector('#edit-id').value

    const newData = {
      id,
      name,
      occupation,
      cartoon,
      weapon

    }
    charactersAPI.updateOneRegister(newData)

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const name = document.querySelector('#create-name').value
    const occupation = document.querySelector('#create-occupation').value
    const cartoon = document.querySelector('#create-cartoon').checked
    const weapon = document.querySelector('#create-weapon').value

    const character = {
      name,
      occupation,
      cartoon,
      weapon
    }

    charactersAPI.createOneRegister(character)
  });
});
