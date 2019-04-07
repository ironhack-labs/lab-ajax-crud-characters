class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }


  


  getFullList () {
    document.getElementsByClassName('characters-container')[0].innerHTML="";
      axios.get(`${this.BASE_URL}/characters`)
      .then(characters=> characters.data.map(character=>{
        document.getElementsByClassName('characters-container')[0].innerHTML+=`<div class="character-info">
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation:${character.occupation} </div>
        <div class="cartoon">Is a Cartoon?:${character.cartoon} </div>
        <div class="weapon">Character Weapon:${character.weapon} </div>
      </div>`
      }))
      .catch(error=>console.log(error));
  }

  getOneRegister (id) {
    document.getElementsByClassName('characters-container')[0].innerHTML="";
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(character=> {
      document.getElementsByClassName('characters-container')[0].innerHTML+=`<div class="character-info">
        <div class="name">Character Name: ${character.data.name}</div>
        <div class="occupation">Character Occupation:${character.data.occupation} </div>
        <div class="cartoon">Is a Cartoon?:${character.data.cartoon} </div>
        <div class="weapon">Character Weapon:${character.data.weapon} </div>
      </div>`
  })
  .catch(error=>console.log(error));
  }

  createOneRegister (ourObject) {
    axios.post(`${this.BASE_URL}/characters/`, ourObject)
    .then(()=> document.getElementById('create-data').style.backgroundColor="green")
    .catch(error=>{
      document.getElementById('create-data').style.backgroundColor="red";
    })
  }

  updateOneRegister (id, ourObject) {
    axios.put(`${this.BASE_URL}/characters/${id}`, ourObject )
    // .then(character=> console.log(character))
    .then(()=> document.getElementById('edit-data').style.backgroundColor="green")
    .catch(error=>{
      document.getElementById('edit-data').style.backgroundColor="red";
    })
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(character=> console.log('Deleted char is:',character))
    .then(()=> document.getElementById('delete-one').style.backgroundColor="green")
    .catch(error=>{
      document.getElementById('delete-one').style.backgroundColor="red";
    })
  }
}


// connection = new APIHandler('http://localhost/');


// connection.getFullList ();