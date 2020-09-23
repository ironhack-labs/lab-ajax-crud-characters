const charactersAPI = new APIHandler('http://localhost:8000');
const parentDiv = document.querySelector(".characters-container");

function createChar(element){
  const newLineHtml = document.createElement("div");
  newLineHtml.classList.add("character-info");
  parentDiv.appendChild(newLineHtml);

  const newchildId  = document.createElement("div");
  newchildId.classList.add("id");
  newchildId.innerHTML = `id: ${element.id}`;
  newLineHtml.appendChild(newchildId);

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
};

function getListChar(){
  charactersAPI.getFullList().then((apiResponse) => {
    parentDiv.innerHTML = "";
    apiResponse.data.forEach(element => {
      createChar(element);})
    });
};

function objSize(obj){
  let count = 0;
  for (const property in obj) {
    obj[property] ? count++ : count;
  }
  return count;
};

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(response => {    
      parentDiv.innerHTML = "";
      response.data.forEach(element => {
        createChar(element);
      });
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let idInput = document.getElementById("character-id").value;
     charactersAPI.getOneRegister(idInput)
      .then(response => {  
        createChar(response.data);
       });
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let idInput = document.getElementById("character-id-delete").value;
    let colorBtnValid = document.getElementById("delete-one");
    charactersAPI.deleteOneRegister(idInput)
    .then(response => {  
      colorBtnValid.style.background = "green";
     })
     .catch((error)=> {
      colorBtnValid.style.background = "red";
     });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let colorBtnValid = document.getElementById("edit-data");
    let objEditInput ={
      id: document.getElementById("edit-form-id").value,
      name: document.getElementById("edit-form-name").value,
      occupation: document.getElementById("edit-form-occupation").value,
      weapon: document.getElementById("edit-form-weapon").value,
      cartoon: document.getElementById("edit-form-cartoon").checked,
    };

    let objLen = objSize(objEditInput);
    if (objLen > 0) {
      charactersAPI.updateOneRegister(objEditInput.id, objEditInput)
      .then(response => {
        colorBtnValid.style.background = "green";
       })
      .catch((error)=> {
         colorBtnValid.style.background = "red";
       })
    }else {
      colorBtnValid.style.background = "red";
    }
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let colorBtnValid = document.getElementById("send-data");
    
    let objCreateInput ={
      name: document.getElementById("create-form-name").value,
      occupation: document.getElementById("create-form-occupation").value,
      weapon: document.getElementById("create-form-weapon").value,
      cartoon: document.getElementById("create-form-cartoon").checked,
    };

    let objLen = objSize(objCreateInput);
    if (objLen > 0) {
      charactersAPI.createOneRegister(objCreateInput)
      .then(response => {
        colorBtnValid.style.background = "green";
       })
      .catch((error)=> {
         colorBtnValid.style.background = "red";
       })
       getListChar();
    } else {
      colorBtnValid.style.background = "red";
    }
  });
});
