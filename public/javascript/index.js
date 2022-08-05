const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
  
    const container = document.querySelector(".characters-container");
      charactersAPI.getFullList().then((response) => {
        console.log(response);
        response.data.forEach((character) => {
          const div = document.createElement("div");
          div.innerHTML =
          `<div class="character-info">
            <div class="name">${character.name}</div>
            <div class="occupation">${character.occupation}</div>
            <div class="cartoon">${character.cartoon}</div>
            <div class="weapon">${character.weapon}</div>
          </div>`;
          container.appendChild(div);
        });
      });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
   
    //First we select the whole div to insert things into the right place
    const container = document.querySelector(".characters-container");

    // Selecting the field with the users input for the character Id
			const inputValue = document.getElementById("characterId").value;

      // Calling the API method for searching by Id
			charactersAPI.getOneRegister(inputValue)

      //The method above returns a promise, meaning we have to create a .then()
        .then((response) => {
				console.log(response.data);
		   //Assigning a variable to the object  

        const character = response.data;
      
				const div = document.createElement("div");
				div.innerHTML = `
          <div class="character-info">
            <div class="name">${character.name}</div>
            <div class="occupation">${character.occupation}</div>
            <div class="cartoon">${character.cartoon}</div>
            <div class="weapon">${character.weapon}</div>
          </div>
        `;
				container.appendChild(div);
			});
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    //Getting the value of the input and saving it into a variable
    const input = document.getElementById("character-id-delete").value;

    //Running the getOneRegister method on the input value
			charactersAPI.getOneRegister(input)

    // It will return a promise, which will return a single object (the one we want to delete)
       .then((response) => {
				console.log(response.data);
				const character = response.data;

     // Finally, we call the deleteOneRegister on the returned object's id.
    charactersAPI.deleteOneRegister(`${character.id}`);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    //Getting the value of the input and saving it into a variable
    const input = document.getElementById("chr-id").value;

    //Running the getOneRegister method on the input value
			charactersAPI.getOneRegister(input)

    // It will return a promise, which will return a single object (the one we want to delete)
       .then((response) => {
				console.log(response.data);
				const character = response.data;
    charactersAPI.updateOneRegister(`${character.id}`, input);
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

 //Getting the value of the input and saving it into a variable
  const input = document.getElementById("character-form").value; */

 //Running the getOneRegister method on the input value
    charactersAPI.getOneRegister(input) 

 // It will return a promise, which will return a single object (the one we want to delete)
     .then((response) => {
     console.log(response.data); 
     const character = response.data;
/* 
     const { name, occupation, weapon, cartoon } = document.getElementById("new-form-name new-form-occupation new-form-weapon new-form-cartoon").value;

     charactersAPI.createCharacter({ name, occupation, weapon, cartoon })
     const character = document.getElementById("character-form").value */
     charactersAPI.createOneRegister(character);

     })
    })
   })
  })
 })
