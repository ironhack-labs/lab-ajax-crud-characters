class APIHandler {
	constructor(baseUrl) {
		this.BASE_URL = baseUrl;
	}

	getFullList = async () => {
		try {
			const charactersFromAPI = await axios.get(this.BASE_URL + '/characters');
			return charactersFromAPI.data;
		} catch (error) {
			console.log(error);
		}
	};

	getOneRegister = async (id) => {
    try {
			const characterFromAPI = await axios.get(this.BASE_URL + '/characters/' + id);
			return characterFromAPI.data;
		} catch (error) {
			console.log(error);
		}
	}

	createOneRegister = async (name, occupation, weapon, cartoon) => {
    try {
      const newCharacter = {
        name,
        occupation,
        weapon,
        cartoon
      };
      
      const characterFromAPI = await axios.post(this.BASE_URL + '/characters', newCharacter);
			return characterFromAPI.data;
		} catch (error) {
			console.log(error);
		}
	}

	updateOneRegister = async (id, name, occupation, weapon, cartoon) => {
    try {
      const updatedCharacter = {
        name,
        occupation,
        weapon,
        cartoon
      };

			const characterFromAPI = await axios.put(this.BASE_URL + '/characters/' + id, updatedCharacter);
			return characterFromAPI.data;
		} catch (error) {
			console.log(error);
		}
	}

	deleteOneRegister = async (id) => {
    try {
      await axios.delete(this.BASE_URL + '/characters/' + id);
      return true
    } catch (error) {
      console.log(error);
      return false
    }
	}
}
