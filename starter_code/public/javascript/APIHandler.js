/* jshint esversion: 6 */
class APIHandler { //class
  constructor (baseUrl) { //constructor
    this.BASE_URL = baseUrl;
  }

  getFullList () { //This is a method. 
    return axios.get(this.BASE_URL + "/characters")
    .then(response => { 
      console.log(response.data); //Why is this even an object. 
        return response.data;
    });
  }

  getOneRegister () {
    let charId = document.getElementById("character-id").value;
    return axios.get(this.BASE_URL + `/characters/${charId}`)
    .then(response => {
      console.log(response);
        return response.data;
    });
  }

  createOneRegister () {
    // let newChar = {
    //   name: $("#new-char-name").val(),occu: $("#new-char-occu").val(),
    //   weap: $("#new-char-weap").val(),cartoon: $("#new-char-name").val(),
    // }
    newChar = axios.get(this.BASE_URL + `/characters/`, {name, occupation, weapon, cartoon})
    return axios.post(this.BASE_URL + `/characters/`, {name, occupation, weapon, cartoon})

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
