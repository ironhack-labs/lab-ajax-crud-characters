class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(response => {
        // console.log(response.data);
        const characters = response.data;
        const charList = document.querySelector(`.character-info`);
        
        charList.innerHTML = ``;

        characters.forEach((character) => {
          charList.innerHTML += `<div class="name">Name: ${character.name}</div>
          <div class="occupation">Occupation: ${character.occupation}</div>
          <div class="cartoon">Cartoon: ${character.cartoon}</div>
          <div class="weapon">Weapon: ${character.weapon}</div>
          <hr>`
        });
      })
      .catch(error => {
        console.log(`error getting characters due to ${error}`);
      });
  }

  getOneRegister (id) {
    id = document.getElementById(`character-id`).value

    axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        console.log(response);
        const singleCharacter = response.data;

        const charList1 = document.querySelector(`.operation2`);

        charList1.innerHTML += `<div class="name">Name: ${singleCharacter.name}</div>
        <div class="occupation">Occupation: ${singleCharacter.occupation}</div>
        <div class="cartoon">Cartoon: ${singleCharacter.cartoon}</div>
        <div class="weapon">Weapon: ${singleCharacter.weapon}</div>`

        id = ``;
        
      })
      .catch(error => {
        console.log(`error getting single character due to ${error}`);
      });
  }

  createOneRegister () {
    const name = document.getElementById(`nameAdd`).value;
    const occupation = document.getElementById(`occupationAdd`).value;
    const weapon = document.getElementById(`weaponAdd`).value;
    const cartoon = document.getElementById(`cartoonAdd`).value;
    axios
      .post(`${this.BASE_URL}/characters`, {
        name,
        occupation,
        weapon,
        cartoon
      })
      .then(response => {
        this.getFullList();
      })
      .catch(error => {
        console.log(`error creating user due to: ${error}`);
      });

  }

  updateOneRegister () {
    const id = document.getElementById(`idUpdate`).value;
    const name = document.getElementById(`nameUpdate`).value;
    const occupation = document.getElementById(`occupationUpdate`).value;
    const cartoon = document.getElementById(`cartoonUpdate`).value;
    const weapon = document.getElementById(`weaponUpdate`).value;

    axios
      .put(`${this.BASE_URL}/characters/${id}`, {
        name,
        occupation,
        cartoon,
        weapon
      })
      .then(response => {
        this.getFullList();
      })
      .catch(error => {
        console.log(`error updating characters due to ${error}`);
      });

  }

  deleteOneRegister (id) {
    id = document.getElementById(`idDelete`).value;
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        this.getFullList();
      })
      .catch(error => {
        console.log(`error deleting due to: ${error}`);
      });
  }
}
