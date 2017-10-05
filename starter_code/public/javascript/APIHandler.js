class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.len = '( ͡° ͜ʖ ͡°)';
    this.havoc = false;
  }

  getFullList() {
    axios.get(this.BASE_URL + '/characters').then(response => {
      $('.character-info').remove()
      response.data.forEach(this.appendCharacter);
    })
  }

  appendCharacter(character) {
    const newCharacterHtml = `
  <div class="character-info">
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="debt">${character.debt}</div>
        <div class="weapon">${character.weapon}</div>
  </div>
`;
    $('.characters-container').append(newCharacterHtml);
  }

  getOneRegister() {
    const id = $('#input-one').val();
    axios.get(this.BASE_URL + '/characters/' + id).then(response =>
      this.appendCharacter(response.data)
    )
  }


  createOneRegister() {
    const newChar =

      axios.post(this.BASE_URL + '/characters/', newChar).then()

  }

  populate(rageIntensity) {
    const spam = rageIntensity < 100 ? rageIntensity : 1
    let lenny = {
      id: 0,
      name: this.len,
      occupation: this.len,
      debt: false,
      weapon: this.len,
    }

    axios.get(this.BASE_URL + '/characters').then(response => {
        const characters = response.data
        return {
          characters,
          maxId: characters.reduce((max, c) => Math.max(max, c.id)),
          nLennys: characters.filter(el => el.name === this.len).length
        }
      })
      .then(response => {
        const array = []
        for (let i = 0; i < spam; i++) {
          lenny.id = Math.floor(Math.random() * 666) + response.maxId
          array.push(axios.post(this.BASE_URL + '/characters/', lenny).then(r => r.data).then(log))
        }
        return Promise.all(promises)
      })
      .then(log)
      .then(characters => {
        return axios.get(this.BASE_URL + '/characters/')
          .then(responseNested => {
            response.newTot = responseNested.data.filter(el => el.name === this.len).length
            return response
          })
      })
      .then(response => {
        console.log(response)
        console.log(response.newTot - response.total + ' Lenny added !')
        return response
      }).then(response => this.getFullList()).catch(err => 'whatever')
  }


  updateOneRegister() {

  }

  deleteOneRegister() {
    const id = $('#delete-input').val();
    axios.delete(this.BASE_URL + '/characters/' + id).then(response => this.getFullList())
  }

  surpise() {
    let id
    axios.get(this.BASE_URL + '/characters').then(response => {
      if (this.havoc) {
        id = (response.data.map(el => el.id))
        return id
      } else {
        id = (response.data.filter(el => {
          return el.name === this.len
        }).map(el => el.id))
        return id
      }
    }).then(response => {
      response.forEach(el => {
        console.log(el)
        axios.delete(this.BASE_URL + '/characters/' + el)
      })
      return 'OK'
    }).then(response => this.getFullList())
  }
}