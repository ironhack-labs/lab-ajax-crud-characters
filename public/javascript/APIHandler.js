class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    var config = {
      method: 'get',
      url: this.BASE_URL + '/characters',
      params: { }
    };

    axios(config)
    .then(response => {
      const theChar = document.getElementById('characters-container')
      theChar.innerHTML = ''

      response.data.forEach((character) => {
        theChar.innerHTML += `<div class="character-info">
        <div class="name">Id: ${character.id}</div>
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Cartoon: ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
        </div>`;
    })
    })
    .catch(error => {
      console.log(error);
    });
  }

  getOneRegister (id) {
    var config = {
      method: 'get',
      url: this.BASE_URL + `/characters/${id}`,
      params: { }
    };

    axios(config)
    .then(response => {
      const theChar = document.getElementById('characters-container')
      theChar.innerHTML = ''

      const oneElId = response.data;

      theChar.innerHTML += `<div class="character-info">
        <div class="name">Id: ${oneElId.id}</div>
        <div class="name">Name: ${oneElId.name}</div>
        <div class="occupation">Occupation: ${oneElId.occupation}</div>
        <div class="cartoon">Cartoon: ${oneElId.cartoon}</div>
        <div class="weapon">Weapon: ${oneElId.weapon}</div>
        </div>`;

        console.log(oneElId)
    }) 
    .catch(error => {
      console.log(error);
    });
  }

  createOneRegister (characterObjNew) {
    var config = {
      method: 'post',
      url: this.BASE_URL + '/characters',
      data: characterObjNew
    };

    axios(config)
    .then(response => {
        console.log(response.data)
    }) 
    .catch(error => {
      console.log(error);
    });
  }

  updateOneRegister (id, characterObjUpd) {
    var config = {
      method: 'patch',
      url: this.BASE_URL + `/characters/${id}`,
      data: characterObjUpd
    };

    axios(config)
    .then(response => {
        console.log(response.data)
    }) 
    .catch(error => {
      console.log(error);
    });
  }

  deleteOneRegister (id) {
    var config = {
      method: 'delete',
      url: this.BASE_URL + `/characters/${id}`,
      params: { }
    };

    axios(config)
    .then(response => {
      const deleteBtn = document.getElementById('delete-one');
      const deleteId = document.getElementById("deleteInput").value;

      if(deleteId === id){
        deleteBtn.style.backgroundColor = 'green';
      } else {
        deleteBtn.style.backgroundColor = 'red';
      }

        console.log(response.data)
    }) 
    .catch(error => {
      console.log(error);
    });
  }
}
