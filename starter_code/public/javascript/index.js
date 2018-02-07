const charactersAPI = new APIHandler("http://localhost:8000");

document.getElementById("fetch-all").onclick = function() {
  console.log("click");
  charactersAPI.getFullList().then(response => {
    $("#characters-container").html("");
    for (let i = 0; i < response.length; i++) {
      $("#characters-container").append(
        ` <div class="character-info">
          <div class="name"><i><b>Name:</i></b> ${response[i].name}</div>
          <div class="occupation"><i><b>Occupation:</i></b> ${
            response[i].occupation
          }</div>
          <div class="catchPhrase"><i><b>Phrase:</i></b> ${
            response[i].catchPhrase
          }</div>

          <div class="debt"><i><b>Debt:</i></b> ${response[i].debt}</div>
          <div class="weapon"><i><b>Weapon:</i></b> ${response[i].weapon}</div>
          <div class="id"><i><b>Character Id:</i></b> ${response[i].id}</div>

        </div>`
      );
    }
  });
};

document.getElementById("fetch-one").onclick = function() {
  const selectOneId = document.getElementById("selectOneId").value;
  charactersAPI.getOneRegister(selectOneId).then(response => {
    $("#characters-container").html("");
    $("#characters-container").append(
      ` <div class="character-info">
          <div class="name"><i><b>Name:</i></b> ${response.name}</div>
          <div class="occupation"><i><b>Occupation:</i></b> ${
            response.occupation
          }</div>
          <div class="catchPhrase"><i><b>Phrase:</i></b> ${
            response.catchPhrase
          }</div>
          <div class="debt"><i><b>Debt:</i></b> ${response.debt}</div>
          <div class="weapon"><i><b>Weapon:</i></b> ${response.weapon}</div>
          <div class="id"><i><b>Character Id:</i></b> ${response.id}</div>
        </div>`
    );
    $("#fetch-one").removeClass("red");
    $("#fetch-one").addClass("green");
  });
};

document.getElementById("delete-one").onclick = function() {
  const deleteOneId = document.getElementById("deleteOneId").value;
  charactersAPI.deleteOneRegister(deleteOneId);
};

document.getElementById("edit-character-form").onsubmit = function() {
  event.preventDefault();
  const updateId = document.getElementById("modifyOneId").value;
  const updateInfo = {
    name: document.getElementById("update-name-input").value
      ? document.getElementById("update-name-input").value
      : undefined,
    occupation: document.getElementById("update-occupation-input").value
      ? document.getElementById("update-occupation-input").value
      : undefined,
    catchPhrase: document.getElementById("update-catchPhrase-input").value
      ? document.getElementById("update-catchPhrase-input").value
      : undefined,
    weapon: document.getElementById("update-weapon-input").value
      ? document.getElementById("update-weapon-input").value
      : undefined,
    debt:
      document.getElementById("update-debt-input").value === "on" ? true : false
  };
  console.log(updateInfo);
  charactersAPI.updateOneRegister(updateId, updateInfo).then(response => {
    console.log(response);
  });
};

document.getElementById("new-character-form").onsubmit = function() {
  event.preventDefault();
  const hasDebt =
    document.getElementById("creat-debt-input").value === "on" ? true : false;
  const creatInfo = {
    name: document.getElementById("creat-name-input").value,
    occupation: document.getElementById("creat-occupation-input").value,
    catchPhrase: document.getElementById("creat-catchPhrase-input").value,
    weapon: document.getElementById("creat-weapon-input").value,
    debt: hasDebt
  };
  charactersAPI.createOneRegister(creatInfo).then(response => {
    $("#create-one").removeClass("red");
    $("#create-one").addClass("green");
  });
};
