class APIHandler {
	constructor(baseUrl) {
		this.BASE_URL = baseUrl
	}

	getFullList() {
		axios
			.get(`${this.BASE_URL}characters`)
			.then(result => {
				console.log(result)
				result.data.forEach(elm => {
					document.getElementById('name').innerHTML += `${elm.name}<br>`
					document.getElementById('occupation').innerHTML += `${elm.occupation}<br>`
					document.getElementById('cartoon').innerHTML += `${elm.cartoon}<br>`
					document.getElementById('weapon').innerHTML += `${elm.weapon}<br>`
				})
			})
			.catch(err => console.log(err))
	}

	getOneRegister() {
		const id = document.getElementById('id-input-one').value
		axios
			.get(`${this.BASE_URL}characters/${id}`)
			.then(result => {
				document.getElementById('name').innerHTML = result.data.name
				document.getElementById('occupation').innerHTML = result.data.occupation
				document.getElementById('cartoon').innerHTML = result.data.cartoon
				document.getElementById('weapon').innerHTML = result.data.weapon
			})
			.catch(err => console.log(err))
	}

	createOneRegister() {
		const characterToCreate = {
			name: document.getElementById('create-name').value,
			occupation: document.getElementById('create-occupation').value,
			weapon: document.getElementById('create-weapon').value,
			cartoon: document.getElementById('create-cartoon').checked
		}

		axios
			.post(`${this.BASE_URL}characters`, characterToCreate)
			.then(character => console.log('Character creado', character))
			.catch(err => console.log(err))
	}

	updateOneRegister() {
		const characterToUpdate = {
			name: document.getElementById('edit-name').value,
			occupation: document.getElementById('edit-occupation').value,
			weapon: document.getElementById('edit-weapon').value,
			cartoon: document.getElementById('edit-cartoon').checked
		}
		axios
			.put(`${this.BASE_URL}characters/${document.getElementById('edit-id').value}`, characterToUpdate)
			.then(result => console.log(result))
			.catch(err => console.log(err))
	}

	deleteOneRegister() {
		axios.delete(`${this.BASE_URL}characters/${document.getElementById('delete-id').value}`)
	}
}
