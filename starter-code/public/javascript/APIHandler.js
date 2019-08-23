class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
  //Get all the characters info from http://localhost:8000/characters
  getFullList () {
    axios.get(`${this.BASE_URL}/characters`).then((data) => {
      //array = data
      let html = "" 
      data.data.forEach(char => {
        html += `<div class="character-info">
          <div class="name">Name: <span>${char.name}</span></div>
          <div class="occupation">Occupation: <span>${char.occupation}</span></div>
          <div class="cartoon">Cartoon? <span>${char.cartoon}</span></div>
          <div class="weapon">Weapon? <span>${char.weapon}</span></div></div>`
      })
    document.querySelector(".characters-container").innerHTML = html
    })
  }
  //Get a single character info from http://localhost:8000/characters/:id
  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`).then(data => {
      let html = `<div class="characters-container">
      <div class="character-info">
        <div class="name">${data.data.name}</div>
        <div class="occupation">${data.data.occupation}</div>
        <div class="cartoon">${data.data.cartoon}</div>
        <div class="weapon">${data.data.weapon}</div>
      </div>`

      document.querySelector(".characters-container").innerHTML += html
    })
  }

  //Create a single character posting the data to http://localhost:8000/characters
  createOneRegister (character) {
    let button = document.querySelector('#new-character-form > button')
    axios.post(`${this.BASE_URL}/characters`, character).then(response => {
      button.style.backgroundColor = "green";
    }).catch(error => {
      button.style.backgroundColor = "red";
    })

  }
  //Edit a single character through his id in http://localhost:8000/characters/:id
  updateOneRegister (char) {
    axios.patch(`${this.BASE_URL}/characters/${char.id}`, char).then(response => {
      console.log(response)
    }).catch(e => {
      console.log(e);
    })
  }
  //Delete a single character through his id in http://localhost:8000/characters/:id
  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`).then(data => {
      console.log(data)
    }).catch(e => {
      alert(e)
    })
  }
}
