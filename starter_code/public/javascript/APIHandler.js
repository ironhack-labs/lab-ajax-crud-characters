class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  /////////////////////////////////////////////////////////////////////////////
  // Verb: GET, Route: "/characters"
  // It receives NO parameters
  // It returns the full characters list
  // It returns JSON

  getFullList () {

    return axios({
      url: this.BASE_URL,
      method: "GET"
    })

  }

  /////////////////////////////////////////////////////////////////////////////
  // Verb: GET, Route: "/characters/:id"
  // It receives the character ID as a parameter (route)
  // It returns the character with the indicated id
  // It returns JSON

  getOneRegister (id) {

    return axios({
      url: this.BASE_URL + id,
      method: "GET"
    });

  }

  /////////////////////////////////////////////////////////////////////////////
  // Verb: POST, Route: "/characters"
  // It receives an object as a parameter, with the following format: { name: string, occupation: string, debt: boolean, weapon: string }
  // It returns the created character if there are no errors
  // It returns the wrong fields if there is some error
  // It returns JSON

  createOneRegister (character) {

    return axios({
      url: this.BASE_URL,
      method: "POST",
      data: character);
    });
    
  }

  /////////////////////////////////////////////////////////////////////////////
  // Verb: PATCH/PUT, Route: "/characters/:id"
  // It receives the character id as a parameter (route)
  // It receives an object as a parameter, with the following format: { name: string, occupation: string, debt: boolean, weapon: string }
  // All the fields are optionals
  // It returns the updated character if there are no errors
  // It returns "Character not found" if there is no character with the indicated id
  // It returns JSON / text

  updateOneRegister (id, character) {

    return axios({
      url: this.BASE_URL + id,
      method: "PATCH",
      data: character
    });

  }


  /////////////////////////////////////////////////////////////////////////////
  // Verb: DELETE, Route: "/characters/:id"
  // It receives the character id as a parameter (route)
  // It returns "Character has been successfully deleted" if there are no errors
  // It returns "Character not found" if there is no character with the indicated id
  // It returns text

  deleteOneRegister (id) {

    return axios({
      url: this.BASE_URL + id,
      method: "DELETE"
    });

  }

}
