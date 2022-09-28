const charactersAPI = new APIHandler("http://localhost:8000");

function createNewElement(elem, text) {
  const newItem = document.createElement(elem);
  newItem.innerText = text;
  return newItem;
}

function deleteBySelector(selector) {
  const boxes = document.querySelectorAll(selector);
  boxes.forEach((box) => box.remove());
}

function printElem(item, data) {
  item.classList.toggle("hidden");
  item.classList.add("deleteMe");

  // let children = Array.from(item.children);
  // children.forEach((item) => {
  //   // item.className
  //   console.log(item.className);
  // });
  let idItem = createNewElement("div", "id:");
  idItem.classList.add("id");
  idItem.appendChild(createNewElement("span", data.id));
  item.querySelector(".name").before(idItem);
  item.querySelector(".name").innerText = "Name:";
  item.querySelector(".name").appendChild(createNewElement("span", data.name));
  item.querySelector(".occupation").innerText = `Occupation:`;
  item
    .querySelector(".occupation")
    .appendChild(createNewElement("span", data.occupation));
  item.querySelector(".cartoon").innerText = `Is a Cartoon?:`;
  item
    .querySelector(".cartoon")
    .appendChild(createNewElement("span", data.cartoon));
  item.querySelector(".weapon").innerText = `Weapon:`;
  item
    .querySelector(".weapon")
    .appendChild(createNewElement("span", data.weapon));
}

function printData(data) {
  deleteBySelector(".deleteMe");

  let characterInfo = document.querySelector(".character-info");
  characterInfo.classList.add("hidden");

  data.forEach((elem) => {
    let clone = characterInfo.cloneNode(true);
    printElem(clone, elem);
    characterInfo.after(clone);
  });
}

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      const data = await charactersAPI.getFullList();
      printData(data);
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      let idValue = document.getElementsByName("character-id")[0].value;
      const data = await charactersAPI.getOneRegister(idValue);
      //printData(data);
      deleteBySelector(".deleteMe");

      let characterInfo = document.querySelector(".character-info");
      characterInfo.classList.add("hidden");

      let clone = characterInfo.cloneNode(true);
      printElem(clone, data);
      characterInfo.after(clone);
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      let btn = document.getElementById("delete-one");
      let idValue = document.getElementsByName("character-id-delete")[0].value;
      let data = "";
      data = await charactersAPI.deleteOneRegister(idValue);

      if (!data) {
        btn.style.backgroundColor = "red";
      } else {
        btn.style.backgroundColor = "green";
      }
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      // const formElem = document.getElementById("edit-character-form");
      console.log(event);
      const characterData = {
        name: event.target[1].value,
        occupation: event.target[2].value,
        weapon: event.target[3].value,
        cartoon: event.target[4].value,
      };

      const data = await charactersAPI.updateOneRegister(
        event.target[0].value,
        characterData
      );
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      // const formElem = document.getElementById("new-character-form");
      console.log(event);
      const characterData = {
        name: event.target[0].value,
        occupation: event.target[1].value,
        weapon: event.target[2].value,
        cartoon: event.target[3].value,
      };

      const data = await charactersAPI.createOneRegister(characterData);
    });
});
