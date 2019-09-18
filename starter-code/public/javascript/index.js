const charactersAPI = new APIHandler(
  "https://ih-crud-api.herokuapp.com/characters"
  );
  const minionsCell = document.querySelector(".characters-container");
  
  window.addEventListener("load", () => {
    document
    .getElementById("fetch-all")
    .addEventListener("click", function(event) {
      printMinions();
    });
    
    document
    .getElementById("fetch-one")
    .addEventListener("click", function(event) {
      const id = document.querySelector("#character-id").value;
   
      charactersAPI.getOneRegister(id).then(res => {
        const { data } = res;
        minionsCell.innerHTML = '';
        minionsCell.innerHTML += `
        <li>
        <div class="character-info">
        <div class="name">Character name: ${data.name}</div>
        <div class="occupation">Character Occupation ${data.occupation}</div>
        <div class="cartoon">Is a Cartoon?</div>
        <div class="weapon">Character weapon: ${data.weapon}</div>
        </div>
        </li>`;
      });
    });
    
    document
    .getElementById("delete-one")
    .addEventListener("click", function(event) {
      const id = document.querySelector("#character-id-delete").value;
      charactersAPI.deleteOneRegister(id).then(res => {
        const { data } = res;
        minionsCell.innerHTML = '';
        printMinions();
      })
    });
    
    document.querySelector("#edit-character-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      const id = document.querySelector("#chr-edit-id").value;
      const name = document.querySelector("#name-edit").value;
      const occupation = document.querySelector("#occupation-edit").value;
      const weapon = document.querySelector("#weapon-edit").value;
      const isCartoon = document.querySelector("#checkbox-edit").checked;
      console.log(name, weapon, occupation, checkbox);
      charactersAPI.updateOneRegister (id, {name, occupation, weapon}).then(() => {
        printMinions();
      })
      .catch(error => console.error(error));
    });
    
    document.querySelector("#new-character-form").onsubmit = function(event) {
      event.preventDefault();
      const name = document.querySelector("#name").value;
      const weapon = document.querySelector("#weapon").value;
      const occupation = document.querySelector("#occupation").value;
      const checkbox= document.querySelector("#checkbox").checked; 
        
      charactersAPI.createOneRegister({
        name,
        weapon,
        occupation,
        checkbox
      }).then(()=> {
        printMinions();
      })
    };
  });
  
  const printMinions = () => {
    console.log("1")
    charactersAPI.getFullList().then((res) => {
      console.log("2")
      const { data } = res;
      console.log("3")
      minionsCell.innerHTML = '';
      data.forEach((character) => {
        minionsCell.innerHTML += `
        <li>
        <div class="character-info">
        <div class="name">Character name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="cartoon">Is it a cartoon? ${character.isCartoon}</div>
        <div class="weapon">Character weapon: ${character.weapon}</div>
        </div>
        </li>
        `;
      });
    });
  };
  