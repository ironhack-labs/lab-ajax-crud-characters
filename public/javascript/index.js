const charactersAPI = new APIHandler('http://localhost:8000');
const parentDiv = document.querySelector(".characters-container");

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
    let objName = "edit";
    let objEditInput = createObjFromInput(objName);

    let objLen = objSize(objEditInput);
    if (objLen > 0) {
      charactersAPI.updateOneRegister(objEditInput.id, objEditInput)
      .then(response => {
        colorBtnValid.style.background = "green";
       })
      .catch((error)=> {
         colorBtnValid.style.background = "red";
       });
       getListChar();
    }else {
      colorBtnValid.style.background = "red";
    }

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let colorBtnValid = document.getElementById("send-data");
    let objName = "create";
    let objCreateInput = createObjFromInput(objName);
    let objLen = objSize(objCreateInput);

    if (objLen > 0) {
      charactersAPI.createOneRegister(objCreateInput)
      .then(response => {
        colorBtnValid.style.background = "green";
       })
      .catch((error)=> {
         colorBtnValid.style.background = "red";
       });
       getListChar();
    } else {
      colorBtnValid.style.background = "red";
    }
  });
});
