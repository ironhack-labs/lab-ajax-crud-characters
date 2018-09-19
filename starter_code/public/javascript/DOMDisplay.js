class DOMDisplay {
	constructor() {
		this.displayContainer = $('#display-response');
	}


	displayAllRegisters(res) {
		console.log(res);
	}

	displayOneRegister(res) {
		let item;
		
		const resOrdered = {
			id: res.id,
			name: res.name,
			occupation: res.occupation,
			weapon: res.weapon,
			cartoon: res.cartoon
		}

		this.displayContainer.html($('<div>', {class: 'character-card', id: 'character-card'}));
		this.displayContainer.removeClass('hidden');

		for (let key in resOrdered) {
			if (res.hasOwnProperty(key)) {
			  item = `<div class="row"><span>${key}</span><span>${res[key]}</span></div>`
			  $('#character-card').append(item);
			}
		}
	}
}