var charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com/");

function showFeedback(postResponse) {
  const newCharacterHtml = `
      <li>
        <h3> ${postResponse.name} </h3>
        <p> Id: ${postResponse.id} </p>
        
      </li>
    `;
  $("#characters-list").append(newCharacterHtml);
  console.log(postResponse.id)
}

function handleError(err) {
  console.log("Oh noooo! Error");
  console.log(err);
}



function catchData() {
  return {
    name: $("#new-character-form input[name='name']").val(),
    occupation: $("#new-character-form input[name='occupation']").val(),
    weapon: $("#new-character-form input[name='weapon']").val(),
    debt: $("#new-character-form input[type='checkbox']").is(":checked"),
  };
}

function catchUpdates() {
  return {
    id: $("#edit-character-form input[name='chr-id']").val(),
    name: $("#edit-character-form input[name='name']").val(),
    occupation: $("#edit-character-form input[name='occupation']").val(),
    weapon: $("#edit-character-form input[name='weapon']").val(),
    debt: $("#edit-character-form input[type='checkbox']").is(":checked")
  };
}

$("#new-character-form").on("submit", event => {
  event.preventDefault();
  console.log("hello its me");
  const data = catchData();
  charactersAPI.createOneRegister(data)


  const characterInfo = {
    name: $("#new-character-name").val(),
    occupation: $("#new-character-occupation").val(),
    weapon: $("#new-character-weapon").val(),
    debt: $("#new-character-debt").val()
  };
  $.ajax({
    // Notice that we are using POST
    method: "POST",
    url: "https://ih-crud-api.herokuapp.com/characters",
    // The data key is for sending data in a POST, PUT or PATCH!
    data: characterInfo,
    success: showFeedback,
    error: handleError
  });
  console.log(characterInfo);

});

$("#edit-character-form").on("submit", event => {
  event.preventDefault();

  console.log("Hi");
  const updates = catchUpdates();


  console.log("hello")

  const updateInfo = {
    id: $("#updated-id").val(),
    name: $("#updated-name").val(),
    occupation: $("#updated-occupation").val(),
    weapon: $("#updated-weapon").val(),
    debt: $("#updated-debt").val()
  };
  const charId = $("#updated-id").val();
  charactersAPI.updateOneRegister(updates, charId)
  console.log("hello");
  console.log(updateInfo);

});

$("#delete-one").on("click", event => {
  event.preventDefault();
  $(".characters-container").empty();
});
