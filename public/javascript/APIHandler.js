/* const axiosAPI = axios.create({
  baseUrl: 'http://localhost:8000'
}) */

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    
  }

  getFullList () {
      axios.get(this.BASE_URL + "/characters")
        .then(data => {
          console.log(data.data)
        })
        .catch(err => {
          console.log(err)
        })
  }

  getOneRegister (id) {
     axios.get(this.BASE_URL  + `/characters/${id}`)
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    }) 
  }

  createOneRegister () {
    axios.post(this.BASE_URL, {
      name,
      occupation,
      weapon,
      cartoon
    })
    .then(data => {
      console.log(data)
    })
  }

  updateOneRegister () {
    axios.patch(this.BASE_URL + `/characters/${id}`)
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  deleteOneRegister () {
    axios.delete(this.BASE_URL + `/characters/${id}`)
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }
}
