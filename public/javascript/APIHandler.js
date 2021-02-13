class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList  () {
     
    axios.get(this.BASE_URL + '/characters')
    .then( response =>{
      const data = response.data;
    

      let str = '';

      data.forEach(element => {
        
        str += `
        <div class="character-info" >
        <div class="name">${element.name}</div>
        <div class="occupation">${element.occupation}</div>
        <div class="cartoon">${element.cartoon}</div>
        <div class="weapon">${element.weapon}</div>
        </div>`
        
      });
        document.getElementsByClassName('characters-container')[0].innerHTML= str;  
    })
    .catch( err => console.log(err))
  }

  getOneRegister (id) {
    
    axios.get(this.BASE_URL + '/characters/'+ id)
    
    .then( caracterFromApi => {
      const data = caracterFromApi.data;

    const { name, occupation, cartoon, weapon } = data;
        let str = '';
        str += `
        <div class="character-info" >
        <div class="name">${name}</div>
        <div class="occupation">${occupation}</div>
        <div class="cartoon">${cartoon}</div>
        <div class="weapon">${weapon}</div>
        </div>`
    
        document.getElementsByClassName('characters-container')[0].innerHTML= str;  
    })
    .catch(err => console.log(err))
  }

  createOneRegister (newCharacterInfo) {
    
    
    axios.post(this.BASE_URL + '/characters',newCharacterInfo)
    .then(response => {
      const data = response.data; 
      const { name, id, occupation, weapon, cartoon } = data;
      console.log(data);
      
      //document.getElementById('new-character-form').reset();
     // this.getFullList();
  })

  }

  updateOneRegister (id,updatedCharacter) {
    /* PREVIEW
    const charName = document.getElementById('update-name');
    const charOccupation = document.getElementById('update-occupation');
    const charWeapon = document.getElementById('update-weapon');
    const charCartoon = document.getElementById('update-cartoon');
    const charId = document.getElementById('char-id');

    axios
    .get(this.BASE_URL + '/characters/'+ id)
    .then(response => {
      const { id, name, occupation, weapon, cartoon } = response.data;
      charName.value = name;
      charOccupation.value = occupation;
      charWeapon.value = weapon;
      charCartoon.value = cartoon;
      charId.value = id;
      document.getElementById('edit-character-form').style.display = 'block';
    })
    .catch(error => {
      error.response.status === 404 ? alert(`The id ${charId} doesn't exist.`) : alert('Server error! Sorry.');
 
      console.log('The error while getting a single character is: ', error.response);
      
    });*/
    axios
    .put(`${this.BASE_URL}/characters/${id}`, updatedCharacter)
    .then(response => {
      console.log('entrei no update');
    
      document.getElementById('edit-character-form').reset();
     
      document.getElementById('edit-character-form').style.display = 'none';
      //this.getFullList();
    })
    .catch(error => console.log(`Error while updating a character: ${error}`));

  }

  deleteOneRegister (id) {
    console.log('entrei delete');
    if (id == 1 || id == 2) {
      alert(`Character with id ${id} can't be deleted!`);
      return;
    }
    const toDelete = confirm('Are you sure you want to delete?');
    if (toDelete) {
      axios
        .delete(`${this.BASE_URL}/characters/${id}`)
        .then(response => {
          // Alert the succes message
          alert(response.data);
          // fetch all characters
          this.getFullList();
        })
        .catch(err => console.log(`Err while deleting character: ${err}`));
    }
  }
  
}

const apiHander = new APIHandler('http://localhost:8000');
document.getElementById('fetch-all').addEventListener('click', event => {
apiHander.getFullList();
})

document.getElementById('fetch-one').addEventListener('click', event => {

    const charId = document.getElementById('character-id').value;
    apiHander.getOneRegister(charId);
  })
  document.getElementById('delete-one').addEventListener('click', event => {

    const charId = document.getElementById('character-id-delete').value;
    apiHander.deleteOneRegister(charId);
  })
  document.getElementById('new-character-form').addEventListener('submit', event => {
    event.preventDefault(); 
    
    const name = document.getElementById('name').value;
    const occupation = document.getElementById('occupation').value;
    const weapon = document.getElementById('weapon').value;
    const cartoon = document.getElementById('cartoon').value;
   
    const newCharacterInfo = {
      name,
      occupation,
      weapon, 
      cartoon
    };
      apiHander.createOneRegister(newCharacterInfo);
    });
    document.getElementById('edit-character-form').addEventListener('submit', event => {
      event.preventDefault();
      const id = document.getElementById('chr-id').value;
      const name = document.getElementById('update-name').value;
      const occupation = document.getElementById('update-occupation').value;
      const weapon = document.getElementById('update-weapon').value;
      const cartoon = document.getElementById('update-cartoon').checked;
     
      const updatedCharacter = {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon
      };
      apiHander.updateOneRegister(id,updatedCharacter);
    });
