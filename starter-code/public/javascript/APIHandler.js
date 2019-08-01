const theName = document.getElementsByClassName("the-name")
const theOccupation = document.getElementsByClassName("the-occupation")
const theWeapon = document.getElementsByClassName("the-weapon")


class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(`${this.BASE_URL}characters`)
      .then(allMin => {
        $(".characters-container").empty();
        allMin.data.forEach(allMin => {
          const myHtml = $(
            `<div class="character-info">
            <div class="id">Id: ${allMin.id}</div>
            <div class="name">Name: ${allMin.name}</div>
            <div class="occupation">Occupation: ${allMin.occupation}</div>
            <div class="cartoon">Cartoon: ${allMin.cartoon}</div>
            <div class="weapon">Weapon: ${allMin.weapon}</div>
          </div>`
          ); $(".characters-container").append(myHtml);
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  getOneRegister() {
    axios.get(`${this.BASE_URL}characters/${id}`)
      .then(response => {
        $(".characters-container").empty();
        const singleCharacter = $(`<div class="character-info">
            <div class="id">Id: ${response.data.id}</div>
            <div class="name">Name: ${response.data.name}</div>
            <div class="occupation">Occupation: ${response.data.occupation}</div>
            <div class="cartoon">cartoon: ${response.data.cartoon}</div>
            <div class="weapon">Weapon: ${response.data.weapon}</div>
          </div>`);
        $(".characters-container").append(singleCharacter);
      })
      .catch(error => {
        console.log(error);
      });
  }

  createOneRegister() {
    axios.post(`${this.BASE_URL}characters/`, myCharacter)
      .then(response => {
        const name = document.getElementsByName("name")
        const occupation = document.getElementsByName("occupation")
        const cartoon = document.getElementsByName("cartoon")
        const weapon = document.getElementsByName("weapon")

        if (name === "" || occupation === "" || cartoon === "" || weapon === "") {
        } else {
          const myCharacter = {
            name: name[0].value,
            occupation: occupation[0].value,
            cartoon: cartoon[0].checked,
            weapon: weapon[0].value
          };
          console.log("MyChar: ", myCharacter)
        }
      })
      .catch(error => {
        console.log(error);
      });
  }


  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}
