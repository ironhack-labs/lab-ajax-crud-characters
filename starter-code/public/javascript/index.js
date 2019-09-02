import APIHandler from "./APIHandler.js";

const charactersAPI = new APIHandler("http://localhost:8000");

const target = document.querySelector(".characters-container");

function displayCharacter(chars) {
  function setTemplate(char) {
    const tpl = `
    <div class="character-info">
      <div class="name">${char.name}</div>
      <div class="occupation">Character Occupation</div>
      <div class="cartoon">Is a Cartoon?</div>
      <div class="weapon">Character Weapon</div>
    </div>`;
    return tpl;
  }

  target.innerHTML = "";

  chars.forEach(char => {
    console.log(char);
    target.innerHTML += setTemplate(char);
  });
}

document.getElementById("fetch-all").onclick = function() {
  charactersAPI
    .getFullList("/characters")
    .then(res => displayCharacter(res.data))
    .catch(APIErr => console.error(APIErr));
};

document.getElementById("fetch-one").onclick = function() {};

document.getElementById("delete-one").onclick = function() {};

document.getElementById("edit-character-form").onsubmit = function() {};

document.getElementById("new-character-form").onsubmit = function() {};
