const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    let list = document.getElementById("characters-container");
    axios
      .get("https://ih-crud-api.herokuapp.com/characters")
      .then(response => {
        list.innerHTML = "";
        response.data.forEach(eachOne => {
          let newChar = document.createElement("div");
          newChar.className = "character-info";
          newChar.innerHTML = `
          <div class="name"><span class="label">Character Name:</span> ${
            eachOne.name
          }</div>
          <div class="occupation">
          <span class="label">Character Occupation:</span> ${eachOne.occupation}
          </div>
          <div class="weapon"><span class="label">Character Weapon:</span> ${
            eachOne.weapon
          }</div>
          <div class="cartoon"><span class="label">Debt:
          </span> ${eachOne.debt}</div>`;

          list.appendChild(newChar);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  document.getElementById("fetch-one").onclick = function() {
    let list = document.getElementById("characters-container");
    let charId = document.getElementById("character-id-search").value;
    axios
      .get("https://ih-crud-api.herokuapp.com/characters/" + charId)
      .then(response => {
        list.innerHTML = "";
        let theChar = response.data;
        let newChar = document.createElement("div");
        newChar.className = "character-info";
        newChar.innerHTML = `
          <div class="name"><span class="label">Character Name:</span> ${
            theChar.name
          }</div>
          <div class="occupation">
          <span class="label">Character Occupation:</span> ${theChar.occupation}
          </div>
          <div class="weapon"><span class="label">Character Weapon:</span> ${
            theChar.weapon
          }</div>
          <div class="cartoon"><span class="label">Is a Cartoon?:
          </span> ${theChar.debt}</div>`;

        list.appendChild(newChar);
        document.getElementById("character-id-search").value = "";
      })
      .catch(err => {
        console.log(err);
      });
  };

  document.getElementById("new-character-form").onsubmit = function(event) {
    event.preventDefault();
    let submittedInfo = document.getElementById("new-character-form").elements; //prettier-ignore
    var name = submittedInfo.namedItem("name").value; //prettier-ignore
    var occupation = submittedInfo.namedItem("occupation").value; //prettier-ignore
    var weapon = submittedInfo.namedItem("weapon").value; //prettier-ignore
    var cartoon = submittedInfo.namedItem("cartoon").checked; //prettier-ignore

    axios
      .post("https://ih-crud-api.herokuapp.com/characters", {
        name: name,
        occupation: occupation,
        weapon: weapon,
        debt: cartoon
      })
      .then(() => {
        document.getElementById("new-character-form").reset();
      })
      .catch(err => {
        console.log(err);
      });
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    event.preventDefault();
    let submittedInfo = document.getElementById("edit-character-form").elements; //prettier-ignore
    var id = submittedInfo.namedItem("chr-id").value; //prettier-ignore
    var name = submittedInfo.namedItem("name").value; //prettier-ignore
    var occupation = submittedInfo.namedItem("occupation").value; //prettier-ignore
    var weapon = submittedInfo.namedItem("weapon").value; //prettier-ignore
    var cartoon = submittedInfo.namedItem("cartoon").checked; //prettier-ignore

    axios
      .put("https://ih-crud-api.herokuapp.com/characters/" + id, {
        name: name,
        occupation: occupation,
        weapon: weapon,
        debt: cartoon
      })
      .then(() => {
        document.getElementById("edit-character-form").reset();
      })
      .catch(err => {
        console.log(err);
      });
  };

  document.getElementById("delete-one").onclick = function() {};
});
