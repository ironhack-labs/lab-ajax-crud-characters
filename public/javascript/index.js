const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then((allCharInfo) => {

        const parent = document.querySelector(".characters-container")

        for (i=0; i<allCharInfo.length; i++) {
          
          let oneChar = document.createElement('div')
          oneChar.className = "character-info"
          oneChar.innerHTML = `
          <div class="id">Id:<span>${allCharInfo[i].id}</span></div>
          <div class="name">Name:<span>${allCharInfo[i].name}</span></div>
          <div class="occupation">Occupation:<span>${allCharInfo[i].occupation}</span></div>
          <div class="cartoon">Is a cartoon?:<span>${allCharInfo[i].cartoon}<span></div>
          <div class="weapon">Weapon:<span>${allCharInfo[i].weapon}</span></div>`

          parent.appendChild(oneChar);
        }
      })
  });




  document.getElementById('fetch-one').addEventListener('click', function (event) {
    
    const parent = document.querySelector(".characters-container")
    parent.innerHTML = ""

    const userInputId = document.querySelector('.operation input').value;
    
    charactersAPI.getOneRegister(userInputId)
      .then((oneCharInfo) => {

        let oneChar = document.createElement('div')
        oneChar.className = "character-info"
        oneChar.innerHTML = `
        <div class="id">Id:<span>${oneCharInfo.id}</span></div>
        <div class="name">Name:<span>${oneCharInfo.name}</span></div>
        <div class="occupation">Occupation:<span>${oneCharInfo.occupation}</span></div>
        <div class="cartoon">Is a cartoon?:<span>${oneCharInfo.cartoon}<span></div>
        <div class="weapon">Weapon:<span>${oneCharInfo.weapon}</span></div>`

        parent.appendChild(oneChar); 
      })
  });





  document.getElementById('delete-one').addEventListener('click', function (event) {
    const userInputId = document.querySelector('.delete input').value;
    const deleteBtn = document.getElementById('delete-one')
    charactersAPI.deleteOneRegister(userInputId)
      .then(() => deleteBtn.style.backgroundColor = 'green')
      // .catch(() => deleteBtn.style.backgroundColor = 'red') only works if error is not caught in APIHandler
  });




  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    const userInputId = document.querySelector(".edit-character-form input").value


    const updateCharInputs = document.getElementById("edit-character-form").elements
    
    const name = updateCharInputs.name.value
    const occupation = updateCharInputs.occupation.value
    const cartoon = updateCharInputs.cartoon.checked
    const weapon = updateCharInputs.weapon.value

    const updatedCharacter = {}

    if (name) {
      updatedCharacter.name = name
    }

    if (occupation) {
      updatedCharacter.occupation = occupation
    }

    if (cartoon) {
      updatedCharacter.cartoon = cartoon
    }

    if (weapon) {
      updatedCharacter.weapon = weapon
    }


    const updateBtn = document.querySelector('.edit-character-form send-data')


    charactersAPI.updateOneRegister(userInputId, updatedCharacter)
      .then(() => updateBtn.style.backgroundColor = 'green')

  });



  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    
    const newCharInputs = document.getElementById("new-character-form").elements
    
    const name = newCharInputs.name.value
    const occupation = newCharInputs.occupation.value
    const cartoon = newCharInputs.cartoon.checked
    const weapon = newCharInputs.weapon.value

    const newCharacter = {name, occupation, cartoon, weapon}

    const createBtn = document.querySelector(".new-character-form send-data")

    charactersAPI.createOneRegister(newCharacter)
      .then(() => createBtn.style.backgroundColor = 'green')
  });
});

