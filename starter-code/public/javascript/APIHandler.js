class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
      .then(characters=> { 
        console.log(characters.data)
      })
  }
  
  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(character => {
      console.log(character.data)
      document.querySelector('.character-info').innerHTML = 
      `<div> Name : ${character.data.name}</div>
      <div> Occupation : ${character.data.occupation}</div>
      <div> Cartoon : ${character.data.cartoon}</div>
      <div> Weapon : ${character.data.weapon}</div>`
    })
  }

  createOneRegister (newCharacter) {
    console.log(newCharacter);
    axios.post(`${this.BASE_URL}/characters`, newCharacter)
  }

  updateOneRegister (id, characterInfo) {
    axios.patch(`${this.BASE_URL}` + "/characters" + "/" + `${id}`, characterInfo)
    console.log("id " + `${id}` + " edited")
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}` + "/characters" + "/" + `${id}`)
    .then(character => {
      console.log("id " + `${id}` + " deleted")
    });
  }
}
