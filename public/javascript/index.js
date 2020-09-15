const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    showAllCharac()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    const characId = document.querySelector(".search input").value

    showOneCharac(characId)

    document.querySelector(".search input").value =""
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    event.preventDefault()
    const characId = document.querySelector(".delete input").value

    deleteOneCharac(characId)

    document.querySelector(".delete input").value = ""

  });

  // Update the character with the data to edit in the form
  let count = 0
  
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
      
    event.preventDefault()
    // For the first time the button is clicked, the form is complete with the data
      if (!count) {
        const characId = document.querySelector("#edit-charac").value
        
        showToEditCharac(characId)
        count++
      } else {
   // The second time the button is clicked, the edited values are submited 
        const inputs = document.querySelectorAll("#edit-character-form input")
        
        const characInfo = {
          name: inputs[1].value,
          occupation: inputs[2].value,
          weapon: inputs[3].value,
          cartoon: inputs[4].checked
        }
        
        const characId = inputs[0].value

        editCharacter(characId, characInfo) 
        restartEditForm()
        return count = 0
      }
      
    });
 
  

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const inputs = document.querySelectorAll("#new-character-form input")
    
    const characInfo = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked
    }
 
    createOneCharac(characInfo)

    inputs[0].value = ""
    inputs[1].value = ""
    inputs[2].value = ""
    inputs[3].checked = false
    
  });
});


// Show all the characters from the API
function showAllCharac() {
  charactersAPI.getFullList()
    .then(allCharac => {
      
      let html = ""
      allCharac.data.forEach(elm => {
        html += `<div class="character-info">
          <div class="name">Character Name: <span>${elm.name}</span></div>
          <div class="occupation">Character Occupation: <span>${elm.occupation}</span></div>
          <div class="cartoon">Is a Cartoon?: <span>${elm.cartoon}</span></div>
          <div class="weapon">Character Weapon: <span>${elm.weapon}</span></div>
        </div>`
        document.querySelector('.characters-container').innerHTML = html
      })
    })
    .catch(err => console.log(`Error: ${err}`))
}


// Show the Id selected character
function showOneCharac(characterId) {
  charactersAPI.getOneRegister(characterId)
    .then(oneCharac => {
      
      let html =`<div class="character-info">
          <div class="name">Character Name: <span>${oneCharac.data.name}</span></div>
          <div class="occupation">Character Occupation: <span>${oneCharac.data.occupation}</span></div>
          <div class="cartoon">Is a Cartoon?: <span>${oneCharac.data.cartoon}</span></div>
          <div class="weapon">Character Weapon: <span>${oneCharac.data.weapon}</span></div>
        </div>`
        document.querySelector('.characters-container').innerHTML = html
    })
    .catch(err => console.log(`Error: ${err}`))

}

// Create a new character
function createOneCharac(characterInfo) {
  charactersAPI.createOneRegister(characterInfo)
    .then(() => document.getElementById("send-data-create").classList.add('active')) //Set the button "submit" to green to indicate all is ok
    .catch(err => {
      document.getElementById("send-data-create").classList.add('error') //Set the button "submit" to red to indicate something is wrong
      console.log(`Error: ${err}`)
    })
}


// Delete one character
function deleteOneCharac(characterId) {
  charactersAPI.deleteOneRegister(characterId)
    .then(() => document.querySelector("#delete-one").classList.add('active')) //Set the button "submit" to green to indicate all is ok
    .catch(err => {
      document.querySelector("#delete-one").classList.add('error')  //Set the button "submit" to red to indicate something is wrong
      console.log(`Error: ${err}`)
    })
}


//Edit one character.
//First, get their info
function showToEditCharac(characterId) {
  charactersAPI.getOneRegister(characterId)
    .then(oneCharac => {

      !oneCharac.data.cartoon ? isCartoon =`` : isCartoon ="checked"
      let html =`<div class="field">
          <label for="id">ID: </label>
          <input type="text" name="chr-id" value="${oneCharac.data.id}">
        </div>

        <div class="field">
          <label for="name">Name: </label>
          <input type="text" name="name" value="${oneCharac.data.name}">
        </div>

        <div class="field">
          <label for="occupation">Occupation: </label>
          <input type="text" name="occupation" value="${oneCharac.data.occupation}">
        </div>

        <div class="field">
          <label for="weapon">Weapon: </label>
          <input type="text" name="weapon" value="${oneCharac.data.weapon}">
        </div>

        <div class="field">
          <label for="cartoon">Is a Cartoon: </label>
          <input name="cartoon" type="checkbox" ${isCartoon}">
        </div>

        <button id="send-data-edit">Update</button>`

      document.querySelector('#edit-character-form').innerHTML = html
      document.querySelector("#send-data-edit").classList.add('wait') //Set the button "submit" to yellow to indicate the operation is not finished
    })
    .catch(err => console.log(`Error: ${err}`))
}

// Two, edit their info
function editCharacter(characterId, characterInfo) {
  charactersAPI.updateOneRegister(characterId, characterInfo) 
    .then(() => {
      showOneCharac(characterId)
      document.querySelector("#send-data-edit").classList.remove('wait')
      document.querySelector("#send-data-edit").classList.add('active') //Set the button "submit" to green to indicate all is ok
    })
    .catch(err => {
      console.log(`Error: ${err}`)
      document.querySelector("#send-data-edit").classList.add('error')  //Set the button "submit" to red to indicate something is wrong
    }) 
}

//Restart the edit form to the original one
function restartEditForm() {

      let html= `<div class="field">
        <label for="id">ID: </label>
        <input type="text" name="chr-id" id="edit-charac">
        </div>

        <div class="field">
          <label for="name">Name: </label>
          <input type="text" name="name">
        </div>

          <div class="field">
            <label for="occupation">Occupation: </label>
            <input type="text" name="occupation">
        </div>

            <div class="field">
              <label for="weapon">Weapon: </label>
              <input type="text" name="weapon">
        </div>

              <div class="field">
                <label for="cartoon">Is a Cartoon: </label>
                <input name="cartoon" type="checkbox">
        </div>

                <button id="send-data-edit">Update</button>`


            
      document.querySelector('#edit-character-form').innerHTML = html
}