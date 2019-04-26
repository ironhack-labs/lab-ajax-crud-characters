const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(_ => {
  document.getElementById("fetch-all").onclick = async function() {
    try {
      const { data } = await charactersAPI.getFullList();
      console.log(data);
    } catch (error) {
      return error;
    }
  };

  document.getElementById("fetch-one").onclick = async function() {
    try {
      const { value: character } = document.querySelector("input[name='character-id']") || {};
      const { data } = await charactersAPI.getOneRegister(character);
      console.log(data, "+++");
    } catch (error) {
      return error;
    }
  };

  document.getElementById("delete-one").onclick = async function() {
    try {
      const character = document.getElementById("character-id-delete").value;
      document.getElementById("delete-one").style.color = "green";
      const { data } = await charactersAPI.deleteOneRegister(character);
    } catch (error) {
      document.getElementById("delete-one").style.color = "red";
      return error;
    }
  };

  document.getElementById("edit-character-form").onsubmit = async function(e) {
    e.preventDefault();
    const characterID = document.getElementById("chr-id").value;
    const editForm = document.querySelector("#edit-character-form");
    const inputFields = [...editForm.querySelectorAll("input:not([name='chr-id']")];
    console.log(inputFields);
    const editObject = inputFields.reduce((acc, field) => {
      if (field.value) acc[field.name] = field.value;
      return acc;
    }, {});
    const { data } = await charactersAPI.updateOneRegister(characterID, editObject);
    console.log("data", data);
  };
});

document.getElementById("new-character-form").onsubmit = async function(e) {
  e.preventDefault();
  const newCharForm = document.querySelector("#new-character-form");
  const inputFields = [...newCharForm.querySelectorAll("input")];
  const createObject = inputFields.reduce((acc, field) => {
    if (field.value) acc[field.name] = field.value;
    return acc;
  }, {});
  const { data } = await charactersAPI.createOneRegister(createObject);
};
