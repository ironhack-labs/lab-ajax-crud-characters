class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl
    this.minionAPI = axios.create({
      baseURL: this.BASE_URL
    });
  }

  getFullList() {
    this.minionAPI.get('/characters')
      .then(response => {
        const {
          id,
          name,
          occupation,
          cartoon,
          weapon
        } = response.data
        const characterContainer = document.querySelector('.characters-container')

        response.data.forEach(character => {
          if (character.name) {
            const info = `  
          <div class = "character-info">
            <div class = "id" > ID: ${character.id} </div> 
            <div class = "name" > Character Name:${character.name} </div> 
            <div class = "occupation" > Character Occupation: ${character.occupation}</div> 
            <div class = "cartoon" > Is a Cartoon ? ${character.cartoon}</div>
            <div class = "weapon" > Character Weapon ${character.weapon} </div> 
          </div>`
            characterContainer.innerHTML += info
          }

        })

      })
      .catch(err => console.log(err))

  }

  getOneRegister(id) {
    this.minionAPI.get(`/characters/${id}`)
      .then(response => {
        const {
          id,
          name,
          occupation,
          cartoon,
          weapon
        } = response.data

        document.querySelector('.characters-container').innerHTML = `   
                <div class = "character-info">
                <div class = "id" > ID: ${id} </div> 
                <div class = "name" > Character Name:${name} </div> 
                <div class = "occupation" > Character Occupation: ${occupation}</div> 
                <div class = "cartoon" > Is a Cartoon ? ${cartoon}</div>
                <div class = "weapon" > Character Weapon ${weapon} </div> 
              </div>`
      })
      .catch(err => console.log(err))
  }

  createOneRegister(name, occupation, weapon, cartoon) {

    this.minionAPI.post('/characters', {
        name,
        occupation,
        weapon,
        cartoon
      })
      .then(response => {
        response.status === 200 ?
          document.getElementById('create').style.backgroundColor = 'green' :
          document.getElementById('create').style.backgroundColor = 'red'
      })
      .catch(err => console.log(err))

  }

  updateOneRegister(id) {
    this.minionAPI.put(` / characters / $ {
              id
            }
            `)
      .then(response => {
        response.status === 200 ?
          document.getElementById('update').style.backgroundColor = 'green' :
          document.getElementById('update').style.backgroundColor = 'red'
      })
      .catch(err => console.log(err))
  }

  deleteOneRegister(id) {
    this.minionAPI.delete(` / characters / $ {
              id
            }
            `)
      .then(response => {
        //console.log(response)
        response.status === 200 ?
          document.getElementById('delete-one').style.backgroundColor = 'green' :
          document.getElementById('delete-one').style.backgroundColor = 'red'
      })
      .catch(err => console.log(err))
  }
}