const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    const container = document.querySelector(".characters-container")
    
    charactersAPI.getFullList()
    .then((characters) => {
      // get data for all characters
      const charactersList = characters.data;
      charactersList.forEach((character) => {
        // create a 'div' for name, occupation, cartoon, and weapon
        const nameDiv = document.createElement('div')
        const occupationDiv = document.createElement('div')
        const cartoonDiv = document.createElement('div')
        const weaponDiv = document.createElement('div')

        // add class from HTML to each div
        nameDiv.classList.add('name')
        occupationDiv.classList.add('occupation')
        cartoonDiv.classList.add('cartoon')
        weaponDiv.classList.add('weapon')

        // add character information to each div
        nameDiv.innerHTML = `Name: ${character.name}`
        occupationDiv.innerHTML = `Occupation: ${character.occupation}`
        cartoonDiv.innerHTML = `Cartoon: ${character.cartoon}`
        weaponDiv.innerHTML = `Weapon: ${character.weapon}`

        // create the "bucket" for all div's to live in
        let divTag = document.createElement('div');
        divTag.classList.add('character-info')

        // add bucket to the broader container
        container.appendChild(divTag)

        // add each sub-div to the character-info div container
        divTag.appendChild(nameDiv)
        divTag.appendChild(occupationDiv)
        divTag.appendChild(cartoonDiv)
        divTag.appendChild(weaponDiv)


      })
    })
    .catch((err) => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterIdInput = document.getElementsByName("character-id")
    
    charactersAPI.getOneRegister(characterIdInput[0].value)
    .then((character) => {
      // not sure how to "clear" original found value

        const characterData = character.data;
        const container = document.querySelector(".characters-container")

        const nameDiv = document.createElement('div')
        const occupationDiv = document.createElement('div')
        const cartoonDiv = document.createElement('div')
        const weaponDiv = document.createElement('div')


        nameDiv.classList.add('name')
        occupationDiv.classList.add('occupation')
        cartoonDiv.classList.add('cartoon')
        weaponDiv.classList.add('weapon')



        nameDiv.innerHTML = `Name: ${characterData.name}`
        occupationDiv.innerHTML = `Occupation: ${characterData.occupation}`
        cartoonDiv.innerHTML = `Cartoon: ${characterData.cartoon}`
        weaponDiv.innerHTML = `Weapon: ${characterData.weapon}`

        let divTag = document.createElement('div');
        divTag.classList.add('character-info')


        container.appendChild(divTag)


        divTag.appendChild(nameDiv)
        divTag.appendChild(occupationDiv)
        divTag.appendChild(cartoonDiv)
        divTag.appendChild(weaponDiv)

    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const deleteIdInput = document.getElementsByName("character-id-delete")
    
    document.getElementById('delete-one').style.backgroundColor = "green"
    charactersAPI.deleteOneRegister(deleteIdInput[0].value)
    .then(() => {
      document.getElementById('delete-one').style.backgroundColor = "green"
    })
    .catch((err) => {
      console.log(err)
      document.getElementById('delete-one').style.backgroundColor = "red"
    })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const updateIdInput = document.getElementsByName("id")

    charactersAPI.updateOneRegister(updateIdInput[0].value, someUpdatedInfo)
    .then((updatedInfo) => {
      console.log(updatedInfo);
      document.getElementById('update-data').style.backgroundColor = "green"
    })
    .catch((err) => {
      console.log(err);
      document.getElementById('update-data').style.backgroundColor = "red"
    })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let {name, occupation, weapon, cartoon} = character;

    charactersAPI.createOneRegister(character)
    .then((newCharacter) => {
      console.log(newCharacter);
      document.getElementById('send-data').style.backgroundColor = "green"
    })
    .catch((err) => {
      console.log(err);
      document.getElementById('send-data').style.backgroundColor = "red"
    })
  });
});
