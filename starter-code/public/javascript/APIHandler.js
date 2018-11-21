class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
 
  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    .then((character)=>{
       return character.data;
    })
    .catch(err=>{
      console.log(err)
    })
  }
 
  getOneRegister (id) {
 
    return axios.get(`${this.BASE_URL}/characters/?id=${id}`)
    .then((character)=>{
      console.log(character.data[0])
      return character.data[0]
    })
  }
 
  createOneRegister (obj) {

    const {name, occupation, weapon, cartoon} = obj;

    let id = 1;

    for (let i=0; axios.get(`${this.BASE_URL}/characters/${i}`)!==null; i++){
      id = i;
    }

    dbObject = {id: id, name: name, occupation: occupation, weapon: weapon, cartoon: cartoon};

    console.log (dbObject);

    return axios.post(`${this.BASE_URL}/characters`, dbObject);
  }
 
  updateOneRegister () {
 
  }
 
  deleteOneRegister () {
 
 
  }
 }