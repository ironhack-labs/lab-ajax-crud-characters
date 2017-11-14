//NOTE: NEED TO INSTALL PACKAGE.JSON,
// BUT FOR SOME REASON NOT POSSIBLE - THEREFOR PREVIEW OF FILE WAS UNAVAILABLE

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }


  // // Get all the characters info from 
  axios  
  get(this.BASE_URL + "/characters")
  then(response => getFullList(response.data))
  catch(err => handleError(err.data));

  getFullList (response.data) {
    // console.log(response.data)
  }


  // Get a single character info
  axios
  .get(this.BASE_URL + "/characters/:id", getOneRegister)
  .then(response => getOneRegister(response.data))
  .catch(err => handleError(err.data));

  getOneRegister (response.data) {
    console.log(response.data)
  }

  //  Create a single character posting the data
  axios
  .post(this.BASE_URL + "/characters", createOneRegister)
  .then(response => createOneRegister(response.data))
  .catch(err => handleError(err.data));

  createOneRegister (response.data) {
    console.log(response.data)
  }

  
  // Edit a single character through his id
  axios
  .patch(this.BASE_URL + "/characters/:id", updateOneRegister)
  .then(response => updateOneRegister(response.data))
  .catch(err => handleError(err.data));

  updateOneRegister (response.data) {
    console.log(response.data)
  }

  // Delete a single character through his id in 

  axios
  .delete(this.BASE_URL + "/characters/:id", updateOneRegister)
  .then(response => deleteOneRegister(response.data))
  .catch(err => handleError(err.data))


  deleteOneRegister () {
    console.log("File has been deleted")
  }
}
