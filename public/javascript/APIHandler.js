class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL+'/characters')
      .then(resp => console.log(resp.data))
      .catch(erro => console.log(erro))
  }

  getOneRegister (charactersId) {
    axios.get(this.BASE_URL+`/characters/${charactersId}`)
      .then(resp => {
        console.log(resp.data)
      })
      .catch(erro => console.log(erro))
  }

  createOneRegister (characters) {
    axios.post(this.BASE_URL+`/characters`. characters)
      .then(response => {
        const { id, name, occupation, weapon, cartoon } = response.data;
        console.log(response.data)
        characters.id = id
        characters.name = name;
        characters.occupation = occupation;
        characters.weapon = weapon;
        characters.cartoon = cartoon;
      })
      .catch(erro => console.log(erro))
  }

  updateOneRegister (characters) {
    axios.patch(this.BASE_URL+`/characters/${characters.id}`, characters)
      .then(response => {
        const { id, name, occupation, weapon, cartoon } = response.data;
        console.log(response.data)
        characters.id = id;
        characters.name = name;
        characters.occupation = occupation;
        characters.weapon = weapon;
        characters.cartoon = cartoon;
      })
      .catch(erro => console.log(erro))
  }

  deleteOneRegister (charactersId) {
    axios.delete(this.BASE_URL+`/characters/${charactersId}`)
      .then(resp => {
        console.log(resp.data)
      })
      .catch(erro => console.log(erro))
  }
}
