const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    let charactersContainerDOMEl = document.querySelector('.characters-container')
    charactersContainerDOMEl.innerHTML = ""
    charactersAPI.getFullList()
      .then(fullList => {
        console.log(fullList.data)
        fullList.data.forEach(character => {
          console.log(character)
          charactersContainerDOMEl.innerHTML += `
        <div class="character-info">
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.cartoon ? 'Is a Cartoon' : 'Is Real'}</div>
        <div class="weapon">${character.weapon}</div>
        </div>
        `
        });
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let charactersContainerDOMEl = document.querySelector('.characters-container')
    charactersContainerDOMEl.innerHTML = ""
    //atributte selector
    let characterID = document.querySelector('input[name=character-id]').value
    charactersAPI.getOneRegister(characterID).then(oneCharacter => {
      charactersContainerDOMEl.innerHTML += `
      <div class="character-info">
        <div class="name">${oneCharacter.data.name}</div>
        <div class="occupation">${oneCharacter.data.occupation}</div>
        <div class="cartoon">${oneCharacter.data.cartoon ? 'Is a Cartoon' : 'Is Real'}</div>
        <div class="weapon">${oneCharacter.data.weapon}</div>
        </div>
        `
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let characterID = document.querySelector('input[name=character-id-delete]').value
    charactersAPI.deleteOneRegister(characterID)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    let id = document.querySelector('input[name="chr-id"]').value
    let name = document.querySelector('input[name="name1"]').value
    let occupation = document.querySelector('input[name="occupation1"]').value
    let weapon = document.querySelector('input[name="weapon1"]').value
    let cartoon = document.querySelector("input[name=cartoon1]").checked
   
    const characterInfo = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon, 
      //? 'Is a Cartoon' : 'Is Real',
      id: id
    }

    charactersAPI.updateOneRegister(characterInfo)
      
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    let name = document.querySelector('input[name="name"]').value
    let occupation = document.querySelector('input[name="name"]').value
    let weapon = document.querySelector('input[name="weapon"]').value
    let cartoon = document.querySelector("input[name=cartoon]").checked
   
    console.log(name)
    const characterInfo = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon 
     //? 'Is a Cartoon' : 'Is Real'
    }

    charactersAPI.createOneRegister(characterInfo)


  })

})

//   document.getElementById('new-character-form').addEventListener('submit', function (event) {
//     let name = document.querySelector('input[name="name"]').value
//     let occupation = document.querySelector('input[name="name"]').value
//     let weapon = document.querySelector('input[name="weapon"]').value
//     let cartoon = document.querySelector("input[name=cartoon]").checked
// });
