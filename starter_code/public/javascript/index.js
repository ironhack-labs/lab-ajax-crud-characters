const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {

    charactersAPI.getFullList().then(char => {
      char.data.forEach(character => {
        console.log(character)
        $("#fetch-all-name").html(character.name);
      });
    });
  }

  document.getElementById('fetch-one').onclick = function () {
    const id = document.getElementById("id-one-input").value
    charactersAPI.getOneRegister(id).then(char =>
      console.log(char.data[0])
    )
  }

  document.getElementById('delete-one').onclick = function () {
    const id = document.getElementById("id-one-delete").value
    charactersAPI.deleteOneRegister(id);
  }

  document.getElementById('edit-character-form').onsubmit = function () {
    const char = ({
      name: $(".update-name").val(),
      occupation: $(".update-occupation").val(),
      weapon: $(".update-weapon").val(),
      cartoon: $(".update-cartoon").val()
    })
    const id = $("update-id").val();
    console.log(char)
    charactersAPI.updateOneRegister(char,id)
  }

  document.getElementById('send-data').onsubmit = function () {
    const char = ({
      name: $(".create-name").val(),
      occupation: $(".create-occupation").val(),
      weapon: $(".create-weapon").val(),
      cartoon: $(".create-cartoon").val()
    })
    console.log(char)
    charactersAPI.createOneRegister(char)
  }
})