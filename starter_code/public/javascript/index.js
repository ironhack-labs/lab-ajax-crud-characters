var charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com/");

function showFeedback(postResponse) {
  const newCharacterHtml = `
      <li>
        <h3> ${postResponse.name} </h3>
        <p> Id: ${postResponse.id} </p>
      </li>
    `;
  $("#new-character-form").append(newCharacterHtml);
}

function handleError(err) {
  console.log("Oh noooo! Error");
  console.log(err);
}

$('#create-button').on('submit', (event) => {
  event.preventDefault();

  const characterInfo = {
    name: $("#name").val(),
    occupation: $("#occupation").val(),
    weapon: $("#weapon").val(),
    debt: $("#debt").val(),
  };

  $.ajax({
    method: "POST",
    url: "https://ih-crud-api.herokuapp.com/characters",
    data: characterInfo,
    success: showFeedback,
    error: handleError
  });
});

$("#edit-character-form").on("submit", event => {
  event.preventDefault();
  const updateInfo = {
    id: $("#id").val(),
    name: $("#name").val(),
    occupation: $("#occupation").val(),
    weapon: $("#weapon").val(),
    debt: $("#debt").val()
  };
  const charId = $("#id").val();

  $.ajax({
    method: "PATCH",
    url: `https://ih-crud-api.herokuapp.com/characters/${charId}`,
    data: updateInfo,
    success: patchResponse => {
      console.log("Oh lalaaaa SUCCESS!");
      console.log(patchResponse);
    },
    error: handleError
  });
});

$("#delete-one").on("click", event => {
  event.preventDefault();
  $(".characters-container").empty();
});


