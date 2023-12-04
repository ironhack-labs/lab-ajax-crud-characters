const charactersAPI = new APIHandler("http://localhost:8000");
window.addEventListener("load", () => {
  document.getElementById("fetch-all").addEventListener("click", function () {
    const getClass = document.getElementsByClassName("characters-container")[0];
    getClass.innerHTML = "";
    charactersAPI
      .getFullList()
      .then((response) =>
        response.data.map((e) => {
          function handleElement(elementType, className, htmlContent) {
            const element = document.createElement(elementType);
            element.setAttribute("class", className);
            element.innerHTML = htmlContent;

            return element;
          }

          console.log(e);
          const getClass = document.getElementsByClassName(
            "characters-container"
          )[0];
          console.log(getClass);
          const charInfo = document.createElement("div");
          charInfo.setAttribute("class", "character-info");
          const idInfo = handleElement("div", "id", e.id);
          const nameInfo = handleElement("div", "name", e.name);
          const occInfo = handleElement("div", "occupation", e.occupation);
          const cartoonInfo = handleElement("div", "cartoon", e.cartoon);
          const weaponInfo = handleElement("div", "weapon", e.weapon);

          charInfo.append(idInfo, nameInfo, occInfo, cartoonInfo, weaponInfo);

          charInfo.appendChild(weaponInfo);
          getClass.appendChild(charInfo);
        })
      )
      .catch((err) => console.log("data is not found", err));
  });
  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const inputElement = document.getElementById("characterid");
      const getId = inputElement.value;
      const getClass = document.getElementsByClassName(
        "characters-container"
      )[0];
      getClass.innerHTML = "";
      console.log(getId);
      charactersAPI
        .getOneRegister(getId)
        .then((response) => {
          console.log("IS IT ONE =>", response);
          const getClass = document.getElementsByClassName(
            "characters-container"
          )[0];
          console.log(getClass);
          const charInfo = document.createElement("div");
          charInfo.setAttribute("class", "character-info");
          const idInfo = document.createElement("div");
          idInfo.setAttribute("class", "id");
          idInfo.innerHTML = response.data.id;
          charInfo.appendChild(idInfo);
          const nameInfo = document.createElement("div");
          nameInfo.setAttribute("class", "name");
          nameInfo.innerHTML = response.data.name;
          charInfo.appendChild(nameInfo);
          const occInfo = document.createElement("div");
          nameInfo.setAttribute("class", "occupation");
          occInfo.innerHTML = response.data.occupation;
          charInfo.appendChild(occInfo);
          const cartoonInfo = document.createElement("div");
          nameInfo.setAttribute("class", "cartoon");
          cartoonInfo.innerHTML = response.data.cartoon;
          charInfo.appendChild(cartoonInfo);
          const weaponInfo = document.createElement("div");
          nameInfo.setAttribute("class", "weapon");
          weaponInfo.innerHTML = response.data.weapon;
          charInfo.appendChild(weaponInfo);
          getClass.appendChild(charInfo);
        })
        .catch((err) => console.log("one register is not found", err));
    });
  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const deleteInput = document.getElementById("deletebutton");
      const deleteButton = document.getElementById("delete-one");
      const getId = deleteInput.value;
      console.log(getId);
      charactersAPI
        .deleteOneRegister(getId)
        .then((response) => {
          console.log(response.data);
          deleteButton.style.backgroundColor = "green";
        })
        .catch((err) => {
          console.log(err);
          deleteButton.style.backgroundColor = "red";
        });
    });
  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const getButton = document.getElementById("edit-data");
      const fieldid = document.getElementById("id-edit").value;
      const name = document.getElementById("name-edit").value;
      const occupation = document.getElementById("occupation-edit").value;
      const weapon = document.getElementById("weapon-edit").value;
      const isCartoon = document.getElementById("cartoon-edit").checked;

      console.log(isCartoon);
      console.log(fieldid, name, occupation, weapon, isCartoon);
      charactersAPI
        .updateOneRegister(fieldid, {
          name: name,
          occupation: occupation,
          weapon: weapon,
          cartoon: isCartoon,
        })
        .then(() => {
          getButton.style.backgroundColor = "green";
        })
        .catch((err) => {
          getButton.style.backgroundColor = "red";
          console.log(err);
        });
    });
  document
    .getElementById("send-data")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const name = document.getElementById("namefield").value;
      const occupation = document.getElementById("occupationfield").value;
      const weapon = document.getElementById("weaponfield").value;
      const isCartoon = document.getElementById("cartoonfield").checked;
      charactersAPI.createOneRegister({
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: isCartoon,
      });
    });
});
