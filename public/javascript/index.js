const charactersAPI = new APIHandler('http://localhost:8000');

// CREATION CONTAINER
const createCharacterBox = (element) => {
	let characterInfo = document.createElement('div');
	characterInfo.innerHTML = `<div class="name">Name : <span>${element.name}</span></div>
  <div class="occupation">Occupation : <span>${element.occupation}</span></div>
  <div class="cartoon">Is a Cartoon ? <span>${element.cartoon}</span></div>
  <div class="weapon">Weapon : <span>${element.weapon}</span></div>`;
	characterInfo.classList.add('character-info');
	document.querySelector('.characters-container').appendChild(characterInfo);
};

// DISPLAY ALL
window.addEventListener('load', () => {
	document.getElementById('fetch-all').addEventListener('click', function(event) {
		charactersAPI
			.getFullList()
			.then((response) => {
				document.querySelector('.characters-container').innerHTML = '';
				response.data.forEach((element) => {
					createCharacterBox(element);
				});
			})
			.catch((error) => console.log(error));
	});

	// DISPLAY ONE
	document.getElementById('fetch-one').addEventListener('click', function(event) {
		const id = document.getElementById('character-id').value;
		charactersAPI
			.getOneRegister(id)
			.then((response) => {
				document.querySelector('.characters-container').innerHTML = '';
				createCharacterBox(response.data);

				document.querySelector('.edit-id').value = response.data.id;
				document.querySelector('.edit-name').value = response.data.name;
				document.querySelector('.edit-occupation').value = response.data.occupation;
				document.querySelector('.edit-weapon').value = response.data.weapon;
				document.querySelector('.edit-cartoon').checked = response.data.cartoon;
			})
			.catch((error) => console.log(error));
	});

	// DELETE ONE
	document.getElementById('delete-one').addEventListener('click', function(event) {
		event.preventDefault();
		const id = document.getElementById('character-id-delete').value;
		charactersAPI
			.deleteOneRegister(id)
			.then((response) => {
				document.getElementById('delete-one').classList.add('active');
			})
			.catch((error) => {
				console.log(error);
				document.getElementById('delete-one').classList.add('error');
			});
	});

	// EDIT ONE
	document.getElementById('edit-character-form').addEventListener('submit', function(event) {
		event.preventDefault();

		const updateCharacter = {};
		id = document.querySelector('.edit-id').value;
		updateCharacter.name = document.querySelector('.edit-name').value;
		updateCharacter.occupation = document.querySelector('.edit-occupation').value;
		updateCharacter.weapon = document.querySelector('.edit-weapon').value;
		updateCharacter.cartoon = document.querySelector('.edit-cartoon').checked;

		charactersAPI
			.updateOneRegister(id, updateCharacter)
			.then((response) => {
				document.getElementById('edit-send-data').classList.add('active');
			})
			.catch((error) => {
				console.log(error);
				document.getElementById('edit-send-data').classList.add('error');
			});
	});

	// CREATE ONE
	document.getElementById('new-character-form').addEventListener('submit', function(event) {
		event.preventDefault();

		const newCharacter = {};
		newCharacter.name = document.querySelector('.create-name').value;
		newCharacter.occupation = document.querySelector('.create-occupation').value;
		newCharacter.weapon = document.querySelector('.create-weapon').value;
		newCharacter.cartoon = document.querySelector('.create-cartoon').checked;

		charactersAPI
			.createOneRegister(newCharacter)
			.then((response) => {
				document.getElementById('create-send-data').classList.add('active');
			})
			.catch((error) => {
				console.log(error);
				document.getElementById('create-send-data').classList.add('error');
			});
	});
});
