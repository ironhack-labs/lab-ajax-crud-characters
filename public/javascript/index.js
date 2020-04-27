const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', (event) => {
  event.preventDefault();

// Fetch all
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(apiResponse => {
        const charactersContainer = document.getElementsByClassName('characters-container')[0];  // needs 0 here because returns an array
        charactersContainer.innerHTML = "";
        apiResponse.data.forEach(element => {
          charactersContainer.innerHTML +=
          `<div class="character-info">
            <div class="name">${element.name}</div>
            <div class="occupation">${element.occupation}</div>
            <div class="cartoon">${element.cartoon}</div>
            <div class="weapon">${element.weapon}</div>
          </div>`
        });
        document.getElementById('fetch-all').classList.add('active')
      })
      .catch(apiError => {
        console.log(apiError)
      });
  });

// Fetch one
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const getId = document.querySelector('input[name="character-id"]').value;
    const charactersContainer = document.getElementsByClassName('characters-container')[0];  // needs 0 here because returns an array
    charactersAPI.getOneRegister(getId)
      .then(apiResponse => {
        charactersContainer.innerHTML =
          `<div class="character-info">
              <div class="name">${apiResponse.data.name}</div>
              <div class="occupation">${apiResponse.data.occupation}</div>
              <div class="cartoon">${apiResponse.data.cartoon}</div>
              <div class="weapon">${apiResponse.data.weapon}</div>
          </div>`
        
        // Edit one inside the fetch one
        
        // All the fields for displaying the character's data
        const id = document.getElementById("a")
        id.value = apiResponse.data.id
        const name = document.getElementById("b")
        name.value = apiResponse.data.name
        const occupation = document.getElementById("c")
        occupation.value = apiResponse.data.occupation
        const weapon = document.getElementById("d")
        weapon.value = apiResponse.data.weapon
      
        // On checke la checkbox si apiResponse.data.cartoon = true
        const cartoon = document.getElementById("e")
        if (apiResponse.data.cartoon) {
          cartoon.checked = true;
        } else {
          cartoon.checked = false;
        }

        document.getElementById('edit-character-form').addEventListener('submit', function (event) {
          event.preventDefault();
          // Inputted data : HAS TO BE HERE INSIDE THIS EVENT AND NOT BEFORE, otherwise it does not know
          const character = {
            id: id.value,
            name: name.value,
            occupation: occupation.value,
            weapon: weapon.value,
            cartoon: cartoon.checked
          }

          charactersAPI.updateOneRegister(getId, character)
            .then(dbResponse => {
              document.getElementById('send-data-two').classList.add('active')
              console.log("Character with id = " + getId + " has been updated: " + dbResponse)
            })
            .catch(dbError => {
              console.log(dbError)
            });
        });
      })
      .catch(apiError => {
        console.log(apiError)
      });
  });

// Delete one
  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    const id = document.querySelector('input[name="character-id-delete"]').value;
    charactersAPI.deleteOneRegister(id)
      .then(dbResponse => {
        console.log("This element has been deleted", dbResponse)
      })
      .catch(dbError => {
        console.log(dbError)
    })
  });


// Create one
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const newCharacterForm = document.getElementById('new-character-form');

    const name = newCharacterForm.querySelector('input[name="name"]').value;
    const occupation = newCharacterForm.querySelector('input[name="occupation"]').value;
    const weapon = newCharacterForm.querySelector('input[name="weapon"]').value;
    const cartoon = newCharacterForm.querySelector('input[name="cartoon"]').checked;

    const newCharacter = { name, occupation, weapon, cartoon };

    charactersAPI.createOneRegister(newCharacter)
      .then(dbResponse => {
        document.getElementById('send-data').classList.add('active')
        console.log(dbResponse);
      })
      .catch(dbError => {
        document.getElementById('send-data').style.backgroundColor = "red"
        console.log(dbError);
      })
  });
});
