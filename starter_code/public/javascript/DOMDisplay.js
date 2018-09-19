class DOMDisplay {
	constructor() {	}

	displayOneRegister(res) {
		let item;
		let container = $('#display-response');
		
		container.html($('<div>', {class: 'character-card', id: 'character-card'}));
		container.removeClass('hidden');

		for (let key in res) {
			if (res.hasOwnProperty(key)) {
			  item = `<div class="row"><span>${key}</span><span>${res[key]}</span></div>`
			  $('#character-card').append(item);
			}
		}
	}

}