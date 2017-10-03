class APIHandler {
	constructor (baseUrl) {
		this.BASE_URL = baseUrl;
	}

	getFullList (callback) {
		axios.get(this.BASE_URL)
		.then(response => { 
			//console.log(response.data);
			callback(response.data);
		})
		.catch(err => {
			$('#error').text(err.response.data.error);
			console.log(err.response.data.error);
		});
	}

	getOneRegister (caractID, callback) {
		axios
		.get(this.BASE_URL+"/"+caractID)
		.then(response => { 
			//log(response.data);
			callback(response.data);
		})
		.catch(err => {
			$('#error').text(err);
		});
	}

	createOneRegister (data, callback) {
		axios
		.post(this.BASE_URL, data)
		.then(response => { 
			//log(response.data);
			callback(response.data);
		})
		.catch(err => {
			$('#error').text(err);
		});

	}

	updateOneRegister (caractID, data, callback) {
		axios
		.put(this.BASE_URL+"/"+caractID, data)
		.then((response) => {
			console.log(response.data);
			callback(response.data);
		})
		.catch(err => {
			$('#error').text(err);
		});

	}

	deleteOneRegister (caractID, callback) {
		axios
		.delete(this.BASE_URL+"/"+caractID)
		//.then(response => response.data)
		.then((response) => {
			console.log(response.data);
			callback("green");
		})
		.catch(err => {
			$('#error').text(err);
			callback("red");
		});

	}
}


//log function
function log(arg) {
	console.log(arg);
	return arg
}

/*
axios.get()
.then()
.then(log)
*/