class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
  //Get all the characters info from http://localhost:8000/characters
  getFullList () {
    axios.get(`${this.BASE_URL}/characters`).then((data) => {
      //array = data

      data.data.forEach(char => {
        let html = `<div class="characters-container">
        <div class="character-info">
          <div class="name">${char.name}</div>
          <div class="occupation">${char.occupation}</div>
          <div class="cartoon">${char.cartoon}</div>
          <div class="weapon">${char.weapon}</div>
        </div>`
  
        document.querySelector(".characters-container").innerHTML += html
      })
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
  createOneRegister () {
    axios.post(`${baseUrl}/characters`).then(() => {

    })

  }
  //Edit a single character through his id in http://localhost:8000/characters/:id
  updateOneRegister () {
    axios.patch(`${baseUrl}/characters/:id`).then(() => {

    })
  }
  //Delete a single character through his id in http://localhost:8000/characters/:id
  deleteOneRegister () {
    axios.delete(`${baseUrl}/characters/:id`).then(() => {
      
    })
  }
}
