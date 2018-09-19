class DOMDisplay {
	constructor() {
		this.displayContainer = $('#characters-container');
	}

	clearDisplayContainer () {
		this.displayContainer.empty();
	}

	displayRegister(res) {
		let item;
		
		const resOrdered = {
			id: res.id,
			name: res.name,
			occupation: res.occupation,
			weapon: res.weapon,
			cartoon: res.cartoon
		}

		let el = $('<div>').addClass('character-card');

		for (let key in resOrdered) {
			if (resOrdered.hasOwnProperty(key)) {
			  	item = `<div class="row"><span>${key}</span><span>${resOrdered[key]}</span></div>`;
				el.append(item);
			}
		}

		this.displayContainer.append(el);
	}
}