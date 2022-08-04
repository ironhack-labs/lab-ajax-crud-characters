const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all')
  .addEventListener('click', function (event) {

    const container = document.querySelector(".characters-container");
			charactersAPI.getFullList()
      .then((response) => {
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

  document.getElementById('fetch-one')
  .addEventListener('click', function (event) { // defining the action that will happen after the click

    const container = document.querySelector(".characters-container"); // selecting the whole div
		const inputValue = document.getElementById("characterId").value; // defining that "inputValue" will be the text given by the user

			charactersAPI.getOneRegister(inputValue) // applying a method that is inside the APIHandler class
      .then((response) => { // "then" because I'm waiting for the API's response. this promise returns a "response" -> placeholder
				console.log(response.data); // logging the response data -> data is a key inside the "response" object -> in this case it is the specific data about the character 
				const character = response.data; // assigning the response.data to the constant character
				const div = document.createElement("div"); // creating the div that will show the new character on the html

        // here below character.name equals to response.data.name
        // now we are setting the information that the div we created will have

				div.innerHTML = ` 
          <div class="character-info">
            <div class="name">${character.name}</div> 
            <div class="occupation">${character.occupation}</div>
            <div class="cartoon">${character.cartoon}</div>
            <div class="weapon">${character.weapon}</div>
          </div>
        `;
				container.appendChild(div); // appending the div on the html 

			});

  });

  document.getElementById('delete-one').addEventListener('click', function (event) { // defining the action that will happen after the click
    const input = document.getElementById("character-id-delete").value; // defining that "input" will be the text given by the user
      charactersAPI.getOneRegister(input) // applying a method that is inside the APIHandler class
        .then((response) => { // "then" because I'm waiting for the API's response. this promise returns a "response" -> placeholder
        console.log(response.data); // logging the response data - data is a key inside the "response" object -> in this case it is the specific data about the character
        const character = response.data; // defining that "character" will be the response.data
    charactersAPI.deleteOneRegister(`${character.id}`); // deleting the specific character. character.id === response.data.id
  });

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
