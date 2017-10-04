const charactersAPI = new APIHandler(
  "http://ih-crud-api.herokuapp.com/characters"
);

$(document).ready(() => {
  $("#fetch-all").on("click", e => {
    charactersAPI.getFullList().then(char => {
      char.forEach(charac => {
        appendChar(charac);
      });
    });
  });

  $("#fetch-one").on("click", e => {
    charactersAPI
      .getOneRegister($("input[name=character-id]").val())
      .then(appendChar);
  });

  $("#delete-one").on("click", e => {
    charactersAPI
      .deleteOneRegister($("input[name=character-id-delete]").val())
      .then(response => {
        $("#delete-one").css("background-color", "green");
      })
      .catch(err => {
        $("#delete-one").css("background-color", "red");
      });
  });

  $("#edit-character-form").on("submit", e => {
    const id = $('input[name=chr-id]')
    const name = $('input[name=name]').val()
    const occupation = $('input[name=occupation]').val()
    const weapon = $('input[name=weapon]').val()
    let debt;

    if ($("input[name=debt]").is(":checked")) {
      debt = true;
    } else {
      debt = false;
    }
    
    charactersAPI.updateOneRegister(id, name, occupation, debt, weapon)
    .then(response => {
      $("#add-btn").css("background-color", "green");
    })
    .catch(err => {
      $("#add-btn").css("background-color", "red");
    })

  });

  $("#new-character-form").on("submit", (e) => {
    event.preventDefault()
    const name = $("#addName").val();
    const occupation = $("#addOcc").val();
    const weapon = $("#addWeap").val();
    let debt;
    if ($("#addDebt").is(":checked")) {
      debt = true;
    } else {
      debt = false;
    }

    charactersAPI
      .createOneRegister(name, occupation, debt, weapon)
      .then(response => {
        $("#add-btn").css("background-color", "green");
      })
      .catch(err => {
        $("#add-btn").css("background-color", "red");
      });
  });
});

function appendChar(char) {
  const newCharacterHtml = `<div class= "character-info">
        <div class= "name"> ${char.name}</div>
        <div class= "occupation"> ${char.occupation}</div>
        <div class= "debt"> ${char.debt}</div>
        <div class= "weapon"> ${char.weapon}</div>
      </div>`;

  $(".characters-container").append(newCharacterHtml);
}
