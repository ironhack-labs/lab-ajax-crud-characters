const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(data => {
        console.log('getFullList() > response from API: ', data);

        //delete everything inside characters container
        document.querySelector('.characters-container').innerHTML = '';

        //create new card for every character on the list
        data.forEach(character => {
          const characterInfo = document.createElement('div');

          characterInfo.setAttribute("class", "character-info flex");

          characterInfo.innerHTML = `
            <div class="tags">
              <div class="id">Id: </div>
              <div class="name">Name: </div>
              <div class="occupation">Occupation: </div>
              <div class="cartoon">Is a Cartoon?:</div>
              <div class="weapon">Weapon:</div>
            </div>
            <div class="detail">
              <div class="getName">${character.id}</div>
              <div class="getName">${character.name}</div>
              <div class="getOccupation">${character.occupation}</div>
              <div class="getCartoon">${character.cartoon}</div>
              <div class="getWeapon">${character.weapon}</div>
            </div>
          `;
          document.querySelector('.characters-container').appendChild(characterInfo);
        });
      })
      .catch(err => console.log('error occurred', err));
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    //Get ID from input
    const characterId = document.getElementById('character-id').value;

    charactersAPI.getOneRegister(characterId)
      .then(characterData => {
        console.log('getOneRegister() > response from API: ', characterData);

        //delete everything inside characters container
        document.querySelector('.characters-container').innerHTML = '';

        //create new card for the searched character
        const characterInfo = document.createElement('div');

        characterInfo.setAttribute("class", "character-info flex");

        characterInfo.innerHTML = `
            <div class="tags">
              <div class="id">Id: </div>
              <div class="name">Name: </div>
              <div class="occupation">Occupation: </div>
              <div class="cartoon">Is a Cartoon?:</div>
              <div class="weapon">Weapon:</div>
            </div>
            <div class="detail">
              <div class="getId">${characterData.id}</div>
              <div class="getName">${characterData.name}</div>
              <div class="getOccupation">${characterData.occupation}</div>
              <div class="getCartoon">${characterData.cartoon}</div>
              <div class="getWeapon">${characterData.weapon}</div>
            </div>
          `;
        document.querySelector('.characters-container').appendChild(characterInfo);

        //clear text from input
        document.getElementById('character-id').value = '';

      })
      .catch(err => {
        console.log('error occurred', err);

        //change color button to red with error message
        document.getElementById("fetch-one").style.backgroundColor = "red";
        document.getElementById("fetch-one").innerText = "Id doesn't exist!";

        //change button to initial state after 2s and clear input
        setTimeout(() => {
          document.getElementById('character-id').value = '';
          document.getElementById("fetch-one").style.background = "none";
          document.getElementById("fetch-one").innerText = "Fetch one";
        }, 1000);
      });
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    //Get ID from input
    const characterId = document.getElementById('character-id-delete').value;

    charactersAPI.deleteOneRegister(characterId)
      .then(response => {
        console.log('Character has been successfully deleted.');

        //Change button color to green with success message
        document.getElementById("delete-one").style.backgroundColor = "green";
        document.getElementById("delete-one").innerText = "Success!";

        //clear all results from characters-container and clear input text
        document.querySelector('.characters-container').innerHTML = '';
        document.getElementById('character-id-delete').value = '';

        //change button to initial state after 2s
        setTimeout(() => {
          document.getElementById("delete-one").style.background = "none";
          document.getElementById("delete-one").innerText = "Delete one";
        }, 1000);
      })
      .catch(err => {
        console.log('Character not found.');

        //Change button color to red with error message and clean input text
        document.getElementById("delete-one").style.backgroundColor = "red";
        document.getElementById("delete-one").innerText = "Id doesn't exist!";
        document.getElementById('character-id-delete').value = '';

        //change button to initial state after 2s
        setTimeout(() => {
          document.getElementById("delete-one").style.background = "none";
          document.getElementById("delete-one").innerText = "Delete one";
        }, 1000);
      });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    //Prevent default submission behaviour
    event.preventDefault();

    //Get ID from input
    const characterId = document.getElementById('editId').value;

    //GET UPDATED CHARACTER INFO
    //------Cartoon Checkbox set to true or false
    if (document.getElementById('editCartoon').checked === true) {
      document.getElementById('editCartoon').value = true;
    } else {
      document.getElementById('editCartoon').value = false;
    }

    //------Updated character info from form
    const updatedCharacter = {
      name: document.getElementById('editName').value,
      occupation: document.getElementById('editOccupation').value,
      weapon: document.getElementById('editWeapon').value,
      cartoon: document.getElementById('editCartoon').value,
    };

    charactersAPI.updateOneRegister(characterId, updatedCharacter)
      .then(characterData => {
        console.log('Character has been successfully updated.');

        //delete everything inside characters container
        document.querySelector('.characters-container').innerHTML = '';

        //create new card for the updated character
        const characterInfo = document.createElement('div');

        characterInfo.setAttribute("class", "character-info flex");

        characterInfo.innerHTML = `
            <div class="tags">
              <div class="id">Id: </div>
              <div class="name">Name: </div>
              <div class="occupation">Occupation: </div>
              <div class="cartoon">Is a Cartoon?:</div>
              <div class="weapon">Weapon:</div>
            </div>
            <div class="detail">
              <div class="getId">${characterData.id}</div>
              <div class="getName">${characterData.name}</div>
              <div class="getOccupation">${characterData.occupation}</div>
              <div class="getCartoon">${characterData.cartoon}</div>
              <div class="getWeapon">${characterData.weapon}</div>
            </div>
          `;
        document.querySelector('.characters-container').appendChild(characterInfo);

        //Change button color to green with success message
        document.getElementById("send-data-update").style.backgroundColor = "green";
        document.getElementById("send-data-update").innerText = "Success!";
        
        //reset form 
        document.getElementById('edit-character-form').reset();

        //change button to initial state after 2s
        setTimeout(() => {
          document.getElementById("send-data-update").style.background = "none";
          document.getElementById("send-data-update").innerText = "Update";
        }, 1000);
      })
      .catch(err => {
        console.log('Update Character: Something went wrong');

        //Change button color to red with error message
        document.getElementById("send-data-update").style.backgroundColor = "red";
        document.getElementById("send-data-update").innerText = "Something went wrong!";

        //change button to initial state after 2s
        setTimeout(() => {
          document.getElementById("send-data-update").style.background = "none";
          document.getElementById("send-data-update").innerText = "Update";
        }, 1000);
      });

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    //Prevent default submission behaviour
    event.preventDefault();

    //GET NEW CHARACTER INFO
    //------Cartoon Checkbox set to true or false
    if (document.getElementById('newCartoon').checked === true) {
      document.getElementById('newCartoon').value = true;
    } else {
      document.getElementById('newCartoon').value = false;
    }

    //------New character info from form
    const newCharacter = {
      name: document.getElementById('newName').value,
      occupation: document.getElementById('newOccupation').value,
      weapon: document.getElementById('newWeapon').value,
      cartoon: document.getElementById('newCartoon').value,
    };

    charactersAPI.createOneRegister(newCharacter)
      .then(characterData => {
        //delete everything inside characters container
        document.querySelector('.characters-container').innerHTML = '';

        //create new card for the new character
        const characterInfo = document.createElement('div');

        characterInfo.setAttribute("class", "character-info flex");

        characterInfo.innerHTML = `
            <div class="tags">
              <div class="id">Id: </div>
              <div class="name">Name: </div>
              <div class="occupation">Occupation: </div>
              <div class="cartoon">Is a Cartoon?:</div>
              <div class="weapon">Weapon:</div>
            </div>
            <div class="detail">
              <div class="getId">${characterData.id}</div>
              <div class="getName">${characterData.name}</div>
              <div class="getOccupation">${characterData.occupation}</div>
              <div class="getCartoon">${characterData.cartoon}</div>
              <div class="getWeapon">${characterData.weapon}</div>
            </div>
          `;
        document.querySelector('.characters-container').appendChild(characterInfo);

        //Change button color to green with success message
        document.getElementById("send-data-new").style.backgroundColor = "green";
        document.getElementById("send-data-new").innerText = "Success!";

        //reset form 
        document.getElementById('new-character-form').reset();

        //change button to initial state after 2s
        setTimeout(() => {
          document.getElementById("send-data-new").style.background = "none";
          document.getElementById("send-data-new").innerText = "Create";
        }, 1000);
      })
      .catch(err => {
        console.log('New Character: Something went wrong');

        //Change button color to red with error message
        document.getElementById("send-data-new").style.backgroundColor = "red";
        document.getElementById("send-data-new").innerText = "Something went wrong!";

        //change button to initial state after 2s
        setTimeout(() => {
          document.getElementById("send-data-new").style.background = "none";
          document.getElementById("send-data-new").innerText = "Create";
        }, 1000);
      });
  });
});