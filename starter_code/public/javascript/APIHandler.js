class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    fetch(this.BASE_URL + 'characters')
    .then(result => result.json())
    .then(characters => {
      console.log(characters)
      let list = ''
      for (var i = 0; i < characters.length; i++){
        list += `<div class="character-info">
        <div class="id">Id : ${characters[i].id}</div>
        <div class="name">Name : ${characters[i].name}</div>
        <div class="occupation">Occupation : ${characters[i].occupation}</div>
        <div class="cartoon">Cartoon : ${characters[i].cartoon}</div>
        <div class="weapon">Weapon : ${characters[i].weapon}</div>
      </div>`
      }
      document.getElementsByClassName('characters-container')[0].innerHTML = list;
    })
  }

  getOneRegister (id) {
  let url = this.BASE_URL + `characters/${id}`;
  return fetch(url)
  .then(result=> result.json())
  .then(char=>{
    $('.characters-container').empty();
    $('.characters-container').append(
      `<div class="character-info">
        <div class="id">Id : ${char.id}</div>
        <div class="name">Name : ${char.name}</div>
        <div class="occupation">Occupation : ${char.occupation}</div>
        <div class="cartoon">Cartoon : ${char.cartoon}</div>
        <div class="weapon">Weapon : ${char.weapon}</div>
      </div>`
    )
  })
  .catch(e=> console.log(e))
  }

  createOneRegister (character) {
    return fetch(this.BASE_URL + 'characters', {
      method : 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body : JSON.stringify(character) 
    })
    .then(result => result.json())
    .catch(e=>console.log(e))
  }

  updateOneRegister (id,update) {
    return fetch(this.BASE_URL + `characters/${id}`, {
      method : 'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body : JSON.stringify(update) 
    })
    .then(result => result.json())
    .then(r=>{
      $('characters-container').empty();
      $('characters-container').append(
        `<div class="character-info">
        <div class="id">EDITED</div>
        <div class="name">Name : ${r.name}</div>
        <div class="occupation">Occupation : ${r.occupation}</div>
        <div class="cartoon">Cartoon : ${r.cartoon}</div>
        <div class="weapon">Weapon : ${r.weapon}</div>
      </div>` 
      )
    })
    .catch(e=>console.log(e))
   }

  deleteOneRegister (id) {
  let url = this.BASE_URL + `characters/${id}`
  return fetch(url,{
    method : 'DELETE'
  })
  .then(result => result)
  }
}