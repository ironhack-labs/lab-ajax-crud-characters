const charactersAPI = new APIHandler("http://localhost:8000")
let list = $(".characters-container");
const addUser = (obj) => {
  let el = $('<div>').addClass('character-info');
  let id = $('<div>').addClass('id').text('id: ' + obj.id);
  let name = $('<div>').addClass('name').text('name: ' + obj.name);
  let occupation = $('<div>').addClass('occupation').text('occupation: ' + obj.occupation);
  let cartoon = $('<div>').addClass('cartoon').text('Is a cartoon?: ' + obj.cartoon);
  let weapon = $('<div>').addClass('weapon').text('weapon: ' + obj.weapon);
  el.append(id);
  el.append(name);
  el.append(occupation);
  el.append(cartoon);
  el.append(weapon);
  list.append(el);
}


$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    $('.character-info').hide();
    $(".character-info").empty();
    $('#show').hide();
    charactersAPI.getFullList()
      .then(res => {
        res.forEach(function (element) {
          addUser(element);
        })
      });
    $('#show').show();
  }

  document.getElementById('fetch-one').onclick = function () {
    const idNumber = document.getElementById("character-id").value;
    $('.character-info').hide();
    $(".character-info").empty();
    $('#show').hide();
    charactersAPI.getOneRegister(idNumber)
      .then(res => {
        addUser(res);
      })
      .catch(() => { alert('Id ' + idNumber + ' does not exist') });
    $('#show').show();
  }

  document.getElementById('delete-one').onclick = function () {
    const idDelete = document.getElementById("character-id-delete").value;
    charactersAPI.deleteOneRegister(idDelete)
      .then(() => {
/*         $('.character-info').hide();
        $(".character-info").empty();
        charactersAPI.getFullList()
          .then(res => {
            res.forEach(function (element) {
              addUser(element);
            })
          }); */
        $("#delete-one").css("background-color", "green")
        $("#fetch-all").trigger("click");
        setTimeout(function () {
          $("#delete-one").css("background-color", "")
        }, 1000)
      })
      .catch(() => {
        $("#delete-one").css("background-color", "red")
        setTimeout(function () {
          $("#delete-one").css("background-color", "")
        }, 1000)
      })
  }

  document.getElementById('edit-character-form').onsubmit = function () {
    event.preventDefault();

    const newId = document.getElementById("q").value;
    const newName = document.getElementById('x').value;
    const newOccu = document.getElementById('y').value;
    const newWeap = document.getElementById('z').value;
    const newCart = document.getElementById('w').checked;

    const Obj = {};
    if (newName) {
      Obj.name = newName;
    }
    if (newOccu) {
      Obj.occupation = newOccu;
    }
    if (newWeap) {
      Obj.weapon = newWeap;
    }
    Obj.cartoon = newCart;
    Obj.id = newId;
    charactersAPI.updateOneRegister(Obj)
      .then(() => {
        $("#fetch-all").trigger("click");
        $("#send-dataE").css("background-color", "green")
        setTimeout(function () {
          $("#send-dataE").css("background-color", "")
        }, 1000)
        form.reset();
      })
      .catch(() => {
        $("#send-dataE").css("background-color", "red")
        setTimeout(function () {
          $("#send-dataE").css("background-color", "")
        }, 1000)
      })
  }

  document.getElementById('new-character-form').onsubmit = function () {
    event.preventDefault();
    
    const form = document.getElementById("new-character-form");
    const newName = form.elements["name"].value;
    const newOccu = form.elements["occupation"].value;
    const newWeap = form.elements["weapon"].value;
    const newCart = form.elements["cartoon"].checked;

    const Obj = {};
    if (newName) {
      Obj.name = newName;
    }
    if (newOccu) {
      Obj.occupation = newOccu;
    }
    if (newWeap) {
      Obj.weapon = newWeap;
    }
    Obj.cartoon = newCart;
    charactersAPI.createOneRegister(Obj)
    .then(()=>{
      $("#fetch-all").trigger("click");
      $("#send-dataE").css("background-color", "green")
        setTimeout(function () {
          $("#send-dataE").css("background-color", "")
        }, 1000)
        form.reset();
    })
    .catch(() => {
      $("#send-dataE").css("background-color", "red")
      setTimeout(function () {
        $("#send-dataE").css("background-color", "")
      }, 1000)
    })
  }
})
