class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    let monitos = axios.create({
      baseUrl:"http://localhost:8000/characters"
    });
      monitos.get()
      .then((response) =>{
        res.json(response.data)
      })
      .catch((error) => {
        console.log('Oh nooo hay un error!');
        console.log(error);
      })
  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
