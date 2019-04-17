document.querySelector(".characters-container").innerHTML = "";
class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL + "/characters")

      .then(response => {
        response.data.forEach(element => {
          document.querySelector(
            ".characters-container"
          ).innerHTML += `<div class="character-info">
        <div class="id"> Id: ${element.id}</div>
        <div class="name"> Name: ${element.name}</div>
        <div class="occupation"> Occupation: ${element.occupation}</div>
        <div class="weapon"> Weapon: ${element.weapon}</div>
        <div class="cartoon"> Cartoon: ${element.cartoon}</div>
        </div>       `;
        });
      })
      .catch(err => {});
  }

  getOneRegister() {
    let numero = document.querySelector(".numero").value;
    axios.get(this.BASE_URL + `/characters/${numero}`).then(response => {
      document.querySelector(
        ".characters-container"
      ).innerHTML += `<div class="character-info">
      <div class="id"> Id: ${response.data.id}</div>
      <div class="name"> Name: ${response.data.name}</div>
      <div class="occupation"> Occupation: ${response.data.occupation}</div>
      <div class="weapon"> Weapon: ${response.data.weapon}</div>
      <div class="cartoon"> Cartoon: ${response.data.cartoon}</div>
      </div>       `;
    });
  }

  createOneRegister() {}

  updateOneRegister() {}

  deleteOneRegister() {
    let numeroDelete = document.querySelector(".numeroDelete").value;
   
    axios.delete(this.BASE_URL + '/characters/' + numeroDelete).then(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
