const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
	charactersAPI.charactersService;
	document.getElementById('fetch-all').addEventListener('click', async function(event) {
		const { data } = await charactersAPI.getFullList();
		console.log(data);
		data.forEach((character) => {
			const cardInfo = document.createElement('div');
			cardInfo.className = 'character-info';

			const id = document.createElement('div');
			id.className = 'id';
			id.innerText = `Id: ${character.id}`;
			const name = document.createElement('div');
			name.className = 'name';
			name.innerText = `Name: ${character.name}`;
			const occupation = document.createElement('div');
			occupation.className = 'occupation';
			occupation.innerText = `Occupation: ${character.occupation}`;
			const weapon = document.createElement('div');
			weapon.className = 'weapon';
			weapon.innerText = `Weapon: ${character.weapon}`;
			const cartoon = document.createElement('div');
			cartoon.className = 'cartoon';
			cartoon.innerText = `Is a Cartoon?: ${character.cartoon}`;

			cardInfo.appendChild(id);
			cardInfo.appendChild(name);
			cardInfo.appendChild(occupation);
			cardInfo.appendChild(cartoon);
			cardInfo.appendChild(weapon);
			console.log(cardInfo);
			document.querySelector('.characters-container').appendChild(cardInfo);
		});
	});

	document.getElementById('fetch-one').addEventListener('click', async function(event) {
		const characterId = document.querySelector('[name = character-id]').value;
		const { data } = await charactersAPI.getOneRegister(characterId);
		const cardInfo = document.createElement('div');
		cardInfo.className = 'character-info';

		const id = document.createElement('div');
		id.className = 'id';
		id.innerText = `Id: ${data.id}`;
		const name = document.createElement('div');
		name.className = 'name';
		name.innerText = `Name: ${data.name}`;
		const occupation = document.createElement('div');
		occupation.className = 'occupation';
		occupation.innerText = `Occupation: ${data.occupation}`;
		const weapon = document.createElement('div');
		weapon.className = 'weapon';
		weapon.innerText = `Weapon: ${data.weapon}`;
		const cartoon = document.createElement('div');
		cartoon.className = 'cartoon';
		cartoon.innerText = `Is a Cartoon?: ${data.cartoon}`;

		cardInfo.appendChild(id);
		cardInfo.appendChild(name);
		cardInfo.appendChild(occupation);
		cardInfo.appendChild(cartoon);
		cardInfo.appendChild(weapon);
		console.log(cardInfo);
		document.querySelector('.characters-container').appendChild(cardInfo);
	});

	document.getElementById('delete-one').addEventListener('click', async function(event) {
		const id = document.querySelector('[name = character-id-delete]').value;
		const deleted = await charactersAPI.deleteOneRegister(id);
	});

	document.getElementById('edit-character-form').addEventListener('submit', async function(event) {
		const id = document.querySelector('[name = cartoonUpdate]').value;
		const name = document.querySelector('[name = name]').value;
		const occupation = document.querySelector('[name = occupation]').value;
		const weapon = document.querySelector('[name = weapon]').value;
		const cartoon = document.querySelector('[name = cartoonCreate]').value;

		const update = charactersAPI.updateOneRegister(id, name, occupation, weapon, cartoon);
	});

	document.getElementById('new-character-form').addEventListener('submit', function(event) {
		const name = document.querySelector('[name = name]').value;
		const occupation = document.querySelector('[name = occupation]').value;
		const weapon = document.querySelector('[name = weapon]').value;
		const cartoon = document.querySelector('[name = cartoonCreate]').value;

		charactersAPI
			.createOneRegister(name, occupation, weapon, cartoon)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	});
});
