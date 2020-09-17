/* const axiosAPI = axios.create({
  baseUrl: 'http://localhost:8000'
}) */
const charContainer = document.getElementsByClassName('characters-container')[0]
const charInfo = document.getElementsByClassName('character-info')[0]

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    
  }

  getFullList () {
      axios.get(this.BASE_URL + "/characters")
        .then(response => {
          console.log(response.data[0].name)
          charInfo.classList.toggle('hidden')
/*           for (let i = 0; i <= response.data.length; i++) {
              const showName = document.createElement('div')
              showName.innerHTML = response.data.name[i]
              charContainer.appendChild(showName)
          } */
          response.data.forEach((data) => {
             
              const showName = document.createElement('div')
              showName.innerHTML = data.name
              name.appendChild(showName)
              }) 
            
        })
        .catch(err => {
          console.log(err)
        })
  }

  getOneRegister (id) {
     axios.get(this.BASE_URL  + `/characters/${id}`)
    .then(data => {
      console.log(data.data)
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
      console.log(data.data)
    })
  }

  updateOneRegister (id) {
    axios.patch(this.BASE_URL + `/characters/${id}`)
    .then(data => {
      console.log(data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  deleteOneRegister (id) {
    axios.delete(this.BASE_URL + `/characters/${id}`)
    .then(data => {
      console.log(data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
}
