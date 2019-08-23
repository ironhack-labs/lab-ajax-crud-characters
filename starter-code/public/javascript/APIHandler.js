class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  // Get all the characters info from http://localhost:8000/characters
  getFullList () {
    axios.get(`${this.BASE_URL}/characters/`).then(data => {
      let html = ''
      data.data.forEach(char => {
          html += `
          <div class="character-info" id=${char.id}>
          <div class="name">Name: <span>${char.name}</span></div>
          <div class="id">ID: <span>${char.id}</span></div>
          <div class="occupation">Occupation: <span>${char.occupation}</span></div>
          <div class="cartoon">Is this a cartoon?: <span>${char.cartoon}</span></div>
          <div class="weapon">Weapon: <span>${char.weapon}</span></div>
          </div>
          `;
      })
      document.querySelector(".characters-container").innerHTML = html
    }).catch(err =>  console.log(err));
  }

  // Get a single character info from http://localhost:8000/characters/:id
  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`).then(data => {
      let html = `    
        <div class="character-info" id=${id}>
        <div class="name">Name: <span>${data.data.name}</span></div>
        <div class="id">ID: <span>${data.data.id}</span></div>
        <div class="occupation">Occupation: <span>${data.data.occupation}</span></div>
        <div class="cartoon">Is this a cartoon?: <span>${data.data.cartoon}</span></div>
        <div class="weapon">Weapon: <span>${data.data.weapon}</span></div>
        </div>`;
        document.querySelector(".characters-container").innerHTML = html;
    }).catch(err =>  {
      alert('No character with that ID found.');
      console.log(err);
    });
  }

  // Create a single character posting the data to http://localhost:8000/characters
  createOneRegister (character) {
    let button = document.querySelector('#new-character-form > button')
    axios.post(`${this.BASE_URL}/characters`, character).then(response => {
      button.style.backgroundColor = "#42f471";
      setTimeout(function(){button.style.backgroundColor = ""}, 1000);
      document.querySelector("#new-character-form > div:nth-child(1) > input[type=text]").value = '';
      document.querySelector("#new-character-form > div:nth-child(2) > input[type=text]").value = '';
      document.querySelector("#new-character-form > div:nth-child(3) > input[type=text]").value = '';
    }).catch(error => {
      button.style.backgroundColor = "#D43C20";
    })

  }

  // Edit a single character through his id in http://localhost:8000/characters/:id
  updateOneRegister (char) {
    axios.patch(`${this.BASE_URL}/characters/${char.id}`, char).then(response => {
      alert(`Your character has been updated!`);
      console.log(response);
    }).catch(err =>  console.log(err));
  }

  // Delete a single character through his id in http://localhost:8000/characters/:id
  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`).then(data => {
      alert('Your character was deleted.');
      console.log(data)
    }).catch(error => {
      alert(error, 'No character with that ID found')
    })
  }
}
