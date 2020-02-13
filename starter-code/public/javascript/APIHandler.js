class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosApp = axios.create({ baseURL: this.BASE_URL })
  }

  getFullList() {
    this.axiosApp.get(`/`)
      .then(allCharacters => {

        allCharacters.data.forEach(char => {

          const minion = `<li>Nombre: ${char.name} || Trabajo: ${char.occupation} || id: ${char.id}</li>`

          document.querySelector("#complete-list").innerHTML += minion

        })

        console.log(allCharacters.data)
      })
  }

  getOneRegister() {

    const minionId = document.getElementById("search-id").value

    this.axiosApp.get(`/${minionId}`)

      .then(theMinion => {
        document.querySelector(".name").innerText = `Character Name ${theMinion.data.name}`
        document.querySelector(".occupation").innerText = `Character occupation ${theMinion.data.occupation}`
        document.querySelector(".cartoon").innerText = `Character is cartoon? ${theMinion.data.cartoon}`
        document.querySelector(".weapon").innerText = `character weapon is ${theMinion.data.weapon}`
      })

  }

  createOneRegister() {

    const minionInfo = document.getElementById("new-character-form").querySelectorAll("input")

    const newMinion = {

      name: minionInfo[0].value,
      occupation: minionInfo[1].value,
      weapon: minionInfo[2].value,
      cartoon: minionInfo[3].checked,
    }


    this.axiosApp.post("/", newMinion)
      .then(created => console.log(created))


  }

  updateOneRegister() {

    const minionInfo = document.getElementById("edit-character-form").querySelectorAll("input")

    const newMinion = {

      id: minionInfo[0].value,
      name: minionInfo[1].value,
      occupation: minionInfo[2].value,
      weapon: minionInfo[3].value,
      cartoon: minionInfo[4].checked,
    }

    this.axiosApp.put(`/${newMinion.id}`, newMinion)
      .then(created => console.log(created))
      .catch(err => next(err)



  
  }

  deleteOneRegister() {

    const minionId = document.getElementById("delete-id").value

    console.log(minionId)

    this.axiosApp.delete(`/${minionId}`)
      .then(erased => {
        document.getElementById("delete-id").value = `${erased.data.id} ha sido borrado`
      })
      .cacth(err => {

        document.getElementById("delete-id").value = `ha habido un problema borrando al minion ${erased.data.id}`
      })

  }
}

