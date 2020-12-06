class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
    .get(this.BASE_URL + '/characters')
    .then(response => {
      const data = response.data;
      let allCharactersHtml = '';
      
      data.forEach(character => {
        allCharactersHtml += `
        <div class="character-info">
          <div class="id">Character Id: ${character.id}</div>
          <div class="name">Character Name: ${character.name}</div>
          <div class="occupation">Character Occupation: ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
          <div class="weapon">Character Weapon: ${character.weapon}</div>
        </div>
        `
      });
      document.getElementById('characters-container').innerHTML = allCharactersHtml;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  getOneRegister(id) {
    axios
    .get(this.BASE_URL + `/characters/${id}`)
    .then(response => {
      const data = response.data;
      let oneCharacterHtml = `
      <div class="character-info">
        <div class="id">Character ID: ${data.id}</div>
        <div class="name">Character Name: ${data.name}</div>
        <div class="occupation">Character Occupation: ${data.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${data.cartoon}</div>
        <div class="weapon">Character Weapon: ${data.weapon}</div>
      </div>
      `
      
      document.getElementById('characters-container').innerHTML = oneCharacterHtml;
    })
    .catch((err) => {
      console.log(err);
    });
  }

  createOneRegister() {
    const name = document.getElementById('name-input').value;
    const occupation = document.getElementById('occupation-input').value;
    const weapon = document.getElementById('weapon-input').value;
    let cartoon = document.getElementById('cartoon-input').value;

    if(cartoon){
      cartoon = true
    } else {
      cartoon = false
    }

    axios
    .post(this.BASE_URL + '/characters', { name, occupation, weapon, cartoon })
    .then(() => {
      document.getElementsByClassName('create-character')[0].classList.add('active');
      setTimeout(() => {
        document.getElementsByClassName('create-character')[0].classList.remove('active');
      }, 1000);
      document.getElementById('new-character-form').reset();
    })
    .catch((err) => {
      console.log(err);
      document.getElementsByClassName('create-character')[0].classList.add('error');
      setTimeout(() => {
        document.getElementsByClassName('create-character')[0].classList.remove('error');
      }, 1000);
      alert('There was an error, try creating a character again!');
    });
  }

  updateOneRegister(id) {
    const newName = document.getElementById('edit-name-input').value;
    const newOccupation = document.getElementById('edit-occupation-input').value;
    const newWeapon = document.getElementById('edit-weapon-input').value;
    let newIsCartoon = document.getElementById('edit-cartoon-input').value;

    if(newIsCartoon === 'on'){
      newIsCartoon = true
    } else {
      newIsCartoon = false
    }

    axios
    .put(this.BASE_URL + `/characters/${id}`, { name: newName, occupation: newOccupation, weapon: newWeapon, cartoon: newIsCartoon })
    .then(() => {
      document.getElementsByClassName('edit-character')[0].classList.add('active');
      setTimeout(() => {
        document.getElementsByClassName('edit-character')[0].classList.remove('active');
      }, 1000);
      document.getElementById('edit-character-form').reset();
    })
    .catch((err) => {
      console.log(err);
      document.getElementsByClassName('edit-character')[0].classList.add('error');
      setTimeout(() => {
        document.getElementsByClassName('edit-character')[0].classList.remove('error');
      }, 1000);
    });
  }

  deleteOneRegister(id) {
    const toDelete = confirm('Are you sure you want to delete this character?');
    if (toDelete) {
    axios
    .delete(this.BASE_URL + `/characters/${id}`)
    .then(() => {
      document.getElementById('delete-one').classList.add('active');
      setTimeout(() => {
        document.getElementById('delete-one').classList.remove('active');
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
      document.getElementById('delete-one').classList.add('error');
      setTimeout(() => {
        document.getElementById('delete-one').classList.remove('error');
      }, 1000);
    });
    }
  }
}
