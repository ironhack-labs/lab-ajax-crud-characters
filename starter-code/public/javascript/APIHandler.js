
  class APIHandler {
    constructor(baseUrl) {
      this.BASE_URL = baseUrl;
    }
  
    getFullList() {
      axios.get(this.BASE_URL + '/characters')
        .then(characters => {
          $('.characters-container').html('')
          characters.data.forEach(character => {
            $('.characters-container').append(`
            <div class="character-info">
              <div class="name">Character Name: ${character.name}</div>
              <div class="occupation">Character Occupation: ${character.occupation}</div>
              <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
              <div class="weapon">Character Weapon: ${character.weapon}</div>
            </div>
            `)
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  // The .append() method inserts the specified content as the last child of each element in the jQuery collection 
  // (To insert it as the first child, use .prepend()).

  
    getOneRegister(id) {
      axios.get(this.BASE_URL + '/characters/' + id)
        .then(character => {
          if (id === '') {
            return $('.characters-container').html('<strong>Seleciona un ID</strong>')
          }
          $('.characters-container').html('')
          $('.characters-container').append(` 
            <div class="character-info">
              <strong>${character._id}</strong>
              <div class="name">Character Name: ${character.data.name}</div>
              <div class="occupation">Character Occupation: ${character.data.occupation}</div>
              <div class="cartoon">Is a Cartoon? ${character.data.cartoon}</div>
              <div class="weapon">Character Weapon: ${character.data.weapon}</div>
            </div>`)
        }).catch(err => console.log(err))
    }
  
    createOneRegister(newCharacter) {
      axios.post(this.BASE_URL + '/characters', newCharacter)
        .then(character => {
          $('.characters-container').html('')
          this.getFullList()
        }).catch(err => console.log(err))
    }
  
    updateOneRegister() {
  
    }
  
    deleteOneRegister(id) {
      console.log(id)
      if (!confirm('Estás seguro que quieres borrar?')) return
      axios.delete(this.BASE_URL + /characters/ + id)
        .then(deleted => {
          $('.characters-container').html('')
          this.getFullList()
        })
    }
  }


// axios.request(config)

// axios.get(url[, config])

// axios.delete(url[, config])

// axios.head(url[, config])

// axios.options(url[, config])

// axios.post(url[, data[, config]])

// axios.put(url[, data[, config]])

// axios.patch(url[, data[, config]])