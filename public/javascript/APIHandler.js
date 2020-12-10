class APIHandler {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getFullList() {
    axios.get(this.baseUrl + "/characters").then((response) => {
      const data = response.data;
      const charContainer = document.querySelector(".characters-container");
      charContainer.innerHTML = "";

      data.forEach((character) => {
        charContainer.innerHTML += `
      
        <div class="character-info">
          <div>Id: <span>${character.id}</span></div>
          <div>Name: <span>${character.name}</span></div>
          <div>Occupation: <span>${character.occupation}</span></div>
          <div>Cartoon:<span> ${character.cartoon}</span></div>
          <div>Weapon: <span>${character.weapon}</span></div>
        </div>`;
      });

      console.log("Response from the API: ", response);

      console.log("The array of characters: ", data);
    });
  }

  getOneRegister() {
    const characterId = document.querySelector("#idCharacter").value;
    const btnSelector = document.querySelector("#fetch-one");
    axios
      .get(this.baseUrl + "/characters/" + characterId)
      .then((response) => {
        console.log("Response from the API: ", response);
        const data = response.data;
        console.log("The array of character: ", data);

        const charContainer = document.querySelector(".characters-container");
        charContainer.innerHTML = "";
        charContainer.innerHTML = `
      
        <div class="character-info">
          <div>Id: <span>${data.id}</span></div>
          <div>Name: <span>${data.name}</span></div>
          <div>Occupation: <span>${data.occupation}</span></div>
          <div>Cartoon:<span> ${data.cartoon}</span></div>
          <div>Weapon: <span>${data.weapon}</span></div>
        </div>`;

        btnSelector.classList.add("success");
        setTimeout(function () {
          btnSelector.classList.remove("success");
        }, 400);
      })
      .catch((err) => {
        btnSelector.classList.add("fail");
        setTimeout(function () {
          btnSelector.classList.remove("fail");
        }, 400);
        console.log(`Error while creating a new character: ${err}`);
      });
  }

  createOneRegister() {
    const name = document.querySelector("#name").value;
    const occupation = document.querySelector("#occupation").value;
    const weapon = document.querySelector("#weapon").value;
    const cartoon = document.querySelector("#cartoon").checked;

    const newCharacterInfo = {
      name,
      occupation,
      weapon,
      cartoon,
    };
    const btnSelector = document.querySelector("#send-data2");
    console.log("New character: ", newCharacterInfo);
    axios
      .post(this.baseUrl + "/characters", newCharacterInfo)
      .then((response) => {
        console.log("Response from the API: ", response);
        const data = response.data;
        btnSelector.classList.add("success");
        setTimeout(function () {
          btnSelector.classList.remove("success");
        }, 400);
      })
      .catch((err) => {
        btnSelector.classList.add("fail");
        setTimeout(function () {
          btnSelector.classList.remove("fail");
        }, 400);
        console.log(`Error while creating a new character: ${err}`);
      });
  }

  updateOneRegister() {
    const charId = document.querySelector("#chr-id").value;
    const name = document.querySelector("#edit-name").value;
    const occupation = document.querySelector("#edit-occupation").value;
    const weapon = document.querySelector("#edit-weapon").value;
    const cartoon = document.querySelector("#edit-cartoon").checked;
    const updatedCharacter = {
      name,
      occupation,
      weapon,
      cartoon,
    };
    const btnSelector = document.querySelector("#send-data");
    console.log(updatedCharacter);
    axios
      .patch(this.baseUrl + "/characters/" + charId, updatedCharacter)
      .then((response) => {
        console.log("Response from the API: ", response);
        const data = response.data;
        console.log("The array of characters: ", data);
        btnSelector.classList.add("success");
        setTimeout(function () {
          btnSelector.classList.remove("success");
        }, 400);
      })
      .catch((err) => {
        btnSelector.classList.add("fail");
        setTimeout(function () {
          btnSelector.classList.remove("fail");
        }, 400);
        console.log(`Error while updating a character: ${err}`);
      });
  }
  deleteOneRegister() {
    const charId = document.querySelector("#delete-id").value;
    const btnSelector = document.querySelector("#delete-one");
    axios
      .delete(this.baseUrl + "/characters/" + charId)
      .then((response) => {
        console.log("Response from the API: ", response);
        //const data = response.data;

        btnSelector.classList.add("success");
        setTimeout(function () {
          btnSelector.classList.remove("success");
        }, 400);
        //console.log("The array of characters: ", data);
        this.getFullList();
      })
      .catch((err) => {
        btnSelector.classList.add("fail");
        setTimeout(function () {
          btnSelector.classList.remove("fail");
        }, 400);
        console.log(`Error while deleting a new character: ${err}`);
      });
  }
}
