const axiosApp = axios.create({
  baseURL: 'http://localhost:8000'
})

class APIHandler {

  constructor (baseUrl) {
    this.BASE_URL = baseUrl;

  }

  getFullList () {

    return axios
    .get(this.BASE_URL + '/characters')
    .then(response => response.data)
    .catch(err => console.log('err', err))

  }

  getOneRegister (id) {

    return axios
    .get(this.BASE_URL + `/characters/${id}`)
    .then(response => response.data)
    .catch(err => console.log('err', err))

  }

  createOneRegister () {

    const inputs = document.querySelectorAll('#new-character-form input')

    let character = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked
    }

    axiosApp
    .post(this.BASE_URL + `/characters/`, character)
    .then(response => console.log(response.data))
    .catch(err => console.log('err', err))

  }

  updateOneRegister () {

    const id = document.querySelector('#idEdit input').value

    const inputs = document.querySelectorAll('#edit-character-form input')

    let character = { 
      name: inputs[1].value, 
      occupation: inputs[2].value, 
      weapon: inputs[3].value, 
      cartoon: inputs[4].checked 
    }

    axiosApp
    .put(this.BASE_URL + `/characters/${id}`, character)
    .then(response => console.log(response.data))
    .catch(err => console.log('err', err))

  }

  deleteOneRegister (idDel) {

    

    axiosApp
    .delete(this.BASE_URL + `/characters/${idDel}`)
    .catch(err => console.log('err', err))

  }
}
