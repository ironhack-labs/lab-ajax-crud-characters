const charactersAPI = new APIHandler('http://localhost:8000');

/* Retrieve Character to Update info */
const charName = document.getElementById('update-name-input');
const charOccupation = document.getElementById('update-occupation-input');
const charWeapon = document.getElementById('update-weapon-input');
const charCartoon = document.getElementById('update-cartoon-input');
const charId = document.getElementById('char-id');

const updateCharacter = (id) => {
  console.log(`Character Id: ${id}`);

  charactersAPI.getOneRegister(id)
   .then(response => {
      console.log(response.data)
      const { id, name, occupation, weapon, isCartoon }  = response.data;

      charName.value = name;
      charOccupation.value = occupation;
      charWeapon.value = weapon;
      charCartoon.value = isCartoon;
      charId.value = id;
   })
   .catch(err=> {
     console.log('The error while getting a single character is: ', err.response);
   })
}
// This block of code has to be outside of the window.addEventListener for the 'onclik' attribute to work.

window.addEventListener('load', () => {
  // GET ALL CHARACTERS
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(response => {
        console.log('Response from the API: ', response);
        const data = response.data;
        console.log('The array of characters: ', data);

        let str = '';

        data.forEach(character => {
          const {
            id,
            name,
            occupation,
            cartoon,
            weapon
          } = character
          str += `
            <div class="characters-container ">
              <div class="character-info ">
                <div class="id">Id: <span>${id}</span></div>
                <div class="name">Character Name: <span>${name}</span></div>
                <div class="occupation">Character Occupation: <span>${occupation}</span></div>
                <div class="cartoon">Is a Cartoon?: <span>${cartoon}</span></div>
                <div class="weapon">Character Weapon: <span>${weapon}</span></div>
                <button onclick="updateCharacter(${id})">Update</button>
              </div>
            </div>
          `
        });
        document.getElementById('all-characters').innerHTML = str;
      })
      .catch(err => console.log(`Error while getting the list of characters: ${err}`));
    document.getElementById('all-characters').classList.toggle('hidden');
  });

  // GET ONE CHARACTER
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementById('character-id').value;
    document.getElementById('get-one-character').classList.toggle('hidden');
    charactersAPI.getOneRegister(id)
      .then(response => {
        console.log('Response from the API: ', response);
        const data = response.data;

        const {
          id,
          name,
          occupation,
          cartoon,
          weapon
        } = data

        if (id === undefined) {
          document.getElementById('id-error').classList.remove('hidden');
          setTimeout(() => {
            document.getElementById('id-error').classList.add('hidden');
          }, 2000)
        } else {
          let oneCharacter = `
          <div class="characters-container">
            <div class="character-info mb-3">
              <div class="id">Id: <span>${id}</span></div>
              <div class="name">Character Name: <span>${name}</span></div>
              <div class="occupation">Character Occupation: <span>${occupation}</span></div>
              <div class="cartoon">Is a Cartoon?: <span>${cartoon}</span></div>
              <div class="weapon">Character Weapon: <span>${weapon}</span></div>
              <button onclick="updateCharacter(${id})">Update</button>
            </div>
          </div>
        `
          document.getElementById('get-one-character').innerHTML = oneCharacter;

          // Characther to delete info:
          document.getElementById('get-character-to-delete').innerHTML = oneCharacter;
        }

      })
      .catch(err => {
        console.log(`Error while getting the details of the character: ${err}`);
        document.getElementById('id-error').classList.remove('hidden');
        setTimeout(() => {
          document.getElementById('id-error').classList.add('hidden');
        }, 2000)
      });
  });

  // DELETE ONE CHARACTER
  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementById('character-id-delete').value;

    document.getElementById('get-character-to-delete').classList.remove('hidden');
    charactersAPI.getOneRegister(id);

    //const id = document.getElementById('character-id-delete').value;
    document.getElementById('confirm-deletion').classList.remove('hidden');
    //charactersAPI.getOneRegister(id);

    /* Confirm deletion */
    document.getElementById('confirm-deletion-btn').addEventListener('click', function (event) {

      const id = document.getElementById('character-id-delete').value;
      document.getElementById('confirm-deletion').classList.add('hidden');

      charactersAPI.deleteOneRegister(id)
        .then(response => {
          console.log('Response from the API: ', response);
          document.getElementById('successfuly-deleted').classList.remove('hidden');
          //alert(response.data);
          charactersAPI.getFullList();
          setTimeout(() => {
            document.getElementById('successfuly-deleted').classList.add('hidden');
          }, 2000)
        })
        .catch(err => {
          console.log(`Error while deleting the character: ${err}`)
        });
    });

    /* Cancel deletion */
    document.getElementById('cancel-deletion').addEventListener('click', function (event) {
      document.getElementById('confirm-deletion').classList.add('hidden');
    });
  });

  // UPDATE ONE CHARACTER
    document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const charId= document.getElementById('char-id').value;
    console.log('CharId: ', charId)

    const updatedCharacter = {
      name: charName.value,
      occupation: charOccupation.value,
      weapon: charWeapon.value,
      cartoon: charCartoon.value
    }
    console.log('updatedCharacter: ', updatedCharacter)

    charactersAPI.updateOneRegister(charId, updatedCharacter)
      .then(response => {
        console.log('Response from the API: ', response)
        charactersAPI.getFullList();
        document.getElementById('update').style.backgroundColor = 'green';
        document.getElementById('update').innerHTML = 'Succesfully updated';
        setTimeout(() => {
          document.getElementById('update').style.background = 'none';
          document.getElementById('update').innerHTML = 'Update';
          document.getElementById('edit-character-form').reset();
        }, 2000)
      })
      .catch(err => {
        console.log(`Error while updating the character: ${err}`)
        document.getElementById('update').style.backgroundColor = 'red';
        document.getElementById('update').innerHTML = 'Error';
        setTimeout(() => {
          document.getElementById('update').style.background = 'none';
          document.getElementById('update').innerHTML = 'Create';
          document.getElementById('edit-character-form').reset();
        }, 2000)
      });
  });

  // CREATE ONE CHARACTER
  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault();

    const name = document.getElementById('name-input').value;
    const occupation = document.getElementById('occupation-input').value;
    const weapon = document.getElementById('weapon-input').value;
    const cartoon = document.getElementById('cartoon-input').value;

    const createdCharacter = {
      name,
      occupation,
      weapon,
      cartoon
    };

    charactersAPI.createOneRegister(createdCharacter)
      .then(response => {
        console.log('Response from the API: ', response)
        document.getElementById('create').style.backgroundColor = 'green';
        document.getElementById('create').innerHTML = 'Succesfully created';
        setTimeout(() => {
          document.getElementById('create').style.background = 'none';
          document.getElementById('create').innerHTML = 'Create';
          document.getElementById('new-character-form').reset();
        }, 2000)
      })
      .catch(err => {
        console.log(`Error while creating a new character: ${err}`)
        document.getElementById('create').style.backgroundColor = 'red';
        document.getElementById('create').innerHTML = 'Error';
        setTimeout(() => {
          document.getElementById('create').style.background = 'none';
          document.getElementById('create').innerHTML = 'Create';
          document.getElementById('new-character-form').reset();
        }, 1500)
      });
  });
});