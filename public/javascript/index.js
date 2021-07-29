const charactersAPI = new APIHandler("http://localhost:8000");
const characterContainer = document.getElementsByClassName(
  "characters-container"
)[0];

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      try {
        const fetchAll = await charactersAPI.getFullList();
        const dataAll = fetchAll.data;

        characterContainer.innerHTML = "";

        dataAll.forEach((d) => {
          characterContainer.innerHTML += `
      <div class="character-info">
        <div class="name">Character Name: ${d.name}</div>
        <div class="occupation">Character Occupation: ${d.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${d.cartoon}</div>
        <div class="weapon">Character Weapon: ${d.weapon}</div>
      </div>
      `;
        });
      } catch (err) {
        console.log("err fectching all");
      }
    });

  const fetchOneBtn = document.getElementById("fetch-one");
  fetchOneBtn.addEventListener("click", async function (event) {
    const input = document
      .getElementsByClassName("fecthone")[0]
      .getElementsByTagName("input")[0];
    const id = input.value;

    if (id === "") return fetchOneBtn.classList.add("failed");

    try {
      const fetchOne = await charactersAPI.getOneRegister(id);

      if (!fetchOne) return;

      const dataOne = fetchOne.data;

      characterContainer.innerHTML = `
    <div class="character-info">
      <div class="name">Character Name: ${dataOne.name}</div>
      <div class="occupation">Character Occupation: ${dataOne.occupation}</div>
      <div class="cartoon">Is a Cartoon?: ${dataOne.cartoon}</div>
      <div class="weapon">Character Weapon: ${dataOne.weapon}</div>
    </div>
    `;
      return fetchOneBtn.classList.add("active");
    } catch (err) {
      return fetchOneBtn.classList.add("failed");
      console.log("err fetching one");
    }
  });

  const deleteBtn = document.getElementById("delete-one");
  deleteBtn.addEventListener("click", async function (event) {
    const input = document
      .getElementsByClassName("delete")[0]
      .getElementsByTagName("input")[0];
    const id = input.value;

    if (id === "") return deleteBtn.classList.add("failed");

    try {
      await charactersAPI.deleteOneRegister(id);
      deleteBtn.classList.add("active");
    } catch (err) {
      deleteBtn.classList.add("failed");
      console.log("err deleting");
    }
  });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      const editBtn = document.getElementById("update-data");

      const form = document.getElementById("edit-character-form");

      const id = form.querySelector("input[name='chr-id']").value;

      if (id === "") return editBtn.classList.add("failed");

      try {
        const fetchOurChar = await charactersAPI.getOneRegister(id);

        if (!fetchOurChar) return;

        const name = form.querySelector("input[name='name']").value;
        const occupation = form.querySelector("input[name='occupation']").value;
        const weapon = form.querySelector("input[name='weapon']").value;
        const cartoon = form.querySelector("input[name='cartoon']").checked;

        const updatedChar = await charactersAPI.updateOneRegister(id, {
          name,
          occupation,
          weapon,
          cartoon,
        });

        characterContainer.innerHTML = `
      <div class="character-info">
        <div class="name">Character Name: ${updatedChar.name}</div>
        <div class="occupation">Character Occupation: ${updatedChar.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${updatedChar.cartoon}</div>
        <div class="weapon">Character Weapon: ${updatedChar.weapon}</div>
      </div>
      `;
        editBtn.classList.add("active");
      } catch (err) {
        editBtn.classList.add("failed");
        console.log("err updating");
      }
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      const createBtn = document.getElementById("create-data");

      const form = document.getElementById("new-character-form");

      const name = form.querySelector("input[name='name']").value;
      const occupation = form.querySelector("input[name='occupation']").value;
      const weapon = form.querySelector("input[name='weapon']").value;
      const cartoon = form.querySelector("input[name='cartoon']").checked;
      
      if (name === "" && occupation === "" && weapon === "") return 

      try {
        const newChar = await charactersAPI.createOneRegister({
          name,
          occupation,
          weapon,
          cartoon,
        });

        characterContainer.innerHTML = `
    <div class="character-info">
      <div class="name">Character Name: ${newChar.name}</div>
      <div class="occupation">Character Occupation: ${newChar.occupation}</div>
      <div class="cartoon">Is a Cartoon?: ${newChar.cartoon}</div>
      <div class="weapon">Character Weapon: ${newChar.weapon}</div>
    </div>
    `;

        createBtn.classList.add("active");
      } catch (err) {
        createBtn.classList.add("failed");
        console.log("err creating");
      }
    });
});
