class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL + '/characters').then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("The error is: ", error);
    });
  }

  getOneRegister () {
    const theId = document.getElementsByName('character-id')[0].value;
    axios.get(this.BASE_URL + `/characters/${theId}`).then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("The error is: ", error);
    });
  }

  createOneRegister () {
    const theNames = document.getElementsByName('name');
    const theOccupations = document.getElementsByName('occupation');
    const theWeapons = document.getElementsByName('weapon');
    const theCartoons = document.getElementsByName('cartoon');

    const characterInfo = {
      name: theNames[0].value,
      occupation: theOccupations[0].value,
      weapon: theWeapons[0].value,
      isCartoon: theCartoons[0].checked
    };

    axios.post(this.BASE_URL + '/characters', characterInfo).then(response => {
      console.log('post successful and the response is: ',response.data);
    })
    .catch(error => {
      console.log("The error is: ", error);
    });
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
