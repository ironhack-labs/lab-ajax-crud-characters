const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function(event) {
      // console.log(charactersAPI.getFullList());
      charactersAPI
        .getFullList()
        .then(response => {
          document.querySelector(".characters-container").innerHTML = "";
          response.forEach(element => {
            let div = document.createElement("div");
            div.innerHTML = `<p>Name: ${element.name}</p>
            <p>Occupation: ${element.occupation}</p>
            <p>Weapon: ${element.weapon}</p>
            <p>Cartoon: ${element.cartoon}</p>`;
            div.classList.add("character-info");
            document.querySelector(".characters-container").appendChild(div);
          });
        })
        .catch(err => console.log(err));

      // IF I HAVE TIME YOUTUBE ASYNC AWAIT
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function(event) {
      charactersAPI
        .getOneRegister(document.getElementById("character-id").value)
        .then(response => {
          document.querySelector(".characters-container").innerHTML = "";
          let div = document.createElement("div");
          div.innerHTML = `<p>Name: ${response.name}</p>
            <p>Occupation: ${response.occupation}</p>
            <p>Weapon: ${response.weapon}</p>
            <p>Cartoon: ${response.cartoon}</p>`;
          div.classList.add("character-info");
          document.querySelector(".characters-container").appendChild(div);
        })
        .catch(err => console.log(err));
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function(event) {});
  charactersAPI
    .deleteOneRegister(document.getElementById("character-delete-id").value)
    .then(response => {
      let p = document.createElement("p");
      p.innerText = "The character was deleted";
      document.querySelector(".operations").appendChild(p);
    })
    .catch(err => console.log(err));

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function(event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function(event) {});
});
