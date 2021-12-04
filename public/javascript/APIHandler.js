// construct a class to deal with the Axios calls
// this class will display the JSON result that comes from the API
// the initial data is in /api/db.json
// this class only manage the API request and display the resulting value in JSON.
// run this on Terminal to make API works
// $ json-server --watch api/db.json --port 8000
// index.js --> const charactersAPI = new APIHandler('http://localhost:8000');
class APIHandler {
  constructor (baseUrl) {
    // // option 1
    // this.BASE_URL = baseUrl;
    // //console.log(typeof this.BASE_URL)
    // this.api = axios.create( { baseURL: this.BASE_URL });


    // option 2 
    this.api = axios.create({ baseURL: baseUrl }); 
    //this.api = axios.create({baseURL: "http://localhost:8000"})
  
  }
  
  //function declaration
  // It receives NO parameters
  // It returns the full characters list
  // It returns JSON
  // Get all the characters info from http://localhost:8000/characters
  // getFullList () {
  //   return this.api.get('/characters');
  // }
  // arrow function
  getFullList = () => this.api.get('/characters');

  //Get a single character info from http://localhost:8000/characters/:id
  //   Verb: GET, Route: "/characters/:id"
  // It receives the character ID as a parameter (route)
  // It returns the character with the indicated id
  // It returns JSON
  // getOneRegister (charId) {
  // }
  getOneRegister = (id) => this.api.get(`/characters/${id}`);

  // Verb: POST, Route: "/characters"
  // It receives an object as a parameter, with the following format: { name: string, occupation: string, cartoon: boolean, weapon: string }
  // It returns the created character if there are no errors
  // It returns the wrong fields if there is some error
  // It returns JSON
  createOneRegister = (char) => this.api.post(`/characters`, char);

  //   Verb: PATCH/PUT, Route: "/characters/:id"
  // It receives the character id as a parameter (route)
  // It receives an object as a parameter, with the following format: { name: string, occupation: string, cartoon: boolean, weapon: string }
  // All the fields are optional
  // It returns the updated character if there are no errors
  // It returns "Character not found" if there is no character with the indicated id
  // It returns JSON / text
  updateOneRegister = (id, charData) => {
    this.api.put(`/characters/${id}`, charData);
  };
  
  deleteOneRegister = (id) => this.api.delete(`/characters/${id}`);
}

