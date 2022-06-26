class APIHandler {

  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  /* <div class="character-info">
        <div class="name">Character Name</div>
        <div class="occupation">Character Occupation</div>
        <div class="cartoon">Is a Cartoon?</div>
        <div class="weapon">Character Weapon</div>
      </div> */



buildCharacterBox(character){
  //console.log(character,"soy unico"); funciona
  let charInfo = document.createElement("div")
  charInfo.className =('character-info');

charInfo.innerHTML =

`<div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Cartoon: ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>`
        
document.querySelector(".characters-container").append(charInfo) //por ser clase, requiere el punto.
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
    ${this.BASE_URL}/characters`,character) //la url decía a dónde voy a llegar. le puse , y 'character' funciona como un req.body. es un paquete de data
    .then(character=>
      {console.log(character)
        getFullList ()} )
      .catch(error=>{console.log(error)} )

  }

  updateOneRegister (character) {
    const {id} = character
    axios
    .patch(`
    ${this.BASE_URL}/characters/${id}`,character) //la url decía a dónde voy a llegar. le puse , y 'character' funciona como un req.body. es un paquete de data
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
