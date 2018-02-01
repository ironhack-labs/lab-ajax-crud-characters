var charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com/");

function showFeedback(postResponse) {
  const newCharacterHtml = `
      <li>
        <h3> ${postResponse.name} </h3>
        <p> Id: ${postResponse.id} </p>
      </li>
    `;
  $("#characters-list").append(newCharacterHtml);
}

function handleError(err) {
  console.log("Oh noooo! Error");
  console.log(err);
}

$('#new-character-form').on('submit', (event) => {
  event.preventDefault();
  console.log("hello its me");
  const characterInfo = {
    name: $("#name").val(),
    occupation: $("#occupation").val(),
    weapon: $("#weapon").val(),
    debt: $("#debt").val(),
  };
});

$("#edit-character-form").on("submit", event => {
  event.preventDefault();
  console.log("Hi");
  const updateInfo = {
    id: $("#id").val(),
    name: $("#name").val(),
    occupation: $("#occupation").val(),
    weapon: $("#weapon").val(),
    debt: $("#debt").val()
  };
  const charId = $("#id").val();
});

$("#delete-one").on("click", event => {
  event.preventDefault();
  $(".characters-container").empty();
});


