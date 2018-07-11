const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(data => {
      console.log(data.data);
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    let id = document.querySelector("input[name='character-id']").value;
    charactersAPI.getOneRegister(id).then(data => {
      console.log(data.data);
    });
  };

  document.getElementById("delete-one").onclick = function() {
    let id = document.querySelector("input[name='character-id-delete']").value;
    charactersAPI.deleteOneRegister(id).then(data => {
      console.log(data);
    });
  };

  document.getElementById("edit-character-form").onsubmit = function() {



  };

  document.getElementById("new-character-form").onsubmit = function() {
    let form = document.getElementById("new-character-form");
    let newName = form.elements["name"].value;
    let newOccupation = form.elements["occupation"].value;
    let newWeapon = form.elements["weapon"].value;
    let newCartoon = form.elements["cartoon"].checked;
    const Obj = {};
    if (newName) {
      Obj.name = newName;
    }
    if (newOccupation) {
      Obj.occupation = newOccupation;
    }
    if (newWeapon) {
      Obj.weapon = newWeapon;
    }
    Obj.cartoon = newCartoon;
    charactersAPI.createOneRegister(Obj)
    .then(()=>{
      console.log("Objeto creado")
        
    })
    .catch(() => {
      console.log("Objeto no creado")
    })
  }
});
