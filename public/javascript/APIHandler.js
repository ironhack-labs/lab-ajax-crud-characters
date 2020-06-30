const axiosApp = axios.create({
  baseURL: 'http://localhost:8000'
})

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axiosApp.get(this.BASE_URL + '/characters')
            .then(response => response.data.forEach(elm => {
              let newChar = document.querySelector('.character-info').cloneNode(true)
              newChar.querySelector('.name').innerHTML = `${elm.name}`
              newChar.querySelector('.occupation').innerHTML = `${elm.occupation}`
              newChar.querySelector('.weapon').innerHTML = `${elm.weapon}`
              newChar.querySelector('.cartoon').innerHTML = `${elm.cartoon}`

              document.querySelector('.characters-container').appendChild(newChar)
          
            }))
            .catch(err => console.log(err))

     

  }

  getOneRegister () {
    const id = document.querySelector('.operation input').value
    axiosApp.get(this.BASE_URL + `/characters/${id}`)
            .then(response =>{

              let inputID = document.querySelector('.character-info').cloneNode(true)
              inputID.querySelector('.name').innerHTML = `${response.data.name}`
              inputID.querySelector('.occupation').innerHTML = `${response.data.occupation}`
              inputID.querySelector('.weapon').innerHTML = `${response.data.weapon}`
              inputID.querySelector('.cartoon').innerHTML = `${response.data.cartoon}`
  
              document.querySelector('.characters-container').appendChild(inputID)


            })
            .catch(err => console.log(err))
            
  }

  createOneRegister () {
      const inputs = document.querySelectorAll('#new-character-form input')
  
      const character = {
        name: inputs[0].value,
        occupation: inputs[1].value,
        weapon: inputs[2].value,
        cartoon: inputs[3].checked
      }
  
      axiosApp.post(this.BASE_URL + '/characters', character)
              .catch(err => console.log('err', err))
    }
  

  updateOneRegister () {
    const id = document.querySelector('#edit-character-form input').value
    const inputs = document.querySelectorAll('#edit-character-form input')
    axiosApp.get(this.BASE_URL + `/characters/${id}`)
            .then(response => fillEditForm(response.data))
            .catch(err => console.log('err', err))

            function fillEditForm(data) {
          
              inputs[1].value = data.name
              inputs[2].value = data.occupation
              inputs[3].value = data.weapon
              inputs[4].checked = data.cartoon

          }

          const newCharacterData = {
              name: inputs[1].value,
              occupation: inputs[2].value,
              weapon: inputs[3].value,
              cartoon: inputs[4].value
        }

        axiosApp.put(this.BASE_URL + `/characters/${id}`, newCharacterData)
        .catch(err => console.log('err', err))
  }


  deleteOneRegister () {
    const id = document.querySelector('.operation-delete input').value
    axiosApp.delete(this.BASE_URL + `/characters/${id}`)
            .catch(err => console.log(err))

  }
}
