class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get('http://localhost:8000/characters')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getOneRegister() {
    const charID = document.getElementById('character-id').value;

    axios.get(`http://localhost:8000/characters/${charID}`)
      .then((response) => {
        console.log(charID);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  createOneRegister() {
    const theName = document.getElementsByClassName('the-name');
    const theOccupation = document.getElementsByClassName('the-occupation');
    const theWeapon = document.getElementsByClassName('the-weapon');
    const theCartoon = document.getElementsByClassName('the-cartoon');
    console.log(theName[0].value);

    const characterInfo = {
      name: theName[0].value,
      occupation: theOccupation[0].value,
      weapon: theWeapon[0].value,
      cartoon: theCartoon[0].value,
    }

    axios.post('http://localhost:8000/characters', characterInfo)
    .then(response => {
      console.log("You just created this character: ", response.data);
    })
   .catch(error => {
       console.log("Error is: ", error);
    });
  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}
