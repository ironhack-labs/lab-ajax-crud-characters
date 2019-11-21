const charactersAPI = new APIHandler('http://localhost:8000');
const container = document.getElementsByClassName("characters-container")[0];
//window.onload = async () => {
      
      $(document).ready(() => {
        //window.addEventListener('load', () => {
        //document.getElementById('fetch-all').addEventListener('click', async function (event) {
        document.getElementById('fetch-all').onclick = async function () {
          const all = await charactersAPI.getFullList();
          const charactersData = all.data;
          container.innerHTML = "";
          charactersData.forEach(element => {
            const card = document.createElement("div");
            card.setAttribute("class", "character-info");
            card.innerHTML = ` <div class="name">ID: ${element.id}</div>
      <div class="name">Name: ${element.name}</div>
      <div class="occupation">Occupation: ${element.occupation}</div>
      <div class="cartoon">Cartoon: ${element.cartoon}</div>
      <div class="weapon">Weapon: ${element.weapon}</div>
      `;
            container.appendChild(card);

          });



        };
        document.getElementById('fetch-one').addEventListener('click', function (event) {

        });

        document.getElementById('delete-one').addEventListener('click', function (event) {

        });

        document.getElementById('edit-character-form').addEventListener('submit', function (event) {

        });

        document.getElementById('new-character-form').addEventListener('submit', function (event) {

        });


      }); //end window