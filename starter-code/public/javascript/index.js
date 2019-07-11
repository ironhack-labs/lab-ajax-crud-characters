const charactersAPI = new APIHandler('http://localhost:8000');

$(document).ready(() => {
	document.getElementById('fetch-all').onclick = function() {
		let list = document.getElementsByClassName('characters-container')[0];
		list.innerHTML = '';
		axios
			.get('https://ih-crud-api.herokuapp.com/characters/')
			.then((response) => {
				response.data.forEach((character) => {
					let newChar = document.createElement('div');
					newChar.classList = 'character-info';
					newChar.innerHTML = `
          <div class='id'>Id: ${character.id} </div>
          <div class='name'>Name: ${character.name} </div>
          <div class='occupation'>Occupation: ${character.occupation} </div>
          <div class='debt'> Debt: ${character.debt} </div>
          <div class='weapon'> Weapon: ${character.weapon} </div>
          `;
					list.appendChild(newChar);
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	document.getElementById('fetch-one').onclick = function() {
		let id = document.getElementById('character-id').value;
		let list = document.getElementsByClassName('characters-container')[0];
		list.innerHTML = '';
		axios
			.get(`https://ih-crud-api.herokuapp.com/characters/${id}`)
			.then((response) => {
				console.log(response.data);
				// response.data.forEach((character) => {
				let newChar = document.createElement('div');
				newChar.classList = 'character-info';
				newChar.innerHTML = `
				  <div class='id'>Id: ${response.data.id} </div>
				  <div class='name'>Name: ${response.data.name} </div>
				  <div class='occupation'>Occupation: ${response.data.occupation} </div>
				  <div class='debt'> Debt: ${response.data.debt} </div>
				  <div class='weapon'> Weapon: ${response.data.weapon} </div>
				  `;
				list.appendChild(newChar);
				// });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	document.getElementById('send-data-edit').onclick = function() {
		const charInfo = {
			id: document.getElementById('character-edit-id').value,
			name: document.getElementById('character-edit-name').value,
			occupation: document.getElementById('character-edit-occupation').value,
			weapon: document.getElementById('character-edit-weapon').value,
			debt: document.getElementById('character-edit-debt').checked,
		};
		axios
			.put(
				`https://ih-crud-api.herokuapp.com/characters/${charInfo.id}`,
				charInfo,
			)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});

		document.getElementById('character-edit-id').value = '';
		document.getElementById('character-edit-name').value = '';
		document.getElementById('character-edit-occupation').value = '';
		document.getElementById('character-edit-weapon').value = '';
		document.getElementById('character-edit-debt').value = '';
	};

	document.getElementById('send-data-create').onclick = function() {
		const charInfo = {
			name: document.getElementById('character-create-name').value,
			occupation: document.getElementById('character-create-occupation').value,
			weapon: document.getElementById('character-create-weapon').value,
			debt: document.getElementById('character-create-debt').checked,
		};

		axios
			.post(`https://ih-crud-api.herokuapp.com/characters/`, charInfo)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});

		document.getElementById('character-create-name').value = '';
		document.getElementById('character-create-occupation').value = '';
		document.getElementById('character-create-weapon').value = '';
		document.getElementById('character-create-debt').value = '';
	};
});
