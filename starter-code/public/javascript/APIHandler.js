class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.charContainer = document.getElementsByClassName('characters-container')[0];
  }


  getFullList() {
    axios.get(`${this.BASE_URL}/characters`)
      .then(data => {
        let b = "";
        let charContainer = document.getElementsByClassName('characters-container');
        charContainer[0].innerHTML = "";
        data.data.map(element => {
          b += `<div class="character-info">
        <div class="name">Name: ${element.name}</div>
        <div class="occupation">Ocupation: ${element.occupation}</div>
        <div class="cartoon">Cartoon: ${element.cartoon}</div>
        <div class="weapon">Weapon: ${element.weapon}</div>
      </div>`
        });
        charContainer[0].innerHTML = b;
      }).catch(err => err)
  }

  getOneRegister(id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(data => {
        let b = "";
        this.charContainer.innerHTML = "";
        console.log(data);
        b += `<div class="character-info">
      <div class="name">Name: ${data.data.name}</div>
      <div class="occupation">Ocupation: ${data.data.occupation}</div>
      <div class="cartoon">Cartoon: ${data.data.cartoon}</div>
      <div class="weapon">Weapon: ${data.data.weapon}</div>
    </div>`
        this.charContainer.innerHTML = b;
      }).catch(err => {
        this.charContainer.innerHTML = `<h1>Errooo nao existe<h1>`
      })
  }

  createOneRegister(character) {
    axios.post(`${this.BASE_URL}/characters/`, character)
      .then(result =>
        console.log(result)
      )
      .catch(err => err)
  }

  updateOneRegister(character) {
    axios.put(`${this.BASE_URL}/characters/${character.id}`, character)
      .then(result =>
        console.log(result)
      )
      .catch(err => err)
  }

  deleteOneRegister(id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(data => {
      this.charContainer.innerHTML = `<h1>O personagem ${data.name} foi excluido<h1>`
     }).catch(err => {
      this.charContainer.innerHTML = `<h1>Errooo nao existe<h1>`
    })
  }
  updateFields(id) {
    let charUpdate = document.getElementsByClassName('update-char');
    let objNew = {
      name: charUpdate[0],
      occupation: charUpdate[1],
      weapon: charUpdate[2],
      cartoon: charUpdate[3]
    } 
    console.log(objNew)
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(oldData => {
      console.log(oldData);
      objNew.name.value = oldData.data.name;
      objNew.occupation.value = oldData.data.occupation;
      objNew.weapon.value = oldData.data.weapon;
      objNew.cartoon.checked = oldData.data.cartoon;

    })

    
  }
}

