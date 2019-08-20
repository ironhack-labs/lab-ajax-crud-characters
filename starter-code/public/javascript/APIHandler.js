class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {

    axios.get(this.BASE_URL)
      .then((result) => {

        //we make an axios request to the url + the searchterm

        let characterList = result.data;

        console.log(characterList);

        return characterList;

      })
      .catch((err) => {
        console.log(err);
      })

  }

  getOneRegister() {

  }

  createOneRegister() {

  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}
