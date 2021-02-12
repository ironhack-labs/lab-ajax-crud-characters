class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
    .then(response => {
      const characters = response.data
      // console.log(response.data)
      const charList = document.querySelector(`.characters-container`);
        characters.forEach(character => {
          charList.innerHTML += 
            `
              <div class="character-info">
                <div class="name">Name: <strong>${character.name}</strong></div>
                <div class="occupation">Occupation: <strong>${character.occupation}</strong></div>
                <div class="cartoon">Is a Cartoon? <strong>${character.cartoon}</strong></div>
                <div class="weapon">Weapon: <strong>${character.weapon}</strong></div>
              </div>
            `
        })
    }).catch(err => console.log(`error fetching characters: , ${err}`)
  )}

  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      console.log(response)
      const character = response.data
      document.querySelector('.operation').innerHTML =
        `<div class="character-info">
          <div class="id">Id:<strong>${character.id}</strong></div>
          <div class="name">Name: <strong>${character.name}</strong></div>
          <div class="occupation">Occupation: <strong>${character.occupation}</strong></div>
          <div class="cartoon">Is a Cartoon? <strong>${character.cartoon}</strong></div>
          <div class="weapon">Weapon: <strong>${character.weapon}</strong></div>
          </div>`
      })
    .catch(err => console.log(`error fetching character: , ${err}`))
  }

  createOneRegister () {
      const name = document.querySelector('#new-character-form .field input[name="name"]').value
      const occupation = document.querySelector('#new-character-form .field input[name="occupation"]').value
      const weapon = document.querySelector('#new-character-form .field input[name="weapon"]').value
      const cartoon = document.querySelector('#new-character-form .field input[name="cartoon"]').checked
    axios
      .post(`${this.BASE_URL}/characters`, {
        name,
        occupation,
        weapon,
        cartoon
      })
      .then( => {
        this.getFullList();
      })
      .catch(err => {
        console.log(`error creating user: , ${err}`)
      })
  }

  updateOneRegister () {
      const id = document.querySelector('#edit-character-form .field input[name="chr-id"]').value
      const name = document.querySelector('#edit-character-form .field input[name="name"]').value
      const occupation = document.querySelector('#edit-character-form .field input[name="occupation"]').value
      const weapon = document.querySelector('#edit-character-form .field input[name="weapon"]').value
      const cartoon = document.querySelector('#edit-character-form .field input[name="cartoon"]').checked
    axios
        .put(`${this.BASE_URL}/characters/${id}`, {
          name,
          occupation,
          cartoon,
          weapon
        })
        .then( => {
          this.getFullList();
        })
        .catch(err => {
          console.log(`error updating character: ${err}`);
        });
  }

  deleteOneRegister () {
    const id = document.querySelector('.operation.delete input').value
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(() => {
        this.getFullList();
      })
      .catch(err => {
        console.log(`error deleting character: ${err}`);
      });
  }
}
