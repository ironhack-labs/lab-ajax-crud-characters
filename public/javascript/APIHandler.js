class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }


  /**
   *  <div class="characters-container">
      <div class="character-info">
        <div class="name">Character Name</div>
        <div class="occupation">Character Occupation</div>
        <div class="cartoon">Is a Cartoon?</div>
        <div class="weapon">Character Weapon</div>
      </div>
    </div>
   *  
   */
  buildCharacterBox(character){
    let charInfo =document.createElement('div')
    charInfo.className="character-info"
    charInfo.innerHTML=`
    <div class="id">Id:${character.id}</div>
    <div class="name">Name:${character.name}</div>
    <div class="occupation">Occupation: ${character.occupation}</div>
    <div class="weapon">Weapon:${character.weapon}</div>
    <div class="cartoon">Is a Cartoon?:${character.cartoon}</div>
    
    `
    document.querySelector(".characters-container").append(charInfo)
  }


  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
    .then(({data})=>{
      console.log({data},"hola")
      //repasar todo el arreglo de {data} que contiene todos los personajes
      data.forEach(character => this.buildCharacterBox(character)) 
        
    
      //cada uno crear una card
      //
    })
    .catch(error=>console.log(error,"Eso estuvo mal "))
  }

  getOneRegister (idCharacter) {
    axios.get(`${this.BASE_URL}/characters/${idCharacter}`)
    .then(({data})=>this.buildCharacterBox(data))
    .catch(error=>console.log(error,"Eso estuvo mal "))
  }

  createOneRegister (character) {
  
    axios.post(`${this.BASE_URL}/characters`,character)
    .then(({data})=>this.buildCharacterBox(data))
    .catch(error=>console.log(error,"Eso estuvo mal "))

  }

  updateOneRegister (character) {
    const  {id} =character
    axios.patch(`${this.BASE_URL}/characters/${id}`,character)
    .then(({data})=>this.getFullList())
    .catch(error=>console.log(error,"Eso estuvo mal "))

  }

  deleteOneRegister (idCharacter) {
    axios.delete(`${this.BASE_URL}/characters/${idCharacter}`)
    .then(({data})=>this.buildCharacterBox(data))
    .catch(error=>console.log(error,"Eso estuvo mal "))

  }
}
