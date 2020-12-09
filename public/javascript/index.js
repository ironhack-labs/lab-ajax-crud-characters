const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {


// FETCH ALL
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      try {
        const apiRes = await charactersAPI.getFullList(); // retourne JSON avec tous elts
        const container = document.querySelector(".characters-container");
        container.innerHTML = ""; // vide l'innerhtml de son container
        //const arr = apiRes.data; // tranforme le JSON en array!!!
        //console.log(arr); // être sur qu'on a un array //undifines
        apiRes.forEach((character) => { // loop où l'on ajoute les divs
          container.innerHTML += `<div class="character-info">
          <div class="id">Id: ${character.id}</div>
          <div class="name">Name: ${character.name}</div>
          <div class="occupation">Occupation: ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
          <div class="weapon">Weapon: ${character.weapon}</div>`;
        });
        //console.log(apiRes.data);
      } catch (err) {
        console.error(err);
      }
    });


// FETCH ONE
  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    try {
      const container = document.querySelector(".characters-container");
      const fetchone = document.querySelector('.operation > input')
      console.log(fetchone.value); // ça nous retourne un objet qui correpond à la value (1, 2)
      container.innerHTML = "";
      const getOne = await charactersAPI.getOneRegister(fetchone) 
      console.log(getOne);
      // getOne(character) { 
      //   container.innerHTML += `<div class="character-info">
      //   <div class="id">Id: ${character.id}</div>
      //   <div class="name">Name: ${character.name}</div>
      //   <div class="occupation">Occupation: ${character.occupation}</div>
      //   <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
      //   <div class="weapon">Weapon: ${character.weapon}</div>`;
      // };
      //console.log(apiRes.data);
    } catch (err) {
      console.error(err);
    }
  });



  document.getElementById('delete-one').addEventListener('click', function (event) {
  });


  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
  });



  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    
  })



  
    });