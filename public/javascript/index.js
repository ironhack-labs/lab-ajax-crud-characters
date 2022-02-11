
import { renderResponse } from "./renderResponse.js";

const jsonServerApi = new JsonServerApi('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
      const response = await jsonServerApi.getAll();
      console.log("Characters: ", response.data);
      renderResponse(response.data, "List of all characters");
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
      event.preventDefault();
      const characterId = document.getElementById("fetch-id").value;
      const response = await jsonServerApi.getOne(characterId);
      const responseArray = [response.data];
      console.log("Characters: ", response.data);
      renderResponse(responseArray, "Selected character");
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    event.preventDefault();
      const characterId = document.getElementById("delete-id").value;
      const response = await jsonServerApi.deleteOne(characterId);
      const responseArray = [response.data];
      console.log("Characters: ", response.data);
      renderResponse(responseArray, "Deleted character");
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
      const id = document.getElementById("edit-id").value;
      const name = document.getElementById("edit-name").value;
      const occupation = document.getElementById("edit-occupation").value;
      const weapon = document.getElementById("edit-weapon").value;
      const cartoon = document.getElementById("edit-cartoon").value;
      const characterObject = { id, name, occupation, weapon, cartoon };
      const response = await jsonServerApi.editOne(id, characterObject);
      const responseArray = [response.data];
      console.log("Characters: ", response.data);
      renderResponse(responseArray, "Edited character");
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const name = document.getElementById("create-name").value;
    const occupation = document.getElementById("create-occupation").value;
    const weapon = document.getElementById("create-weapon").value;
    const cartoon = document.getElementById("create-cartoon").value;
    const characterObject = { name, occupation, weapon, cartoon };
    const response = await jsonServerApi.createOne(characterObject);
    const responseArray = [response.data];
    console.log("Characters: ", response.data);
    renderResponse(responseArray, "Created character");
  });
});
