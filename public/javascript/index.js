const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(response => {
      let parentDiv = document.querySelector(".characters-container");
      parentDiv.innerHTML = "";

      response.data.forEach(element => {

         const newLineHtml = document.createElement("div");
          newLineHtml.classList.add("character-info");
          parentDiv.appendChild(newLineHtml);
          const newchildName  = document.createElement("div");
          newchildName.classList.add("name");
          newchildName.innerHTML = `Character Name: ${element.name}`;
          newLineHtml.appendChild(newchildName);

          const newchildOccup  = document.createElement("div");
          newchildOccup.classList.add("occupation");
          newchildOccup.innerHTML = `Character Occupation: ${element.occupation}`;
          newLineHtml.appendChild(newchildOccup);

          const newchildCartoon  = document.createElement("div");
          newchildCartoon.classList.add("cartoon");
          newchildCartoon.innerHTML = `Is a Cartoon? ${element.cartoon}`;
          newLineHtml.appendChild(newchildCartoon);

          const newchildWeapon  = document.createElement("div");
          newchildWeapon.classList.add("weapon");
          newchildWeapon.innerHTML = `Character Weapon ${element.weapon}`;
          newLineHtml.appendChild(newchildWeapon);

      });
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
