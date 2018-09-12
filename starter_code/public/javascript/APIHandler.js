
class APIHandler {

    constructor(url) {
        this.baseAPI = url;
    }
   async getAllCharacters() {
       try {
           let characters = await axios.get(this.baseAPI + "/characters");
           return characters;

       } catch(ex) {
           console.log(ex);
       }

    }

    async getCharacterInfo(id) {
        try {
            let character = await axios.get(thi.baseURL + `/characters/${id}`);
            character = character.data;
            console.log(character);

        } catch(ex) {
            console.log(ex);
        }
    }

    async createCharacter(opt) {
        try {
            let character = await axios.post(this.baseAPI + `/characters`, opt);
            character = character.data;
            console.log(character);

        } catch(ex) {
            console.log(ex);
        }
    }

    async delCharacter(id) {
        try {
            let character = await axios.delete(this.baseAPI + `/characters/${id}`);
            console.log("The character was deleted!");

        } catch(ex) {
            console.log(ex);
        }
    }

    async editCharacter({ id , ...opt}) {
        try {
            let character = await axios.put(this.baseAPI + `/characters/${id}`, opt);
            character = character.data;
            console.log(character);

        } catch(ex) {
            console.log(ex);
        }
    }
}

