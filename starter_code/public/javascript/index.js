const charactersAPI = new APIHandler("http://localhost:8000/");
const charactersDisplay = new DOMDisplay();

$(document).ready(() => {
	document.getElementById('fetch-all').onclick = function (e) {
		e.preventDefault();
		const data = charactersAPI.getFullList();

	}

	document.getElementById('fetch-one').onclick = function (e) {
		e.preventDefault();
		const id = $('#character-id').val();
		if (id) {
			const data = charactersAPI.getOneRegister(id)
				.then(res => charactersDisplay.displayOneRegister(res))	
		}

	}

	document.getElementById('new-character-form').onsubmit = function (e) {
		e.preventDefault();
		const character = {
			name: "Juana de Arco",
			occupation: "Guerrera",
			weapon: "Espada",
			cartoon: false
		}
		charactersAPI.createOneRegister(character);
	}

	document.getElementById('edit-character-form').onsubmit = function (e) {
		e.preventDefault();
		const characterToUpdate = {
			name: "Juana de Arco",
			occupation: "Luchadora",
			weapon: "Espada",
			cartoon: false
		}
		charactersAPI.updateOneRegister(6,characterToUpdate);
	}

	document.getElementById('delete-one').onclick = function (e) {
		e.preventDefault();
		charactersAPI.deleteOneRegister('6');
	}
})