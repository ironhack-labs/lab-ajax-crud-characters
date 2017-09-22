$(document).ready(() => {
console.log("ready");
  $("#fetch-all").click(() => {
    $.ajax({
      url: "https://ih-api.herokuapp.com/characters/",
      method: "GET",
      success: (response) => {
        console.log(response);
        response.forEach((item) => {
          $(".characters-container").append(
            `
            <div class="character-info">
            <div class="name">Name : ${item.name}</div>
            <div class="occupation">Occupation : ${item.occupation}</div>
            <div class="debt">Debt : ${item.debt}</div>
            <div class="weapon">Weapon : ${item.weapon}</div>
            </div>
            `
          )
        });
      },
      error: (error) => {
        console.log(error);
      }
    })
  });

  $("#fetch-one").click(() => {
    console.log("featch one");
    const searchedId = $("#character-id").val();

    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${searchedId}`,
      method: "GET",
      success: (res) => {
        console.log(res);
        $(".character-info .name").append(res.name);
        $(".character-info .occupation").append(res.occupation);
        $(".character-info .weapon").append(res.weapon);
        $(".character-info .debt").append(res.debt);
      },
      error: (err) => {
        console.log(err);
      }
    })
  });

$("#delete-one").click(()=>{
  const deleteId = $("#character-id-delete").val();

  $.ajax({
    url: `https://ih-api.herokuapp.com/characters/${deleteId}`,
    method: "DELETE",
    success: (res) => {
      console.log("delete response ",res);

    },
    error: (err) => {
      console.log(err);
    }
  })


});

$("#new-character-form").submit((event)=>{
  event.preventDefault();
  const newCharacter = {
    name: $("#new-character-form input[name='name']").val(),
    occupation: $("#new-character-form input[name='occupation']").val(),
    weapon: $("#new-character-form input[name='weapon']").val(),
    debt: $("#new-character-form input[name='debt']").val()
  };
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/`,
      method: "POST",
      data: newCharacter,
      success: (res) => {
        console.log("create response ",res);
      },
      error: (err) => {
        console.log(err);
      }
    })
});





$("#edit-character-form").submit((event)=>{
  event.preventDefault();
  const characterToUpdate = $("#edit-character-form input[name='chr-id']").val();
  const editCharacter = {
    name: $("#edit-character-form input[name='name']").val(),
    occupation: $("#edit-character-form input[name='occupation']").val(),
    weapon: $("#edit-character-form input[name='weapon']").val(),
    debt: $("#edit-character-form input[name='debt']").val()
  };
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${characterToUpdate}`,
      method: "PATCH",
      data: editCharacter,
      success: (res) => {
        console.log("update response ",res);
      },
      error: (err) => {
        console.log(err, "character not found");
      }
    })
})
  //
  // Verb: POST, Route: "/characters"
  // It receives an object as a parameter, with the following format: { name: string, occupation: string, debt: boolean, weapon: string }
  // It returns the created character if there are no errors
  // It returns the wrong fields if there is some error
  // It returns JSON
  //
  //
  //
  //
  //
  // Verb: PATCH/PUT, Route: "/characters/:id"
  // It receives the character id as a parameter (route)
  // It receives an object as a parameter, with the following format: { name: string, occupation: string, debt: boolean, weapon: string }
  // All the fields are optionals
  // It returns the updated character if there are no errors
  // It returns "Character not found" if there is no character with the indicated id
  // It returns JSON / text


















}); //end document ready
// <
// div class = "characters-container" >
//   <
//   div class = "character-info" >
//   <
//   div class = "name" > Character Name < /div> <
//   div class = "occupation" > Character Occupation < /div> <
//   div class = "debt" > Character Debt < /div> <
//   div class = "weapon" > Character Weapon < /div> <
//   /div>
