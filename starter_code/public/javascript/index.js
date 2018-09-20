class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return fetch(this.BASE_URL + 'characters')
    .then(result => result.json())
    .then(characters => {
      let list = ""
      for (let i = 0; i < characters.length; i++) {
        list+= `<div class="character-info">
        <div class="id">ID: ${characters[i].id}</div>
        <div class="name">Name: ${characters[i].name}</div>
        <div class="occupation">Occupation: ${characters[i].occupation}</div>
        <div class="cartoon">Cartoon: ${characters[i].cartoon}</div>
        <div class="weapon">Weapon: ${characters[i].weapon}</div>
        </div>`
      }
      document.getElementsByClassName("characters-container")[0].innerHTML=list;
    })
  }

  getOneRegister(id) {
    let url = this.BASE_URL + `characters/${id}`;
    return fetch(url)
    .then(result => result.json())
    .then(char => {
      $('.characters-container').empty();
      $('.characters-container').append(`<div class="character-info">
          <div class="id">ID: ${char.id}</div>
          <div class="name">Name: ${char.name}</div>
          <div class="occupation">Occupation: ${char.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${char.cartoon}</div>
          <div class="weapon">Weapon: ${char.weapon}</div>
          </div>`)
    })
    .catch(e => console.log(e))
  }

  createOneRegister(character) {
    let url = this.BASE_URL + 'characters';
    return fetch(url, { 
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(character)
    })
    .then(result => result.json())
    .catch(e=>console.log(e))
  }

  updateOneRegister(id, update) {
    let url = this.BASE_URL + `characters/${id}`
    return fetch(url, { 
      method: 'PATCH',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(update)
    })
    .then(result => result.json())
    .then(r => {
      $('.characters-container').empty();
      $('.characters-container').append(`<div class="character-info">
          <div class="id">EDITED</div>
          <div class="name">Name: ${r.name}</div>
          <div class="occupation">Occupation: ${r.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${r.cartoon}</div>
          <div class="weapon">Weapon: ${r.weapon}</div>
          </div>`)
        $('#send-data').attr('style','background:green')
      })
    .catch(e=> console.log(e))
  }

  deleteOneRegister(id) {
    let url = this.BASE_URL + `characters/${id}`
    return fetch(url, {
      method: "DELETE"
    })
    .then(result => result)
  }
}
