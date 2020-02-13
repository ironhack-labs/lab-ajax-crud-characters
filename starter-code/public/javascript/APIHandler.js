class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosApp = axios.create({ baseURL: this.BASE_URL})
    
  }

  getFullList () {
    this.axiosApp.get("/characters")
      .then(allMinions => {
        console.log(allMinions)
        allMinions.data.forEach(element => {
        document.querySelector('.characters-container').innerHTML += 

        `<div class="character-info">
        <div class="name">Character Name : ${element.name}</div>
        <div class="occupation">Character Occupation : ${element.occupation} </div>
        <div class="cartoon">Is a Cartoon? : ${element.cartoon}</div>
        <div class="weapon">Character Weapon : ${element.weapon}</div>
      </div>`
      
      })})
  }

  getOneRegister(id) {
    this.axiosApp.get(`/characters/${id}`)
      .then(theMinion => document.querySelector('.characters-container').innerHTML =

      `<div class="character-info">
        <div class="name">Character Name : ${theMinion.data.name}</div>
        <div class="occupation">Character Occupation : ${theMinion.data.occupation} </div>
        <div class="cartoon">Is a Cartoon? : ${theMinion.data.cartoon}</div>
        <div class="weapon">Character Weapon : ${theMinion.data.weapon}</div>
      </div>`
    )}

  createOneRegister () {

    const newCharacter = {
      name: document.getElementById("addName").value,
      occupation: document.getElementById("addOccupation").value,
      cartoon: document.getElementById("addCartoon").checked,
      weapon: document.getElementById("addWeapon").value
    }
    console.log(newCharacter)

    this.axiosApp.post(`/characters`,newCharacter)
    .then((response)=> console.log(response))
    .then(console.log(newCharacter))
    .then(document.getElementById("new-character-form").reset())
  }

  updateOneRegister () {

    const newCharacter = {
      id: document.getElementById("editID").value,
      name: document.getElementById("editName").value,
      occupation: document.getElementById("editOccupation").value,
      cartoon: document.getElementById("editCartoon").checked,
      weapon: document.getElementById("editWeapon").value
    }

    this.axiosApp.put(`characters/${newCharacter.id}`, newCharacter)
    .then(response => console.log(response))
    .then(document.getElementById("new-character-form").reset())
    .catch(err => console.log(err))
    
  }

  deleteOneRegister (id) {
    this.axiosApp.delete(`/characters/${id}`)
    .then(a => console.log(a))

  }
}
