class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = "https://minions-api.herokuapp.com/"
    this.minions = axios.create({
      baseUrl: this.BASE_URL
    })

    const theName = document.getElementsByClassName("name")
    const theOccupation = document.getElementsByClassName("occupation")
    const theCartoon = document.getElementsByClassName("cartoon")
    const theWeapon = document.getElementsByClassName("weapon")
  }

  getFullList () {
    axios.get(`${this.BASE_URL}characters`)
      .then(response => {
        console.log(response)

          response.data.forEach(elm => {
            console.log(`${elm.name}`)
          document.getElementsByClassName("name")[0].innerHTML += `- ${elm.name}`
          document.getElementsByClassName("occupation")[0].innerHTML += ` ${elm.occupation}`
          document.getElementsByClassName("cartoon")[0].innerHTML += ` ${elm.cartoon}`
          document.getElementsByClassName("weapon")[0].innerHTML += ` ${elm.weapon}-`})
      })
      .catch(err => console.log("Hubo un error: ",err ))
  }

  getOneRegister () {
    const theId = document.getElementById("one-character").value
    axios.get(`${this.BASE_URL}characters/${theId}`)
      .then(response => {
        console.log(response.data)
        document.getElementsByClassName("name")[0].innerHTML += `- ${response.data.name}`
        document.getElementsByClassName("occupation")[0].innerHTML += ` ${response.data.occupation}`
        document.getElementsByClassName("cartoon")[0].innerHTML += ` ${response.data.cartoon}`
        document.getElementsByClassName("weapon")[0].innerHTML += ` ${response.data.weapon}-`
      })
        .catch(err => console.log("Hubo un error: ",err ))
      
  }

  createOneRegister () {
    console.log("createOneRegister")
    const characterToCreate = {
      name: document.getElementsByClassName("create-char-name")[0].value,
      occupation: document.getElementsByClassName("create-char-occupation")[0].value,
      weapon: document.getElementsByClassName("create-char-weapon")[0].value,
      cartoon: document.getElementsByClassName("create-char-cartoon")[0].checked
    }
    axios.post(`${this.BASE_URL}characters`, characterToCreate)
      .then(
        (response) => {
        const {name, occupation, weapon,cartoon} = response.data
        console.log("Personje", characterToCreate)
      })
      .catch(err => console.log("Hubo un error: ",err ))
  }

  updateOneRegister () {

    const editId = document.getElementsByClassName('edit-id')[0].value
    const characterToUpdate = {
      name: document.getElementsByClassName("edit-name")[0].value,
      occupation: document.getElementsByClassName("edit-occupation")[0].value,
      weapon: document.getElementsByClassName("edit-weapon")[0].value,
      cartoon: document.getElementsByClassName("edit-cartoon")[0].checked
    }

    axios.put(`${this.BASE_URL}characters/${editId}`, characterToUpdate)
      .then(response => {console.log(response)})
      .catch(err => console.log("Hubo un error: ",err ))
  }

  deleteOneRegister () {

    const deleteId = document.getElementsByClassName('delete-id')[0].value

    axios.delete(`${this.BASE_URL}characters/${deleteId}`)
      .then(response => {console.log("personaje borrado")})
      .catch(err => console.log("Hubo un error: ",err ))
  }
}
