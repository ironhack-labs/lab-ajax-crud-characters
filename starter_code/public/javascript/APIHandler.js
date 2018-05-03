class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    fetch("http://localhost:8000/characters")
    .then(res=>{
      if(!res.ok) return console.log(res);
      return res.json();
    })
    .then(data=>{
      console.log(data);
    });
    
  }

  getOneRegister () {
    fetch("http://localhost:8000/characters")
    .then(res=>{
      if(!res.ok) return console.log(res);
      return res.json();
    })
    .then(data=>{
      console.log(data[0].id);
    });
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
