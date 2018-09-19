class DOMDisplay {
	constructor() {	}


	

	displayOneRegister(res) {
		let item;
		$('#display-response').html($('<div>', {class: 'character-card', id: 'character-card'}));

		for (let key in res) {
			if (res.hasOwnProperty(key)) {
			  item = `<div class="row"><span>${key}</span><span>${res[key]}</span></div>`
			  $('#character-card').append(item);
			}
		}
	}

}