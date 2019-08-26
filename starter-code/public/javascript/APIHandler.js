class APIHandler {
  constructor (baseUrl) 
  {this.BASE_URL = baseUrl; }

  

  getFullList () { 

    axios.get('http://localhost:8000/characters').then((allCharacters) => {
    let characterHTML = ``
    allCharacters.data.forEach((eachCharacter) => {
      characterHTML += `<div class="character-info" id=${eachCharacter.id}>
      <div class="name">      ${eachCharacter.name} </div>
      <div class="occupation">${eachCharacter.occupation} </div>
      <div class="cartoon">   ${String(eachCharacter.cartoon)} </div>
      <div class="weapon">    ${eachCharacter.weapon} </div>
    </div>`
    })
    document.querySelector(".characters-container").innerHTML = characterHTML
  }).catch(err => console.error(err))
}

getOneRegister(){

  let id = document.getElementsByName('character-id')[0].value
  axios.get(`http://localhost:8000/characters/${id}`).then((character) => {
    console.log(character)
    character = character.data
    let characterHTML = `<div class="character-info">
    <div class="name">      ${character.name} </div>
    <div class="occupation">${character.occupation} </div>
    <div class="cartoon">   ${String(character.cartoon)} </div>
    <div class="weapon">    ${character.weapon} </div>
  </div>`
    document.querySelector(".characters-container").innerHTML = characterHTML
  }).catch(err => console.error(err))

}


  createOneRegister () { 
    
  console.log(e)  
  e.preventDefault()
  let id = e.target[0].value;
  let name = e.target[1].value;
  let occupation = e.target[2].value;
  let weapon = e.target[3].value;
  let cartoon = e.target[4].checked;

  let characterObj = {
    id,
    name,
    occupation,
    weapon,
    cartoon
  };

  console.log(characterObj)
  axios.patch('http://localhost:8000/characters', characterObj).then((character) => {
    console.log(character)
    character = character.data
    let characterHTML = `<div class="character-info">
    <div class="id">        ${character.id} </div>
    <div class="name">      ${character.name} </div>
    <div class="occupation">${character.occupation} </div>
    <div class="cartoon">   ${String(character.cartoon)} </div>
    <div class="weapon">    ${character.weapon} </div>
  </div>`
    document.querySelector(".characters-container").innerHTML += characterHTML
  }).catch(err => console.error(err))
}

  updateOneRegister () {

     console.log(e)
      e.preventDefault()
      let id = e.target[0].value
      let name = e.target[1].value
      let occupation = e.target[2].value
      let weapon = e.target[3].value
      let cartoon = e.target[4].checked
    
      let characterObj = {
        id,
        name,
        occupation,
        weapon,
        cartoon
      }
    
      console.log(characterObj)
      axios.patch(`http://localhost:8000/characters/${id}`, characterObj).then((res) => {
        console.log(res)
      })
    }

  

  deleteOneRegister () {

      let id = document.querySelector("body > section:nth-child(1) > section > div.operation.delete > input[type=text]").value
      axios.delete(`http://localhost:8000/characters/${id}`).then(res => {
        console.log(res)
        document.getElementById(id).remove()
      })
    }}
      
    