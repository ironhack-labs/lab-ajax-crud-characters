const axiosApp = axios.create({
  baseURL : 'http://localhost:8000/'
})

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () { //TODOS
  axiosApp
    .get(this.BASE_URL + '/characters')
    .then(response => console.log(response.data))
    .catch(err => console.log('ouch error', err)) 
  }

  getOneRegister (id) { // UNO SOLO
  axiosApp
    .get(this.BASE_URL + `/characters/${id}`)
    .then(list = console.log(list.data))
    .catch(err => console.log('No character', err))
  }

  createOneRegister(character) { //CREAR UNO
   
    const inpunts = document.querySelectorAll('#new-character-form input')
    const character = {

    id:inputs[0].value,
    name: inpunts[1].value,
    occupation: inpunts[2].value,
    weapon: inpunts[3].value,
    cartoon: inpunts[4].checked
  }
  axiosApp
    .post(this.BASE_URL + '/characters' + character)
    .then(created => console.log(created.data))
    .catch(err => console.log('oohh no created', err))
  }

    updateOneRegister(id) {
      //EDITAR
      const inputEdit = document.querySelectorAll('#edit-character-form input')
      const characterEdit = {
           
          id:inputEdit[0].value,
          name: inputEdit[1].value,
          occupation: inputEdit[2].value,
          weapon: inputEdit[3].value,
          cartoon: inputEdit[4].checked
        }
     
        axiosApp.put(this.BASE_URL, `/characters/${id}`, characterEdit)
          .then(oneCharacter => console.log(oneCharacter.data))
          .catch(err => console.log('Character not found', err))
          }
      
  deleteOneRegister (id) { 
  axiosApp
    .delete(this.BASE_URL + `/characters/${id}`)
    .then(deletecharacter => console.log('Character has been successfully deleted', deletecharacter.data))
    .catch(err => console.log('Character not found', err))
  }
}

