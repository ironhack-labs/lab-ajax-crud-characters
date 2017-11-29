class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
    method:"GET",
    url: "https://ih-crud-api.herokuapp.com/characters"
  })
  .then((apiResult)=>{
    console.log("Success!");
    console.log(apiResult);
    const charArray=apiResult;
    $(".character-loop").empty();
    charArray.forEach((oneCharacter)=>{
      $(".character-loop").append(
        `
        <div class="characters-container">
          <div class="character-info">
            <div class="name">Name: ${oneCharacter.name}</div>
            <div class="occupation">Occupation: ${oneCharacter.occupation}</div>
            <div class="debt">Debt: ${oneCharacter.debt}</div>
            <div class="weapon">Weapon: ${oneCharacter.weapon}</div>
            <div class="id">ID: ${oneCharacter.id}</div>
          </div>
        </div>
        `
      );
    });
  })//end then
  .catch((err)=>{
    console.log(err);
    console.log("ERROR!");
  });//end catch
}//getFullList()


getOneRegister (oneId) {

  $.ajax({
    method:"GET",
    url:`https://ih-crud-api.herokuapp.com/characters/${oneId}`
  })
  .then((apiResult)=>{
    $(".character-loop").empty();
    console.log("SUCCESS!");
    console.log(apiResult);
    $(".character-loop").append(
      `
      <div class="characters-container">
        <div class="character-info">
          <div class="name">${apiResult.name}</div>
          <div class="occupation">${apiResult.occupation}</div>
          <div class="debt">${apiResult.debt}</div>
          <div class="weapon">${apiResult.weapon}</div>
        </div>
      </div>
      `
    );
  })
  .catch((err)=>{
    console.log("ERROR!");
    console.log(err);
  });

}

  createOneRegister (newName,newWeapon,newDebt,newJob) {
    $.ajax({
    method:"POST",
    url: "https://ih-crud-api.herokuapp.com/characters",
    //data to send through in the form body
    data: {
      name:newName,
      weapon:newWeapon,
      debt: newDebt,
      occupation:newJob
    }
  })
  .then((apiResult)=>{
    console.log("Success!");
    console.log(apiResult);
    $(".create-new-feedback").append(`
      <li>
        Added <b> ${apiResult.name}</b>
        (id ${apiResult.id})
       </li>
      `);
  })
  .catch((err)=>{
    console.log(err);
    console.log("ERROR!");
  });

  }

  updateOneRegister (editedId, editedName, editedJob, editedDebt,editedWeapon) {
    $.ajax({
    method:"PATCH",
    url:`https://ih-crud-api.herokuapp.com/characters/${editedId}`,
    data: {
      name:editedName,
      weapon:editedWeapon,
      debt:editedDebt,
      occupation: editedJob
    }
  })
  .then((apiResult)=>{
    console.log("SUCCESS!");
    console.log(apiResult);
    $(".edit-feedback").append(`
      <p> ${apiResult.name} Edited!</p>
      `);
  })
  .catch((err)=>{
    console.log("ERROR!");
    console.log(err);
  });

  }

  deleteOneRegister (idToDelete) {
    $.ajax({
    method:"Delete",
    url:`https://ih-crud-api.herokuapp.com/characters/${idToDelete}`
  })
  .then((apiResult)=>{
    console.log("SUCCESS!");
    console.log(apiResult);
    $(".character-loop").empty();
    $(".delete-feedback").append(`
      <p>Character Deleted!</p>
      `);
  })
  .catch((err)=>{
    //?????????How do I can say "if X char doesn't exist, console.log xyz"
    console.log("ERROR!");
    console.log(err);
    const updatedHTML=$(`
      <h2>ERROR
      </h2>
      `
    );
  });

  }
}
