class DOMDisplay {
	constructor() {
		this.displayContainer = $('#display-response');
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

		this.displayContainer.removeClass('hidden');
		let el = $('<div>').addClass('character-card');

		for (let key in resOrdered) {
			if (res.hasOwnProperty(key)) {
			  	item = `<div class="row"><span>${key}</span><span>${res[key]}</span></div>`;
				el.append(item);
				
			}
		}

		this.displayContainer.append(el); //se añade a #display-response
		// if (res.length === 1){
		// 	this.displayContainer.html(el);
		// } else{
		// 	this.displayContainer.append(el);
		// }
	}
}