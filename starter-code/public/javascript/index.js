const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = () => {
    charactersAPI
      .getFullList()
      .then(response => {
        const { id, name, occupation, cartoon, weapon } = response.data;
        response.data.forEach((x, index) => {
          if (response.data[index].name !== undefined) {
            document.getElementById(
              "allContainer"
            ).innerHTML += ` <div class="characters-container">
           <div class="character-info">
             <div class="name">${response.data[index].name}</div>
             <div class="occupation">${response.data[index].occupation}</div>
             <div class="cartoon">${response.data[index].cartoon}</div>
             <div class="weapon">${response.data[index].weapon}</div>
           </div>
         </div>`;
          }
        });

        console.log(response.data);
      })
      .catch(error => console.log(error));
  };

  document.getElementById("fetch-one").onclick = function() {
    const id = document.getElementById("fetch-one-input").value;
    charactersAPI.getOneRegister(id).then(response => {});
  };

  document.getElementById("delete-one").onclick = function() {};

  document.getElementById("edit-character-form").onsubmit = function() {};

  document.getElementById("new-character-form").onsubmit = function() {};
});
