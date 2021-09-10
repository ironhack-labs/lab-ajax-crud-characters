const fakeAPIChars = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
	document.getElementById('fetch-all').addEventListener('click', function() {
		fakeAPIChars.getFullList().then((infoCharacter) => {
			const parentDiv = document.querySelector('.characters-container');
			const hiddenDivOnFetch = document.getElementById('character-info-to-hide');

			for (i = 0; i < infoCharacter.length; i++) {
				let oneChar = document.createElement('div');
				oneChar.className = 'character-info';
				const newDivCharacter = document.createElement('div');
				newDivCharacter.classList = 'id';
				newDivCharacter.innerHTML = 'Id:';
				oneChar.appendChild(newDivCharacter);
				const newSpanCharacter = document.createElement('span');
				newSpanCharacter.innerHTML = `${infoCharacter[i].id}`;
				newDivCharacter.appendChild(newSpanCharacter);

				const newDivCharacterName = document.createElement('div');
				newDivCharacterName.classList = 'name';
				newDivCharacterName.innerHTML = 'Name:';
				oneChar.appendChild(newDivCharacterName);
				const newSpanCharacterName = document.createElement('span');
				newSpanCharacterName.innerHTML = `${infoCharacter[i].name}`;
				newDivCharacterName.appendChild(newSpanCharacterName);

				const newDivCharacterOccup = document.createElement('div');
				newDivCharacterOccup.classList = 'occupation';
				newDivCharacterOccup.innerHTML = 'Occupation:';
				oneChar.appendChild(newDivCharacterOccup);
				const newSpanCharacterOccup = document.createElement('span');
				newSpanCharacterOccup.innerHTML = `${infoCharacter[i].occupation}`;
				newDivCharacterOccup.appendChild(newSpanCharacterOccup);

				const newDivCharacterCart = document.createElement('div');
				newDivCharacterCart.classList = 'cartoon';
				newDivCharacterCart.innerHTML = 'Cartoon:';
				oneChar.appendChild(newDivCharacterCart);
				const newSpanCharacterCart = document.createElement('span');
				newSpanCharacterCart.innerHTML = `${infoCharacter[i].cartoon}`;
				newDivCharacterCart.appendChild(newSpanCharacterCart);

				const newDivCharacterWeapon = document.createElement('div');
				newDivCharacterWeapon.classList = 'weapon';
				newDivCharacterWeapon.innerHTML = 'Weapon:';
				oneChar.appendChild(newDivCharacterWeapon);
				const newSpanCharacterWeapon = document.createElement('span');
				newSpanCharacterWeapon.innerHTML = `${infoCharacter[i].weapon}`;
				newDivCharacterWeapon.appendChild(newSpanCharacterWeapon);

				parentDiv.appendChild(oneChar);
			}
			hiddenDivOnFetch.style.display = 'none';
		});
	});

	document.getElementById('fetch-one').addEventListener('click', function() {
		const parentDiv = document.querySelector('.characters-container');
		const userInputId = document.querySelector('.operation input').value;
		let oneChar = document.createElement('div');
		const charIdInput = document.getElementById('character-id-input-one');
		parentDiv.innerHTML = '';

		fakeAPIChars.getOneRegister(userInputId).then((infoCharacter) => {
			oneChar.className = 'character-info';
			const newDivCharacter = document.createElement('div');
			newDivCharacter.classList = 'id';
			newDivCharacter.innerHTML = 'Id:';
			oneChar.appendChild(newDivCharacter);
			const newSpanCharacter = document.createElement('span');
			newSpanCharacter.innerHTML = `${infoCharacter.id}`;
			newDivCharacter.appendChild(newSpanCharacter);

			const newDivCharacterName = document.createElement('div');
			newDivCharacterName.classList = 'name';
			newDivCharacterName.innerHTML = 'Name:';
			oneChar.appendChild(newDivCharacterName);
			const newSpanCharacterName = document.createElement('span');
			newSpanCharacterName.innerHTML = `${infoCharacter.name}`;
			newDivCharacterName.appendChild(newSpanCharacterName);

			const newDivCharacterOccup = document.createElement('div');
			newDivCharacterOccup.classList = 'occupation';
			newDivCharacterOccup.innerHTML = 'Occupation:';
			oneChar.appendChild(newDivCharacterOccup);
			const newSpanCharacterOccup = document.createElement('span');
			newSpanCharacterOccup.innerHTML = `${infoCharacter.occupation}`;
			newDivCharacterOccup.appendChild(newSpanCharacterOccup);

			const newDivCharacterCart = document.createElement('div');
			newDivCharacterCart.classList = 'cartoon';
			newDivCharacterCart.innerHTML = 'Cartoon:';
			oneChar.appendChild(newDivCharacterCart);
			const newSpanCharacterCart = document.createElement('span');
			newSpanCharacterCart.innerHTML = `${infoCharacter.cartoon}`;
			newDivCharacterCart.appendChild(newSpanCharacterCart);

			const newDivCharacterWeapon = document.createElement('div');
			newDivCharacterWeapon.classList = 'weapon';
			newDivCharacterWeapon.innerHTML = 'Weapon:';
			oneChar.appendChild(newDivCharacterWeapon);
			const newSpanCharacterWeapon = document.createElement('span');
			newSpanCharacterWeapon.innerHTML = `${infoCharacter.weapon}`;
			newDivCharacterWeapon.appendChild(newSpanCharacterWeapon);

			parentDiv.appendChild(oneChar);
			charIdInput.style.backgroundColor = 'green';
		});
		// Always returning something, so dunno how to print in red
		// .catch(() => {
		// 	charIdInput.style.backgroundColor = 'red';
		// });
	});

	document.getElementById('delete-one').addEventListener('click', function() {
		const userInputId = document.querySelector('.delete input').value;
		const btnDelete = document.getElementById('character-id-delete');

		fakeAPIChars.deleteOneRegister(userInputId).then(() => (btnDelete.style.backgroundColor = 'green'));
	});

	document.getElementById('edit-character-form').addEventListener('submit', () => {
		const id = document.querySelector('#edit-character-form input[name="chr-id"]').value;
		const occupation = document.querySelector('#edit-character-form input[name="occupation"]').value;
		const name = document.querySelector('#edit-character-form input[name="name"]').value;
		const weapon = document.querySelector('#edit-character-form input[name="weapon"]').value;
		const cartoon = document.querySelector('#edit-character-form input[name="cartoon"]').checked;

		const updatedCharacter = {
			name,
			occupation,
			weapon,
			cartoon
		};

		fakeAPIChars.updateOneRegister(id, updatedCharacter).then(() => {});
	});

	document.getElementById('new-character-form').addEventListener('submit', function() {
		// Like we did in the cart lab
		const newCharsValue = document.getElementById('new-character-form').elements;
		// Values of the inputs
		const name = newCharsValue.name.value;
		const occupation = newCharsValue.occupation.value;
		const cartoon = newCharsValue.cartoon.checked;
		const weapon = newCharsValue.weapon.value;
		// Values of the new character
		const newChar = { name, occupation, weapon, cartoon };

		fakeAPIChars.createOneRegister(newChar);
	});

	// Adding a clear button to remove stuff
	document.getElementById('clear').addEventListener('click', function() {
		window.location.reload();
	});
});
