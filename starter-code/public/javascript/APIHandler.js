class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios
      .get( `${this.BASE_URL}/characters` )
      .then( response => { return response.data; } );
  }

  getOneRegister ( id ) {
    return axios
      .get( `${this.BASE_URL}/characters/${id}` )
      .then( response => { return response.data; } );
  }

  createOneRegister ( character ) {
    return axios
      .post( `${this.BASE_URL}/characters`, character )
      .then( response => { return response.data; } );
  }

  updateOneRegister ( id, character ) {
    return axios
      .patch( `${this.BASE_URL}/characters/${id}`, character )
      .then( response => { console.log( "UPD", response.data ); return response.data; } );
  }

  deleteOneRegister ( id ) {
    return axios
      .delete( `${this.BASE_URL}/characters/${id}` )
      .then( response => { return response.data; } );
  }
}
