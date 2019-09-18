const charactersAPI = new APIHandler("http://localhost:8000/characters");
const charactersContainer = document.querySelector(".characters-container");

const printAllCharacters = () => {
  charactersAPI.getFullList().then(res => {
    const { data } = res;
    charactersContainer.innerHTML = "";
    data.forEach(element => {
      charactersContainer.innerHTML += `
      <div class="character-info">
        <div class="name">Name: <span>${element.name}</span></div>
        <div class="occupation">Occupation: <span>${element.occupation}</span></div>
        <div class="cartoon">Is a Cartoon? <span>${element.cartoon}</span></div>
        <div class="weapon">Weapon: <span>${element.weapon}</span></div>
      </div>

      `;
    });
  });
};
const printOneCharacter = () => {
  const id = document.querySelector("#char-id").value;
  charactersAPI.getOneRegister(id).then(res => {
    const { data } = res;
    charactersContainer.innerHTML = "";
    charactersContainer.innerHTML += `
      <div class="character-info">
        <div class="name">Name: <span>${data.name}</span></div>
        <div class="occupation">Occupation: <span>${data.occupation}</span></div>
        <div class="cartoon">Is a Cartoon? <span>${data.cartoon}</span></div>
        <div class="weapon">Weapon: <span>${data.weapon}</span></div>
      </div>

      `;
  });
};

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function(event) {
      printAllCharacters();
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function(event) {
      printOneCharacter();
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function(event) {
      const id = document.querySelector("#char-id-delete").value;
      console.log(id);
      charactersAPI
        .deleteOneRegister(id)
        .then(() => {
          document.querySelector("#delete-one").setAttribute(`class`, `active`);
        })
        .catch(() => {
          document.querySelector("#delete-one").setAttribute(`class`, `error`);
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      event.stopPropagation();
      const id = document.querySelector("#id-update").value;
      const name = document.querySelector("#name-update").value;
      const occupation = document.querySelector("#occupation-update").value;
      const weapon = document.querySelector("#weapon-update").value;
      const cartoon = document.querySelector("#cartoon-update").value;
      charactersAPI.updateOneRegister(id, {name, occupation, weapon, cartoon})
      .then(()=>{
        document.querySelector("#update-data").setAttribute(`class`, `active`);
        
      })
      .catch(error=>console.error(error)
      )

    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      event.stopPropagation();
      const name = document.querySelector("#name-create").value;
      const occupation = document.querySelector("#occupation-create").value;
      const weapon = document.querySelector("#weapon-create").value;
      const cartoon = document.querySelector("#cartoon-create").value;

      charactersAPI
        .createOneRegister({ name, occupation, weapon, cartoon })
        .then(() => {
          document.querySelector("#send-data").setAttribute(`class`, `active`);
        })
        .catch(() => {
          document.querySelector("#send-data").setAttribute(`class`, `error`);
         
        });
        
    });
});
