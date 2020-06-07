const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
	document
		.getElementById('fetch-all')
		.addEventListener('click', async function (event) {
			event.preventDefault();
			event.stopPropagation();
			const list = await charactersAPI.getFullList();
			console.log(list);
			printCharacters(list);
		});

	document
		.getElementById('fetch-one')
		.addEventListener('click', async function (event) {
			event.preventDefault();
			event.stopPropagation();
			let characterId = document.getElementById('character-id').value;
			if (characterId) {
				let character = await charactersAPI.getOneRegister(characterId);
				console.log(character);
				printCharacter(character);
			}
		});

	document
		.getElementById('delete-one')
		.addEventListener('click', async function (event) {
			event.preventDefault();
			event.stopPropagation();
			let characterId = document.getElementById('character-id-delete').value;
			if (characterId) {
				const result = await charactersAPI.deleteOneRegister(characterId);
				document.getElementById('delete-one').style.backgroundColor =
					result != Error ? 'green' : 'red';
				if (result != Error) {
					document.getElementById('delete-one').className = 'active';
				}
			}
		});

	document
		.getElementById('edit-character-form')
		.addEventListener('submit', async function (event) {
			event.preventDefault();
			event.stopPropagation();
			const character = {
				id: document.getElementById('edit-id').value,
				name: document.getElementById('edit-name').value,
				occupation: document.getElementById('edit-occupation').value,
				weapon: document.getElementById('edit-weapon').value,
				cartoon: document.getElementById('edit-cartoon').checked,
			};
			console.log(character);
			if (character) {
				const editCharacter = await charactersAPI.updateOneRegister(character);
				document.getElementById('edit-send-data').style.backgroundColor =
					editCharacter != Error ? 'green' : 'red';
				if (editCharacter != Error) {
					console.log(editCharacter);
					printCharacter(editCharacter);
				}
			}
		});

	document
		.getElementById('new-character-form')
		.addEventListener('submit', async function (event) {
			event.preventDefault();
			event.stopPropagation();
			const character = {
				name: document.getElementById('new-name').value,
				occupation: document.getElementById('new-occupation').value,
				weapon: document.getElementById('new-weapon').value,
				cartoon: document.getElementById('new-cartoon').checked,
			};
			console.log(character);
			if (character) {
				const newCharacter = await charactersAPI.createOneRegister(character);
				document.getElementById('new-send-data').style.backgroundColor =
					typeof newCharacter != typeof Error ? 'green' : 'red';
				if (typeof newCharacter != typeof Error) {
					console.log(newCharacter);
					printCharacter(newCharacter);
				}
			}
		});
});

function printCharacters(list) {
	document.querySelector('.characters').innerHTML = '';
	let elemHTML = '';
	list.forEach((elem) => {
		elemHTML += `<div class="characters-container"><div class="character-info"><div class="id">Id: ${elem.id}</div><div class="name">Name: ${elem.name}</div><div class="occupation">Occupation: ${elem.occupation}</div><div class="cartoon">Is Cartoon? <input type="checkbox" checked='${elem.cartoon}'></div><div class="weapon">Weapon: ${elem.weapon}</div></div></div>`;
	});
	document.querySelector('.characters').innerHTML = elemHTML;
}
function printCharacter(elem) {
	document.querySelector('.characters').innerHTML = '';
	let elemHTML = `<div class="characters-container"><div class="character-info"><div class="id">Id: ${elem.id}</div><div class="name">Name: ${elem.name}</div><div class="occupation">Occupation: ${elem.occupation}</div><div class="cartoon">Is Cartoon? <input type="checkbox" checked='${elem.cartoon}'></div><div class="weapon">Weapon: ${elem.weapon}</div></div></div>`;
	document.querySelector('.characters').innerHTML = elemHTML;
	document.getElementById('edit-id').value = elem.id;
	document.getElementById('edit-name').value = elem.name;
	document.getElementById('edit-occupation').value = elem.occupation;
	document.getElementById('edit-weapon').value = elem.weapon;
	document.getElementById('edit-cartoon').checked = elem.cartoon;
}
