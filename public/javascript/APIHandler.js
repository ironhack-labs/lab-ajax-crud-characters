// Axios app
const axiosApp = axios.create({
  baseURL: 'http://localhost:8000'
})


class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axiosApp
      .get('/characters')
      .then(response => {
        console.log('Characters:', response.data)
      })
      .catch(err => console.log(err))

    const cardOriginal = document.getElementById('char-info')

  }



  //     < div class="characters-container" >
  //       <div id="char-info" class="character-info">
  //         <div class="name">Character Name</div>
  //         <div class="occupation">Character Occupation</div>
  //         <div class="cartoon">Is a Cartoon?</div>
  //         <div class="weapon">Character Weapon</div>
  //       </div>
  // </div >




  getOneRegister() {
    let id = document.getElementById("character-id").value
    axiosApp
      .get('/characters/' + id)
      .then(response => {
        console.log('Characters:', response.data)
        // document.querySelector('#character-id').reset()
      })
      .catch(err => console.log(err))
  }


  createOneRegister() {
    const inputNew = document.querySelectorAll("#new-character-form input")
    const characterNew = {
      name: inputNew[0].value,
      occupation: inputNew[1].value,
      weapon: inputNew[2].value,
      cartoon: inputNew[3].checked
    }

    axiosApp
      .post('/characters', characterNew)
      .catch(err => console.log('err', err))
  }

  updateOneRegister() {
    console.log("entras asquí?")
    const inputEdit = document.querySelectorAll("#edit-character-form input")
    const characterEdit = {
      id: inputEdit[0].value,
      name: inputEdit[1].value,
      occupation: inputEdit[2].value,
      weapon: inputEdit[3].value,
      cartoon: inputEdit[4].checked
    }
    axiosApp
      .put(`/characters/${characterEdit.id}`, characterEdit)
      .catch(err => console.log('err', err))
  }

  deleteOneRegister() {
    let id = document.getElementById("character-id-delete").value
    console.log(id)
    axiosApp
      .delete('/characters/' + id)
      .then(response => {
        console.log('Characters:', response.data)
        // document.querySelector('#character-id').reset()
      })
      .catch(err => console.log(err))
  }
}
