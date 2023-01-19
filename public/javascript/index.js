// const charactersAPI = new APIHandler('http://localhost:8000');

// window.addEventListener('load', () => {
// 	document.getElementById('fetch-all').addEventListener('click', function (event) {
// 		charactersAPI.getFullList();
// 	});







const charactersAPI = new APIHandler("http://localhost:8000/characters");
const container = document.querySelector(".characters-container");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      try {
        const { data: charList } = await charactersAPI.getFullList();
        container.innerHTML = "";
        charList.forEach((char) => {
          const charHTML = `
        <div class="character-info">
          <div class="id">Id:<span>${char.id}</span></div>
          <div class="name">Name:<span>${char.name}</span></div>
          <div class="occupation">Occupation:<span>${char.occupation}</span></div>
          <div class="cartoon">Is a Cartoon?:<span>${char.cartoon}</span></div>
          <div class="weapon">Weapon:<span>${char.weapon}</span></div>
        </div>
        `;
          container.innerHTML += charHTML;
        });
      } catch (error) {
        container.innerHTML = `
        <h2>An Error occured. Please Try again.</h2>
        `;
      }
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      try {
        const id = +document.querySelector("#character-id").value;
        const { data: char } = await charactersAPI.getOneRegister(id);
        container.innerHTML = `
    <div class="character-info">
      <div class="id">Id:<span>${char.id}</span></div>
      <div class="name">Name:<span>${char.name}</span></div>
      <div class="occupation">Occupation:<span>${char.occupation}</span></div>
      <div class="cartoon">Is a Cartoon?:<span>${char.cartoon}</span></div>
      <div class="weapon">Weapon:<span>${char.weapon}</span></div>
    </div>
    `;
      } catch (error) {
        console.log(error);
        if (error.response.status === 404)
          container.innerHTML = `
          <h2>No character found with this Id</h2>
        `;
        else
          container.innerHTML = `
        <h2>An Error occured. Please Try again.</h2>`;
      }
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      try {
        const id = +document.querySelector("#character-id-delete").value;
        await charactersAPI.deleteOneRegister(id)
        event.target.style = 'background-color: green'
      } catch (error) {
        event.target.style = 'background-color: red'
      }
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault()
      const name = document.querySelector('#edit-name').value.trim()
      const occupation = document.querySelector('#edit-occupation').value.trim()
      const weapon = document.querySelector('#edit-weapon').value.trim()
      const cartoon = document.querySelector('#edit-cartoon').checked
      try {
        if (!name || !occupation || !weapon) throw new Error('Value Error. All Fields are required!')
        const id = +document.querySelector('#edit-id').value
        await charactersAPI.updateOneRegister(id, { name, occupation, weapon, cartoon });
        document.querySelector('#send-data-edit').style = 'background-color: green'
      } catch (error) {
        document.querySelector('#send-data-edit').style = 'background-color: red'
      }
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault()
      const name = document.querySelector('#new-name').value.trim()
      const occupation = document.querySelector('#new-occupation').value.trim()
      const weapon = document.querySelector('#new-weapon').value.trim()
      const cartoon = document.querySelector('#new-cartoon').checked
      try {
        if (!name || !occupation || !weapon) throw new Error('Value Error. All Fields are required!')
        await charactersAPI.createOneRegister({ name, occupation, weapon, cartoon });
        document.querySelector('#send-data-create').style = 'background-color: green'
      } catch (error) {
        document.querySelector('#send-data-create').style = 'background-color: red'
      }
    });
});
