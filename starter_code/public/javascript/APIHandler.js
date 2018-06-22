// class APIHandler to deal with the Axios calls. 
// only responsability of this class is to display the JSON result  from the API, 
// or give the needed information to the API via a function argument.

// START server: json-server --watch db.json --port 8000

const charApi = axios.create({
  baseURL: 'http://localhost:8000'
})


// Since Axios is Promise based, we need to add our .then() and .catch()
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

// Get all the characters info from http://localhost:8000/characters
  getFullList () {
    return charApi.get(`/characters`).then(response => response.data ).catch(err => toggleButtonColour('#fetch-all','red'));
  }

// Get a single character info from http://localhost:8000/characters/:id
  getOneRegister (id) {
    return charApi.get(`/characters/${id}`).then(response => response.data ).catch(err => toggleButtonColour('#fetch-one','red'));
  }

// Create a single character posting the data to http://localhost:8000/characters
  createOneRegister (characterInfo) {
    return charApi.post('/characters',characterInfo).then(response => response.data ).catch(err => toggleButtonColour('#send-data','red'));
  } 

// Edit a single character through his id in http://localhost:8000/characters/:id
  updateOneRegister (updatedData) {
    return charApi.put(`/characters/${updatedData.id}`,updatedData).then(response => toggleButtonColour('#send-data-update','green')).catch(err => toggleButtonColour('#send-data-update','red') );
  }
  
// Delete a single character through his id in http://localhost:8000/characters/:id
  deleteOneRegister (id) {
    return charApi.delete(`/characters/${id}`,null).then(response => toggleButtonColour('#delete-one','green')).catch(err => toggleButtonColour('#delete-one','red') );
  }
}