const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  const caracterContainer = document.querySelector(".characters-container");

  function createCaracter(caracterInfos) {
    const oneCaracter = document.createElement("div");
    oneCaracter.className = "character-info";
    oneCaracter.innerHTML += `<div class="id">ID : ${caracterInfos.id}</div>
    <div class="name">Name : ${caracterInfos.name}</div>
  <div class="occupation">Occupation : ${caracterInfos.occupation}</div>
  <div class="cartoon">Is a cartoon ? : ${caracterInfos.cartoon}</div>
  <div class="weapon">Weapon : ${caracterInfos.weapon}</div>`;
    caracterContainer.appendChild(oneCaracter);
  }

  function displayFullList() {
    charactersAPI
      .getFullList()
      .then((apiResponse) => {
        caracterContainer.innerHTML = "";

        apiResponse.data.forEach((element) => {
          createCaracter(element);
        });
      })
      .catch((apiError) => {
        console.log(apiErr);
      });
  }

  document.getElementById("fetch-all").onclick = (event) => {
    displayFullList();
  };

  function displayOne() {
    const getIdInput = document.getElementById("character-id");
    const id = getIdInput.value;

    charactersAPI
      .getOneRegister(id)
      .then((apiResponse) => {
        caracterContainer.innerHTML = "";

        createCaracter(apiResponse.data);
      })
      .catch((apiError) => {
        console.log(apiErr);
      });
  }

  document.getElementById("fetch-one").onclick = (event) => {
    displayOne();
  };

  document.getElementById("delete-one").onclick = (event) => {
    const getIdInput = document.getElementById("character-id-delete");
    const id = getIdInput.value;

    charactersAPI
      .deleteOneRegister(id)
      .then((apiResponse) => {
        displayFullList();
      })
      .catch((apiError) => {
        console.log(apiErr);
      });
  };

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const id = document.getElementById("chr-id").value;
      const name = document.getElementById("new-name-input").value;
      const occupation = document.getElementById("new-occupation-input").value;
      const weapon = document.getElementById("new-weapon-input").value;
      const isCartoon = document.getElementById("new-cartoon-input");
      let cartoon = isCartoon.checked;

      const newCharacterInfo = {
        name,
        occupation,
        weapon,
        cartoon,
      };

      charactersAPI
        .updateOneRegister(id, newCharacterInfo)
        .then((apiResponse) => {
          const getButton = document.getElementById("update-data");
          getButton.classList.add("submit-ok");
          displayFullList();
        })
        .catch((apiError) => {
          const getButton = document.getElementById("update-data");
          getButton.classList.add("submit-error");
        });
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name-input").value;
      const occupation = document.getElementById("occupation-input").value;
      const weapon = document.getElementById("weapon-input").value;
      const isCartoon = document.getElementById("cartoon-input");
      let cartoon = isCartoon.checked;

      const newCharacterInfo = {
        name,
        occupation,
        weapon,
        cartoon,
      };

      charactersAPI
        .createOneRegister(newCharacterInfo)
        .then((apiResponse) => {
          const getButton = document.getElementById("create-data");
          getButton.classList.add("submit-ok");
          displayFullList();
        })
        .catch((apiError) => {
          const getButton = document.getElementById("create-data");
          getButton.classList.add("submit-error");
        });
    });
});
