let details 
class APIHandler {
  constructor (baseurl) {
    this.BASE_URL = baseurl
    }
  

  getFullList (){
   axios.get(this.BASE_URL + '/characters')
     .then(response => {
        console.log(response.data)
        const character = response.data
        character.forEach(elm => {
    
         details = `<div class="name">Character Name: ${elm.name}</div>
         <div class="occupation">Character Occupation: ${elm.occupation}</div>
         <div class="cartoon">Is a Cartoon?: ${elm.cartoon}</div>
         <div class="weapon">Character Weapon: ${elm.weapon}</div>` 
        
         document.querySelector('.character-info').innerHTML += details
        })
      })
  }

  getOneRegister() {
    const charId = document.getElementById('character-id').value

    axios.get(this.BASE_URL + '/characters/' + charId)
      .then(response => {
        console.log(response)
          details = `<div class="name">Character Name: ${response.data.name}</div>
         <div class="occupation">Character Occupation: ${response.data.occupation}</div>
         <div class="cartoon">Is a Cartoon?: ${response.data.cartoon}</div>
         <div class="weapon">Character Weapon: ${response.data.weapon}</div>`
        
         document.querySelector('.character-info').innerHTML = details 
      })
    .catch(err => console.log(err))
  }

  createOneRegister() {

    const characterInfo = {
      name: document.getElementById('name-create').value,
      occupation: document.getElementById('occupation-create').value,
      weapon: document.getElementById('weapon-create').value,
      cartoon: document.getElementById('cartoon-create').checked
    }
    axios.post(this.BASE_URL + '/characters/', characterInfo)
      .then(response => {
        
        details = `<div class="name">Character Name: ${response.data.name}</div>
        <div class="occupation">Character Occupation: ${response.data.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${response.data.cartoon}</div>
        <div class="weapon">Character Weapon: ${response.data.weapon}</div>`
       
         document.querySelector('.character-info').innerHTML = details
      })
        .catch(err => console.log(err))
  }

  updateOneRegister() {
    const charId = document.getElementById('edit-id').value
    const characterInfo = {
      name: document.getElementById('edit-name').value,
      occupation: document.getElementById('edit-occupation').value,
      weapon: document.getElementById('edit-weapon').value,
      cartoon: document.getElementById('edit-cartoon').checked
    }
    axios.put(this.BASE_URL + '/characters/' + charId, characterInfo)
      .then(response => {
        document.getElementById('send-data-edit').style.backgroundColor = "green"
      })
      .catch(err => { 
        console.log(err)
        document.getElementById('send-data-edit').style.backgroundColor = "red"
      })
  }

  deleteOneRegister() {
    const charId = document.getElementById('character-id-delete').value
    axios.delete(this.BASE_URL + '/characters/' + charId)
      .catch(err => console.log(err))
  }
}
