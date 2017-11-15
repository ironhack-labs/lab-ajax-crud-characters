//NOTE: NEED TO INSTALL PACKAGE.JSON,
// BUT FOR SOME REASON NOT POSSIBLE - THEREFOR PREVIEW OF FILE WAS UNAVAILABLE

"use strict";
class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  // // Get all the characters info from
  getFullList() {
    axios
      .get(this.BASE_URL + "/characters")
      .then(response => console.log(response))
      .catch(err => hconsole.log(err));
  }

  // Get a single character info
  getOneRegister() {
    axios
      .get(this.BASE_URL + "/characters/:id")
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  //  Create a single character posting the data
  createOneRegister(id) {
    axios
      .post(this.BASE_URL + "/characters")
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  // Edit a single character through his id
  updateOneRegister(newCharacter) {
    axios
      .patch(this.BASE_URL + "/characters/:id", newCharacter)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  // Delete a single character through his id in
  deleteOneRegister() {
    axios
      .delete(this.BASE_URL + "/characters/:id", updateOneRegister)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }
}
