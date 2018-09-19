class DOMDisplay {
	constructor() {	}

	displayOneRegister(res) {
		for (let key in res) {
			if (res.hasOwnProperty(key)) {
			  console.log(key + " -> " + res[key]);
			}
		}
	}
}