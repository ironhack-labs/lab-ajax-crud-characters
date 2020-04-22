const charactersAPI = new APIHandler('http://localhost:8000');
const container = document.querySelector('.characters-container');

window.addEventListener('load', () => {
	/**
	 * FETCH ALL CHARACTERS LISTENER
	 */
	document.getElementById('fetch-all').addEventListener('click', function (event) {
		// Request on the API to get all the characters in the database
		charactersAPI
			.getFullList()
			.then((APIresult) => {
				// Reset container
				container.innerHTML = '';
				// Iterate into each results of the query
				APIresult.data.forEach((x) => {
					x.cartoon = textIsCartoon(x.cartoon);
					// Add the iteration in the container
					container.innerHTML += createBlock(x);
				});
			})
			.catch((e) => console.log(e));
	});

	/**
	 * FETCH ONE CHARACTER LISTENER
	 */
	document.getElementById('fetch-one').addEventListener('click', function (event) {
		const id = getId(event.target);
		// Request on the API to get only the specified character
		charactersAPI
			.getOneRegister(id)
			.then((APIresult) => {
				// Reset container
				container.innerHTML = '';
				// Passing the result of the query to a new character
				let character = APIresult.data;
				character.cartoon = textIsCartoon(character.cartoon);
				// Add the character bloc in the container
				container.innerHTML += createBlock(character);
				event.target.classList.remove('oops-i-did-it-again');
				event.target.classList.add('all-green');
			})
			.catch((e) => {
				console.log(e);
				event.target.classList.add('oops-i-did-it-again');
			});

		// Clean the input
		resetInput(getInput(event.target));
	});

	/**
	 * DELETE ONE CHARACTER LISTENER
	 */
	document.getElementById('delete-one').addEventListener('click', function (event) {
		// Request on the API to delete the specified character
		charactersAPI
			.deleteOneRegister(getId(event.target))
			.then((APIresult) => {
				// Well, hum... worcestershire sauce ?
				// HAN ! Just googled it ! First try !
				event.target.classList.remove('oops-i-did-it-again');
				event.target.classList.add('all-green');
			})
			.catch((e) => {
				console.log(e);
				event.target.classList.add('oops-i-did-it-again');
			});

		// Clean the input
		resetInput(getInput(event.target));
	});

	/**
	 * EDIT CHARACTER LISTENER
	 */
	document.getElementById('edit-character-form').addEventListener('submit', function (event) {
		// Don't submit the form please master DOM
		event.preventDefault();

		// Selecting which form we need
		const form = document.getElementById('edit-character-form');
		// Getting all the datas from the form into a new variable
		const upgradedCharacter = {
			name: form.querySelector(`input[name="name"]`).value,
			occupation: form.querySelector(`input[name="occupation"]`).value,
			weapon: form.querySelector(`input[name="weapon"]`).value,
			cartoon: form.querySelector(`input[name="cartoon"]:checked`) !== null,
		};
		// Getting also the id to patch the character !
		const id = form.querySelector(`input[name="chr-id"]`).value;

		// Aaaand, the request to update it on the API
		charactersAPI
			.updateOneRegister(id, upgradedCharacter)
			.then((APIresult) => {
				// Ok now...
				// What do you think about this background ?
				// Minions are nice but, like always... as a side character, not the main one !
				// And yeah... we'll update it on the DOM ok ok.
				let char = document.querySelector(`[data-id`);
				if (char !== null) {
					// If we already show how characters, we upgrade this one too.
					character = char.closest('.character-info');
					character.querySelector('.name span').textContent = upgradedCharacter.name;
					character.querySelector('.occupation span').textContent = upgradedCharacter.occupation;
					character.querySelector('.cartoon span').textContent = textIsCartoon(upgradedCharacter.cartoon);
					character.querySelector('.weapon span').textContent = upgradedCharacter.weapon;
				}
				event.target.querySelector('button').classList.remove('oops-i-did-it-again');
				event.target.querySelector('button').classList.add('all-green');
			})
			.catch((e) => {
				console.log(e);
				event.target.querySelector('button').classList.add('oops-i-did-it-again');
			});

		// Clean the input
		resetInput(form, true);
	});

	/**
	 * CREATE CHARACTER LISTENER
	 */
	document.getElementById('new-character-form').addEventListener('submit', function (event) {
		// DOMinic Monaghan, please ! I'm your Billy Boyd ! Don't do that ! Don't submit...
		event.preventDefault();
		const form = document.getElementById('new-character-form');

		// Getting all the datas of our form
		const newCharacter = {
			name: form.querySelector(`input[name="name"]`).value,
			occupation: form.querySelector(`input[name="occupation"]`).value,
			weapon: form.querySelector(`input[name="weapon"]`).value,
			cartoon: form.querySelector(`input[name="cartoon"]:checked`) !== null,
		};

		// And push it to the limit... API... yeah, same thing.
		charactersAPI
			.createOneRegister(newCharacter)
			.then((APIresult) => {
				// Nope, sorry... I'm out of stories tonight...
				// You drained me out x.x
				let char = document.querySelector(`[data-id`);
				if (char !== null) {
					// If we already show how characters, we add this one to the party.
					newCharacter.id = APIresult.data.id;
					newCharacter.cartoon = textIsCartoon(newCharacter.cartoon);
					container.innerHTML += createBlock(newCharacter);
				}
				event.target.querySelector('button').remove('oops-i-did-it-again');
				event.target.querySelector('button').classList.add('all-green');
			})
			.catch((e) => {
				console.log(e);
				event.target.querySelector('button').classList.add('oops-i-did-it-again');
			});

		// Clean the input
		resetInput(form, true);
	});
});

function getId(target) {
	return getInput(target).value;
}

function getInput(target) {
	return target.closest('.operation').querySelector('input');
}

function createBlock(character) {
	return `<div class="character-info">
              <div class="id" data-id="${character.id}">Id: <span>${character.id}</span></div>
              <div class="name">Character Name: <span>${character.name}</span></div>
              <div class="occupation">Character Occupation: <span>${character.occupation}</span></div>
              <div class="cartoon">Is a Cartoon?: <span>${character.cartoon}</span></div>
              <div class="weapon">Weapon: <span>${character.weapon}</span></div>
            </div>`;
}

function resetInput(input, form = false) {
	// console.log(input);
	if (!form) {
		// if it's one isolated input, we just erase his value
		input.value = '';
	} else {
		// else, we just reset the form
		input.reset();
	}
}

function textIsCartoon(v) {
	// True and false is boring
	return v ? 'Yup' : 'Of course not !';
}
