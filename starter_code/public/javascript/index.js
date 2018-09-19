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
		
		if (id && id !== "") {
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
		const inputs = $('#edit-character-form :input');
		let character = {};
		let id;

		inputs.each(function() {
			if (this.type === 'text') {
				if (this.name !== 'chr-id') {
					character[this.name] = $(this).val().toLowerCase();
				} else {
					id = $(this).val();
				}
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

		if ((character && !$.isEmptyObject(character)) && (id && id !== "")) {
			charactersAPI.updateOneRegister(id, character);
		}
	}

	document.getElementById('delete-one').onclick = function (e) {
		e.preventDefault();
		let id = $('#character-id-delete').val();

		if (id && id !== ""){
			charactersAPI.deleteOneRegister(id);
		}
	}
})