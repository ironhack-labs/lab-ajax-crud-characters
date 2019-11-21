
class APIHandler {
  constructor (baseURL) {
    this.service = axios.create({baseURL})
  }

  getFullList () {
    this.service.get("/characters")
    .then(character => (character.data.forEach(element => {
      const div = document.createElement("div")
      div.className = "character-info"
      const p5 = document.createElement("p")
      p5.innerText = `Id: ${element.id}`
      div.appendChild(p5)
      const p = document.createElement("p")
      p.innerText = `Name: ${element.name}`
      div.appendChild(p)
      const p2 = document.createElement("p")
      p2.innerText = `Occupation: ${element.occupation}`
      div.appendChild(p2)
      const p3 = document.createElement("p")
      p3.innerText = `Is a Cartoon?: ${element.cartoon}`
      div.appendChild(p3)
      const p4 = document.createElement("p")
      p4.innerText = `Weapon: ${element.weapon}`
      div.appendChild(p4)
      const container = document.querySelector(".characters-container")
      container.appendChild(div)
    })))
    .catch(err => console.error(err));
  }

  getOneRegister (id) {
    this.service.get(`/characters/${id}`)
      .then(character => {
        const div = document.createElement("div")
        div.className = "character-info"
        const p = document.createElement("p")
        p.innerText = `Name: ${character.data.name}`
        div.appendChild(p)
        const container = document.querySelector(".characters-container")
        container.appendChild(div)
      })
      .catch(err => console.error(err));
  }

  createOneRegister (characterObj) {
    this.service.post("/characters", characterObj)
      .then(obj => console.log({obj}))
      .catch(err => console.error(err))
  }

  updateOneRegister (id, characterObj) {
    event.preventDefault()
    this.service.patch(`/characters/${id}`, characterObj)
      .then(() => console.log(characterObj))
      .catch(err => console.error(err))
  }

  deleteOneRegister (id) {
    this.service.delete(`/characters/${id}`)
      .then(() => console.log({ message: "Character eliminated"}))
  }
}
