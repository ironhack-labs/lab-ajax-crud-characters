class APIHandler {

  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }


buildCharacterBox(character){
  let charInfo = document.createElement("div")
  charInfo.className =('character-info');

charInfo.innerHTML =

`<div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Cartoon: ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>`
        
document.querySelector(".characters-container").append(charInfo) 
}


  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
    .then(characters =>{
      const {data} = characters
      console.log("funciono! ",data)

      data.forEach(character=>
        this.buildCharacterBox(character))

    })
    .catch(err =>{
      console.log("el error", err)
    })

  }

  getOneRegister (idCharacter) {
axios
.get(`${this.BASE_URL}/characters/${idCharacter}`)
.then(character => {
  console.log(character.data)

  this.buildCharacterBox(character.data)
})
.catch(err =>{
  console.log("el error", err)
})




  }

  createOneRegister (character) {
    
    axios
    .post(`
    ${this.BASE_URL}/characters`,character) 
    .then(character=>
      {console.log(character)
        getFullList ()} )
      .catch(error=>{console.log(error)} )

  }

  updateOneRegister (character) {
    const {id} = character
    axios
    .patch(`
    ${this.BASE_URL}/characters/${id}`,character) 
    .then(character=>
      {console.log(character)
        this.getFullList ()} )
      .catch(error=>{console.log(error)} )

  }

  deleteOneRegister (idCharacter) {
    console.log("llegue")
    axios.delete(
      `${this.BASE_URL}/characters/${idCharacter}`
      
    )

  }
}