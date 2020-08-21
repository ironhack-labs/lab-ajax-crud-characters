class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
    .get(`${this.BASE_URL}/characters`)
    .then(response => {
      const data = response.data
      console.log(data)
      let str = '';
  
      //iterate over 'data' array
      data.forEach(character => {
        //bootstrap classes
        //add updateCharacter and deleteCharacter functions passing character.id
        str += `
            <li class="list-group-item">
                id: ${character.id} <br>
                Name: ${character.name} <br>
                Occupation: ${character.occupation} <br>
                Cartoon? ${character.cartoon} <br>
                Weapon: ${character.weapon}
            </li>`;
      });
              // insert characters in the list in the html
              document.getElementById('characters-list').innerHTML = str;
    })
    .catch(err => console.log(`Error while getting characters data, ${err}`))
  };


  getOneRegister (id) {
    axios
    .get(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      const data = response.data
      console.log(data)
      const newCharacterHtml = `
                <li class="list-group-item">
                   id: ${data.id} <br>
                   Name: ${data.name} <br>
                   Occupation: ${data.occupation} <br>
                   Cartoon? ${data.cartoon} <br>
                   Weapon: ${data.weapon}
                </li>`;

                    // insert characters in the list in the html
                    document.getElementById('characters-list').innerHTML += newCharacterHtml;
                    
                    //reset form
                    document.getElementById('character-id').reset();

    })
    .catch(err => console.log(`Error while getting single character data, ${err}`))
  }

  createOneRegister () {
    const name = document.getElementById('name-input').value;
    const occupation = document.getElementById('occupation-input').value;
    const weapon = document.getElementById('weapon-input').value;
    const cartoon = document.getElementById('cartoon-input').checked;

    const newCharacterInfo = {
      // name: name
      name,
      occupation,
      weapon,
      cartoon
    }
    axios
    .post(`${this.BASE_URL}/characters`, newCharacterInfo )
    .then(response => {
      const { name, occupation, weapon, cartoon } = response.data
      console.log(name,occupation,weapon,cartoon)
      document.getElementById('send-data').style.backgroundColor = "green";
    })
    .catch(err => console.log(`Error while saving a new character: ${err}`));
    document.getElementById('send-data').style.backgroundColor = "red";

  }



  updateOneRegister (id) {
    const charName = document.getElementById('update-name-input');
    const charOccupation = document.getElementById('update-occupation-input');
    const charWeapon = document.getElementById('update-weapon-input');
    const charId = document.getElementById('update-id-input');
    const cartoon = document.getElementById('update-cartoon-input');
      axios
        .get(`${this.BASE_URL}/characters/${id}`)
        .then(response => {s
          const { id, name, occupation, weapon } = response.data;
          // prefill the form
          charName.value = name;
          charOccupation.value = occupation;
          charWeapon.value = weapon;
          charId.value = id;
          cartoon.checked = cartoon
          

        })
        .catch(error => {
          error.response.status === 404 ? alert(`The id ${charId} doesn't exist.`) : alert('Server error! Sorry.');
          console.log('The error while getting a single character is: ', error.response);
        });


    const updatedCharacter = {
      name: charName.value,
      occupation: charOccupation.value,
      weapon: charWeapon.value,
      id: charId.value,
      cartoon: cartoon.checked
    };

    axios
    //put is used to update
      .put(`${this.BASE_URL}/characters/${id}`, updatedCharacter)
      .then(response => {
        // console.log(response);
        document.getElementById('push-data').style.backgroundColor = "green";


        // clear the update form
        document.getElementById('edit-character-form').reset();

      })
      .catch(error => console.log(`Error while updating a character: ${error}`));
      document.getElementById('push-data').style.backgroundColor = "red";

}

  



  deleteOneRegister (id) {
    const toDelete = confirm(`Are you sure you want to delete?`)
    if(toDelete){
    axios
    .delete(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      document.getElementById('delete-one').style.backgroundColor = "green";

      document.getElementById('form-container').reset();

    })
    .catch(err => console.log(`Error while DELETING single character data, ${err}`))
    document.getElementById('delete-one').style.backgroundColor = "red";
  }
  }
}
