class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosApp = axios.create({
      baseURL: this.BASE_URL
    })
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)

  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)

  }

  createOneRegister() {

    let name = document.querySelector('#create-name').value
    let occupation = document.querySelector('#create-occupation').value
    let cartoon = document.querySelector('#create-cartoon').checked
    let weapon = document.querySelector('#create-weapon').value

    let data = {
      name,
      occupation,
      cartoon,
      weapon
    }

    this.axiosApp.post(`characters`, data)
      .then(() => {
        document.querySelector('#send-data-create').style.background = 'green'
      })
      .catch(error => {
        document.querySelector('#send-data-create').style.background = 'red'
        console.log(error)
      })
  }

  updateOneRegister() {
    let id = document.querySelector('#update-id').value
    let name = document.querySelector('#update-name').value
    let occupation = document.querySelector('#update-occupation').value
    let cartoon = document.querySelector('#update-cartoon').checked
    let weapon = document.querySelector('#update-weapon').value
    console.log(id,
      name,
      occupation,
      cartoon,
      weapon)
    let data = {
      name,
      occupation,
      cartoon,
      weapon
    }

    this.axiosApp.put(`characters/${id}`, data)
      .then(() => {
        console.log('--------', data)
        document.querySelector('#send-data-update').style.background = 'green'
      })
      .catch(error => {
        document.querySelector('#send-data-update').style.background = 'red'
        console.log(error)
      })
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)

  }
}