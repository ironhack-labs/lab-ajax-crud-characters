 const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

let charactersDiv = document.querySelector('.characters-container')

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(res => {
        let characterArr = res.data.slice(20, 40)
        charactersDiv.innerHTML = ' '


        characterArr.forEach(elm => {

          const divCharInfo = document.createElement('div')
          const name = document.createElement('div')
          const occupation = document.createElement('div')
          const cartoon = document.createElement('div')
          const weapon = document.createElement('div')

          divCharInfo.setAttribute('class', 'character-info')
          name.setAttribute('class', 'name')
          occupation.setAttribute('class', 'occupation')
          cartoon.setAttribute('class', 'cartoon')
          weapon.setAttribute('class', 'weapon')

          name.innerHTML = `name: ${elm.name}`
          occupation.innerHTML = `occupation: ${elm.occupation}`
          cartoon.innerHTML = `cartoon: ${elm.cartoon}`
          weapon.innerHTML = `weapon: ${elm.weapon}`
          divCharInfo.appendChild(name)
          divCharInfo.appendChild(occupation)
          divCharInfo.appendChild(cartoon)
          divCharInfo.appendChild(weapon)

          charactersDiv.appendChild(divCharInfo)
        });
        console.log(characterArr)
      })
    
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    const id = document.getElementById('search-one').value
    charactersAPI.getOneRegister(id)
      .then(res => {
        let characterArr = res.data
        charactersDiv.innerHTML = ' '

          const divCharInfo = document.createElement('div')
          const name = document.createElement('div')
          const occupation = document.createElement('div')
          const cartoon = document.createElement('div')
          const weapon = document.createElement('div')

          divCharInfo.setAttribute('class', 'character-info')
          name.setAttribute('class', 'name')
          occupation.setAttribute('class', 'occupation')
          cartoon.setAttribute('class', 'cartoon')
          weapon.setAttribute('class', 'weapon')

          name.innerHTML = `name: ${characterArr.name}`
          occupation.innerHTML = `occupation: ${characterArr.occupation}`
          cartoon.innerHTML = `cartoon: ${characterArr.cartoon}`
          weapon.innerHTML = `weapon: ${characterArr.weapon}`
         
          divCharInfo.appendChild(name)
          divCharInfo.appendChild(occupation)
          divCharInfo.appendChild(cartoon)
          divCharInfo.appendChild(weapon)

          charactersDiv.appendChild(divCharInfo)
       
       
      })

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister('character-id-delete')
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    charactersAPI.updateOneRegister(id, character)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    charactersAPI.createOneRegister(character)

  });
});
