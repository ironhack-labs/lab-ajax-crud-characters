class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get("http://localhost:8000/characters")
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(err => {
      console.log("ERROR", err);
    })
  }

  getOneRegister(id) {
    axios.get("http://localhost:8000/characters/"+id)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(err => {
      console.log("ERROR", err);
    });
  }

  createOneRegister (elements) {
    axios.post("http://localhost:8000/characters/", elements)
    .then(response => {
      console.log(response.data);
    })
    .catch (err => {
      console.log("ERROR", err);
    });
  }

  updateOneRegister (id, update) {
    axios.put("http://localhost:8000/characters/"+id, update)
    .then(result => {
      console.log(result.data);
    })
    .catch (err => {
      console.log ("ERROR", err);
    })
  }

  deleteOneRegister (id) {
    axios.delete("http://localhost:8000/characters/"+id)
    .then(result => {
      console.log(result.data);
    })
    .catch (err => {
      console.log ("ERROR", err);
    })
  }
}
