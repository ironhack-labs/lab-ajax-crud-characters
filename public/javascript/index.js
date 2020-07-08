const charactersAPI = new APIHandler("http://localhost:8000/characters");
const charactersContainer = document.getElementById("container");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((dbRes) => {
          console.log(dbRes.data);
          if (dbRes !== []) charactersContainer.innerHTML = "";
          for (let i = 0; i < dbRes.data.length; i++) {
            charactersContainer.innerHTML += `<div class="character-info">
                <div class="name">Id: <span>${dbRes.data[i].id}</span></div>
                <div class="name">Name: <span>${dbRes.data[i].name}</span></div>
                <div class="occupation">Occupation: <span>${dbRes.data[i].occupation}</span></div>
                <div class="cartoon">Cartoon: <span>${dbRes.data[i].cartoon}</span></div>
                <div class="weapon">Weapon: <span>${dbRes.data[i].weapon}</span></div>
                </div>`;
          }
        })
        .catch((err) => console.log(err));
    });
});

document
  .getElementById("fetch-one")
  .addEventListener("click", function (event) {
    const userInput = document.getElementById("character-id").value;
    console.log(userInput);
    charactersAPI
      .getOneRegister(userInput)
      .then((dbRes) => {
        charactersContainer.innerHTML = `<div class="character-info">
                <div class="name">Id: <span>${dbRes.data.id}</span></div>
                <div class="name">Name: <span>${dbRes.data.name}</span></div>
                <div class="occupation">Occupation: <span>${dbRes.data.occupation}</span></div>
                <div class="cartoon">Cartoon: <span>${dbRes.data.cartoon}</span></div>
                <div class="weapon">Weapon: <span>${dbRes.data.weapon}</span></div>
                </div>`;
      })
      .catch((err) => console.log(err));
  });

document
  .getElementById("delete-one")
  .addEventListener("click", function (event) {
    let userInput = document.getElementById("character-id-delete").value;
    if (userInput)
      charactersAPI
        .deleteOneRegister(userInput)
        .then(() => {
          document.getElementById("delete-one").classList.add("success");
        })
        .catch((err) => {
          document.getElementById("delete-one").classList.add("problem");
          console.log(err);
        });
  });

document
  .getElementById("new-character-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const occupation = document.getElementById("occupation").value;
    const weapon = document.getElementById("weapon").value;
    let cartoon;
    document.getElementById("cartoon").checked
      ? (cartoon = true)
      : (cartoon = false);

    const newCharacter = {
      name,
      occupation,
      weapon,
      cartoon,
    };

    if (newCharacter.name)
      charactersAPI
        .createOneRegister(newCharacter)
        .then(() => {
          document.getElementById("send-create").classList.add("success");
        })
        .catch((err) => {
          document.getElementById("send-create").classList.add("problem");
          console.log(err);
        });
  });

document
  .getElementById("edit-character-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name-ed").value;
    const occupation = document.getElementById("occupation-ed").value;
    const weapon = document.getElementById("weapon-ed").value;
    let cartoon;
    document.getElementById("cartoon-ed").checked
      ? (cartoon = true)
      : (cartoon = false);

    const updatedCharacter = {
      name,
      occupation,
      weapon,
      cartoon,
    };

    charactersAPI
      .updateOneRegister(
        document.getElementById("chr-id").value,
        updatedCharacter
      )
      .then(() => {
        document.getElementById("send-update").classList.add("success");
      })
      .catch((err) => {
        document.getElementById("send-update").classList.add("problem");
        console.log(err);
      });
  });
