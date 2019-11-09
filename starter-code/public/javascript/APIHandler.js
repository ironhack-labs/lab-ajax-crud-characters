class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    // let data = undefined;
    return axios.get(this.BASE_URL + '/characters')
      // .then(responseFromApi => {
        // console.log(responseFromApi.data)
        // responseFromApi.data.forEach(element => {
        //   const {name, occupation, weapon, cartoon} = element;
        //   console.log(name);
        // });
        // return responseFromApi;
      // })
      // .catch(err => console.log("Error while getting the data: ", err));

      // return data;
  }

  getOneRegister (id) {
    axios.get(this.BASE_URL + '/characters/' + id)
      .then(responseFromApi => {
        console.log(responseFromApi.data)
      })
      .catch(err => console.log("Error while getting the data: ", err));

  }

  createOneRegister (characterInfo) {
    // const characterInfo = {
    //          name:       'WALL-E',
    //          occupation: 'Waste Allocation Robot',
    //          weapon:     'Head laser'
    //        };
     axios.post(this.BASE_URL + '/characters/', characterInfo)
      .then(responseFromApi => {
        console.log(responseFromApi.data)
      })
      .catch(err => console.log("Error while getting the data: ", err));

  }

  updateOneRegister (id, characterInfo) {
    axios.put(this.BASE_URL + '/characters/' + id, characterInfo)
      .then(responseFromApi => {
        console.log(responseFromApi.data)
      })
      .catch(err => console.log("Character not found"));
    
  }

  deleteOneRegister (id) {
    axios.delete(this.BASE_URL + '/characters/' + id)
      .then(responseFromApi => {
        console.log("Character has been successfully deleted ", responseFromApi.data)
      })
      .catch(err => console.log("Character not found "));
  }
}
