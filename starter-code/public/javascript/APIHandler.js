const endpoint = 'http://localhost:8000/characters'

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
  
  getFullList () {
    axios
    .get(endpoint)
    .then(({ data }) => {
      const firstDiv = document.getElementById("container")
      var acc= ""
       firstDiv.innerHTML = ''
       console.log(data)
       for (var character in data) {
        firstDiv.innerHTML +=  `
        <div class="character-info">
          <div class="name">Name: ${data[character].name}</div>
          <div class="occupation">Occupation: ${data[character].occupation}</div>
          <div class="cartoon">Is a Cartoon: ${data[character].cartoon}</div>
          <div class="weapon">Weapon: ${data[character].weapon}</div>
        </div>`
        console.log(acc)
      }
    })
    .catch(err => console.log(err))

  }

  getOneRegister () {
    const id = document.getElementById("character-id").value
    axios
    .get(`${endpoint}/${id}`)
    .then(({ data }) => console.log(data))
    .catch(err => console.log(err))
  }

  createOneRegister () {
    let  name = document.getElementById('name-create').value
    let occupation = document.getElementById('occupation-create').value
    let cartoon = document.getElementById('cartoon-create').checked
    let weapon = document.getElementById('weapon-create').value
      axios
      .post(`${endpoint}`, { name, occupation, cartoon, weapon })
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  updateOneRegister () {
    let id = document.getElementById('chr-id').value
    let  name = document.getElementById('name').value
    let occupation = document.getElementById('occupation').value
    let cartoon = document.getElementById('cartoon').checked
    let weapon = document.getElementById('weapon').value
      axios
      .patch(`${endpoint}/${id}`, { name, occupation, cartoon, weapon })
      .then(({ data }) => {
        getElementById('edit-character-form').style.background="green"
        console.log(data)
      })
      .catch(err => getElementById('edit-character-form').style.background="red"
      )
      
  }

  deleteOneRegister () {
    const id = document.getElementById("character-id-delete").value
    axios
    .delete(`${endpoint}/${id}`)
    .then(({ data }) => console.log(data))
    .catch(err => console.log(err))
  }
}
