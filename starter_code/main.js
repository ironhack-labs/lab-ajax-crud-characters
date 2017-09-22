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
        const traitArray = ["name", "occupation", "weapon", "debt"];
        const resArray = [res.name, res.occupation, res.weapon, res.debt];
        for (let i = 0; i < traitArray.length; i++) {
              $(`.character-info .${traitArray[i]}`).empty();
              $(`.character-info .${traitArray[i]}`).append(`${traitArray[i].toUpperCase()}: ${resArray[i]}`);
        }
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

});
