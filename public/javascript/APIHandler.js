class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL+"/characters")
    .then(characters =>{
      console.log(characters.data)
      characters.data.forEach(character => {
      console.log(character.name)    
      const nameHTML=document.createElement("H1")
      const text =document.createTextNode(`${character.name}`)
      nameHTML.appendChild(text)
      console.log("nice until here")
      document.getElementsByClassName("name")[0].appendChild(nameHTML)
      })
    })
    .catch(err =>{
      console.log("Something went wrong when getting the characters")
    })
  }

  getOneRegister (id) {
    axios.get(this.BASE_URL+`/characters/${id}`)
    .then(character =>{
      console.log(character)
    })
    .catch(err =>{
      console.log("Something went wrong when getting the character")
    })    
  }

  createOneRegister (character) {
    axios.post(this.BASE_URL+`/characters`, character)
    .then(character =>{
      console.log(character)
    })
    .catch(err =>{
      console.log("Something went wrong when creating the character")
    })    
  }

  updateOneRegister (id , character) {
    axios.put(this.BASE_URL+`/characters/${id}`, character)
    .then(character =>{
      console.log(character)
    })
    .catch(err =>{
      console.log("Something went wrong when updating the character")
    })    
  }

  deleteOneRegister (id) {
  axios.delete(this.BASE_URL+`/characters/${id}`)
    .then(character =>{
      console.log("Character deleted")
    })
    .catch(err =>{
      console.log("Something went wrong when updating the character")
    })    
  }
}

/*document.getElementById('postCharacter').onclick = () => {
    const character = {
        name: "WALL-E",
        occupation: "Waste Allocation Robot",
        weapon: "Head laser"
    };
    axios
      .post('https://ih-crud-api.herokuapp.com/characters', character)
      .then(response => console.log("post success, response is", response))
      .catch(err => console.log("error occurred", err));
};*/