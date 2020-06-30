class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL + "/characters")
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

  getOneRegister() {
    const id = document.querySelector(".operation input").value;
    axios
      .get(this.BASE_URL + "/characters/" + id)
      .then((oneCharacter) => console.log(oneCharacter.data))
      .catch((err) => console.log("err", err));
  }

  createOneRegister() {
    const input = document.querySelectorAll("#new-character-form input");

    const theCharacter = {
      name: input[0].value,
      occupation: input[1].value,
      weapon: input[2].value,
      cartoon: input[3].checked,
    };

    axios
      .post(this.BASE_URL + "/characters", theCharacter)
      .then((input) => console.log(input.data))
      .catch((err) => console.log("err", err));
  }

  updateOneRegister() {
    // const idUpd = document.querySelector("#edit-character-form input").value;
    // const input = document.querySelectorAll("#edit-character-form input");

    // const newCharInfo = {
    //   name: input[1].value,
    //   occupation: input[2].value,
    //   weapon: input[3].value,
    //   cartoon: input[4].checked,
    // }

    // axios
    //   .put((this.BASE_URL + "/characters/" + idUpd), newCharInfo)
    //   .then(console.log(newCharInfo))
    //   .catch((err) => console.log("err", err));
  }

  deleteOneRegister(id) {
    const idDel = document.querySelector(".delete input").value;

    axios
      .delete(this.BASE_URL + "/characters/" + idDel)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("err", err));
  }
}
