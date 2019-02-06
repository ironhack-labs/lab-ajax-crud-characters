class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(`${this.BASE_URL}/characters`)
      .then((response) => {
        const containerPrincipal = document.getElementsByClassName('characters-container');
        containerPrincipal[0].innerHTML = '';
        response.data.forEach((element) => {
          const text = `
       <div class="character-info">
       <div class="id">ID: ${element.id}</div>
       <div class="name">Name: ${element.name}</div>
       <div class="occupation">Occupation: ${element.occupation}</div>
       <div class="cartoon">Cartoon: ${element.cartoon}</div>
       <div class="weapon">Weapon: ${element.weapon}</div>
     </div>`;
          containerPrincipal[0].innerHTML += text;
        });
        console.log('Response from API is: ',
          response.data);
      })
      .catch((err) => {
        console.log('Error is: ', err);
      });
  }

  getOneRegister() {
    const searchID = document.getElementById('searchID').value;
    axios.get(`${this.BASE_URL}/characters/${searchID}`)
      .then((response) => {
        const containerPrincipal = document.getElementsByClassName('characters-container');
        containerPrincipal[0].innerHTML = '';
        const text = `
       <div class="character-info">
       <div class="name">Name: ${response.data.name}</div>
       <div class="occupation">Occupation: ${response.data.occupation}</div>
       <div class="cartoon">Cartoon: ${response.data.cartoon}</div>
       <div class="weapon">Weapon: ${response.data.weapon}</div>
     </div>`;
        containerPrincipal[0].innerHTML += text;
        console.log(response.data);
      });
  }

  createOneRegister() {
    const name = document.getElementById('createName').value;
    const occupation = document.getElementById('createOccupation').value;
    const weapon = document.getElementById('createWeapon').value;
    const cartoon = document.getElementById('createCartoon').checked;
    console.log(cartoon);
    axios.post(`${this.BASE_URL}/characters`, { name, occupation, weapon, cartoon })
      .then(() => {
        this.getFullList();
      })
      .catch((err) => {
        console.log('Error is: ', err);
      });
  }

  updateOneRegister() {
    const id = document.getElementById('updateID').value;
    const name = document.getElementById('updateName').value;
    const occupation = document.getElementById('updateOccupation').value;
    const weapon = document.getElementById('updateWeapon').value;
    const cartoon = document.getElementById('updateCartoon').checked;
    axios.put(`${this.BASE_URL}/characters/${id}`, { name, occupation, weapon, cartoon })
      .then(() => {
        this.getFullList();
      });
  }

  deleteOneRegister() {
    const deleteID = document.getElementById('deleteID').value;
    axios.delete(`${this.BASE_URL}/characters/${deleteID}`)
      .then((response) => {
        this.getFullList();
        console.log(response.data);
      })
      .catch((err) => {
        console.log('Error is: ', err);
      });
  }
}
