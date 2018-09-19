const charactersAPI = new APIHandler("http://localhost:8000/");
const charactersDisplay = new DOMDisplay();

$(document).ready(() => {
	document.getElementById('fetch-all').onclick = function (e) {
		e.preventDefault();
		charactersAPI.getFullList()
			.then(res => {
				charactersDisplay.clearDisplayContainer();
				for (let i = 0; i < res.length; i++) {
					charactersDisplay.displayRegister(res[i]);
				}
			})
	}

	document.getElementById('fetch-one').onclick = function (e) {
		e.preventDefault();
		const id = $('#character-id').val();
		
		if (id) {
			charactersAPI.getOneRegister(id)
				.then(res => {
					charactersDisplay.clearDisplayContainer();
					charactersDisplay.displayRegister(res);
				})
		}
	}

	document.getElementById('new-character-form').onsubmit = function (e) {
		e.preventDefault();
		const inputs = $('#new-character-form :input');
		let character = {};

		inputs.each(function() {
			
			if (this.type === 'text') {
				character[this.name] = $(this).val().toLowerCase();
			} 
			else if (this.type === 'checkbox') {
				if ($(this).is(':checked')) {
					character[this.name] = true;
				}
				else {
					character[this.name] = false;
				}
			}
		});
		
		if (character && !$.isEmptyObject(character)) {
			charactersAPI.createOneRegister(character);
		}
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