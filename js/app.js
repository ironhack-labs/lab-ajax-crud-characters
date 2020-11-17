const characterApp = new CharactersApiHandler()


function updateCharactersList() {

    characterApp
        .getAllCharacters()
        .then(response => {
            let allcharacters = response.data.reverse()
            let characters = '<h2 class= "fetch"> FETCH ALL </H2> '

            allcharacters.forEach(elm => {
                characters += ` 
                <div class="characters-container ">
                                <div class="character-info blue">
                               Character name: ${elm.name}
                                <br>
                                Character occupation: ${elm.occupation}
                                <br>
                                Character weapon: ${elm.weapon}
                                   <br>
                                id: ${elm.id}
                                </div>
                                </div>
                                                            `
            })

            document.querySelector('#charlist').innerHTML =   characters
        })
        .catch(err => console.log('HUBO UN ERROR!', err))
}



window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
updateCharactersList()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
      let id = document.querySelector('#character-id').value
characterApp
    .getOneRegister(id)
    .then(data => {
    

                 let charactername = `Character Name: ${data.data.name}`
        let characterweapon = `Character Weapon: ${data.data.weapon}`
        let characterocupation = `Character occupation: ${data.data.occupation}`
        let cartoon 
        if (data.data.cartoon === true) {
            cartoon = 'Is a Cartoon? Yes!'
        }
        else {
            cartoon= "Is a Cartoon? No :("
        }
        document.querySelector('#charid1').value= data.data.id
        document.querySelector('#charname').innerHTML = charactername
        document.querySelector('#charname1').value = data.data.name

        document.querySelector('#charweapon').innerHTML = characterweapon
        document.querySelector('#charweapon1').value = data.data.weapon
        
        document.querySelector('#charoccupation').innerHTML = characterocupation
        document.querySelector('#charoccupation1').value = data.data.occupation

        document.querySelector('#charcartoon').innerHTML = cartoon
        document.querySelector('#charcartoon1').checked = data.data.cartoon



    })
    .catch(err => console.log('HUBO UN ERROR!', err))
  

      
  
  });

    document.getElementById('delete-one').addEventListener('click', function (event) {
          let id = document.querySelector('#character-id-delete').value
        characterApp
            .deleteOne(id)
            .then((data) =>  updateCharactersList())
            .catch(err => console.log('HUBO UN ERROR!', err))

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
            event.preventDefault()
      let id = document.querySelector('#charid1').value
      let name = document.querySelector('#charname1').value 
      let weapon= document.querySelector('#charweapon1').value
      let occupation = document.querySelector('#charoccupation1').value
     let cartoon= document.querySelector('#charcartoon1').checked
console.log(id, name, weapon, occupation, cartoon)


      characterApp
    .updateOneRegister(id, {id, name, weapon, occupation, cartoon})
      .then(data=>console.log(data))
  });

    document.getElementById('new-character-form').addEventListener('submit', function (event) {
      event.preventDefault()
      const newform = document.getElementById('new-character-form')
        const name = newform.name.value
        const occupation = newform.occupation.value
        const weapon = newform.weapon.value
        const cartoon = newform.cartoon.checked
      characterApp
          .createOneRegister({ name, occupation, weapon, cartoon })
          .then(data => {
              updateCharactersList()
              newform.reset()
          })
          .catch(err => console.log('HUBO UN ERROR!', err))
        
  });
});