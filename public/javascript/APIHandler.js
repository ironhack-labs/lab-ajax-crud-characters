class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

    axios
      .get(`${this.BASE_URL}/characters`)
      .then(response => {
        const charsInfo = response.data;

        let html = ''
        charsInfo.forEach(char => {
      
        html += `
        <div class="character-info">
        <div class="name">Character Name: ${char.name} </div>
        <div class="occupation">Character Occupation: ${char.occupation} </div>
        <div class="cartoon">Is a Cartoon?: ${char.cartoon} </div>
        <div class="weapon">Character Weapon: ${char.weapon} </div>
        </div>`
        });

        document.getElementById("characters-container").innerHTML = html;

  })
      .catch(err => console.log(err))
  }

  getOneRegister (id) {

    axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        console.log(response.data)
        const { name, occupation, weapon, cartoon } = response.data
        const char1Info = { name, occupation, weapon, cartoon }
        console.log(char1Info);

        document.getElementById('characters-container').innerHTML = `
        <div class="character-info">
        <div class="name">Character Name: ${char1Info.name} </div>
        <div class="occupation">Character Occupation: ${char1Info.occupation} </div>
        <div class="cartoon">Is a Cartoon?: ${char1Info.cartoon} </div>
        <div class="weapon">Character Weapon: ${char1Info.weapon} </div>
        </div>`

  })
      .catch(err => console.log(err))
  }

  createOneRegister (newChar) {

    axios
      .post(`${this.BASE_URL}/characters/`, newChar )
      .then(response => {
        console.log('Creado nuevo char', response.data)
        this.getFullList()
  })

      
      .catch(err => console.log(err))
  }

  updateOneRegister (id, upChar) {

    axios
      .put(`${this.BASE_URL}/characters/${id}`, upChar )
      .then(response => 
        this.getFullList())
      .catch(() => console.log("Personaje editado con exito"))
     }

  deleteOneRegister(id) {
    
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(response => console.log("Eliminado personaje", response.data))
      .catch(err => console.log(err))
  }
}





