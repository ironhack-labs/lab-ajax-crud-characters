const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
	charactersAPI.charactersService;
	document.getElementById('fetch-all').addEventListener('click', async function(event) {
		const { data } = await charactersAPI.getFullList();
		document.querySelector('.characters-container').innerHTML = '';
		data.forEach((character) => {
			const card = `<div class="character-info">
      <div class="name">Name: ${character.name}</div>
      <div class="occupation">Ocupation: ${character.occupation}</div>
      <div class="cartoon">IsaCartoon?:${character.cartoon}</div>
      <div class="weapon">Weapon:${character.weapon}</div>
    </div>`;

			document.querySelector('.characters-container').insertAdjacentHTML('beforeend', card);
		});
	});

	document.getElementById('fetch-one').addEventListener('click', async function(event) {
		const characterId = document.querySelector('[name = character-id]').value;
		const { data } = await charactersAPI.getOneRegister(characterId);
		document.querySelector('.characters-container').innerHTML = '';
		const card = `<div class="character-info">
      <div class="name">Name: ${data.name}</div>
      <div class="occupation">Ocupation: ${data.occupation}</div>
      <div class="cartoon">IsaCartoon?:${data.cartoon}</div>
      <div class="weapon">Weapon:${data.weapon}</div>
    </div>`;

		document.querySelector('.characters-container').insertAdjacentHTML('beforeend', card);
	});

	document.getElementById('delete-one').addEventListener('click', async function(event) {
		let id = document.querySelector('[name = character-id-delete]').value;
		const deleted = await charactersAPI.deleteOneRegister(id);
	});

	document.getElementById('edit-character-form').addEventListener('submit', async function(event) {
		event.preventDefault();
		const id = document.querySelector('[name = chr-id]').value;
		const name = document.querySelector('[name = nameEdit]').value;
		const occupation = document.querySelector('[name = occupationEdit]').value;
		const weapon = document.querySelector('[name = weaponEdit]').value;
		const cartoon = document.querySelector('[name = cartoonUpdate]').checked;
		const update = await charactersAPI.updateOneRegister(id, name, occupation, weapon, cartoon);
	});

	document.getElementById('new-character-form').addEventListener('submit', function(event) {
		event.preventDefault();
		const name = document.querySelector('[name = name]').value;
		const occupation = document.querySelector('[name = occupation]').value;
		const weapon = document.querySelector('[name = weapon]').value;
		const cartoon = document.querySelector('[name = cartoonCreate]').checked;
		console.log(cartoon);
		charactersAPI
			.createOneRegister(name, occupation, weapon, cartoon)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	});
});
