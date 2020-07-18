class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl
  }

  getFullList() {
    return axios
      .get(this.BASE_URL + '/characters')
      .then((list) => {
        list.data
        console.log(list.data)

        let str = ''
        list.data.forEach((el) => {
          str += ` 
          <div class="character-info">
            <div class="id"><strong>Id:</strong> ${el.id}</div>
            <div class="name"><strong>Name:</strong> ${el.name}</div>
            <div class="occupation"><strong>Ocuppation:</strong> ${el.occupation}</div>
            <div class="cartoon"><strong>Is a cartoon?:</strong> ${el.cartoon}</div>
            <div class="weapon"><strong>Weapon:</strong> ${el.weapon}</div>
          </div>`
        })

        const charactersContainer = document.querySelector(
          '.characters-container'
        )

        charactersContainer.innerHTML = str
      })
      .catch((error) => console.log('getFullList error: ', error))
  }

  getOneRegister() {
    const id = document.querySelector('[name="character-id"]')
    return axios
      .get(this.BASE_URL + `/characters/${id.value}`)
      .then((list) => {
        list.data
        console.log(list.data)

        let str = ''
        str += ` 
          <div class="character-info">
            <div class="id"><strong>Id:</strong> ${list.data.id}</div>
            <div class="name"><strong>Name:</strong> ${list.data.name}</div>
            <div class="occupation"><strong>Ocuppation:</strong> ${list.data.occupation}</div>
            <div class="cartoon"><strong>Is a cartoon?:</strong> ${list.data.cartoon}</div>
            <div class="weapon"><strong>Weapon:</strong> ${list.data.weapon}</div>
          </div>`

        const charactersContainer = document.querySelector(
          '.characters-container'
        )
        charactersContainer.innerHTML = ''
        charactersContainer.innerHTML = str
        id.value = ''
      })
      .catch((error) => console.log('getFullList error: ', error))
  }

  createOneRegister() {

    const name = document.querySelector('[name="name"]').value
    const occupation = document.querySelector('[name="occupation"]').value
    const weapon = document.querySelector('[name="weapon"]').value
    const cartoon = document.querySelector('[name="cartoon"]').checked

    const newCharacterInfo = {
      name,
      occupation,
      weapon,
      cartoon
    };

    return axios
      .post(this.BASE_URL + '/characters', newCharacterInfo)
      .then(() => {
        this.getFullList();

        // Clear the form after submitting:
        document.getElementById('new-character-form').reset();
      })
      .catch(err => console.log(`Error while saving a new character: ${err}`));







  }

  updateOneRegister() { }

  deleteOneRegister() {
    const id = document.querySelector('[name="character-id-delete"]')
    return axios
      .delete(this.BASE_URL + `/characters/${id.value}`)
      .then((list) => {
        this.getFullList()
        id.value = ''
      })
      .catch((error) => console.log('getFullList error: ', error))
  }
}
