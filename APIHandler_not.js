class APIHandler {
    constructor (){
        this.name = 'APIHandler';
    }

    getAllCharacters(){
        axios
            .get('http://localhost:8000/characters')
            .then(response => {
                console.log('response', response);
            })
            .catch (err => console.log('error occurred', err));
    }

    getCharacter(characterId){
        characterId = req.params.id;

        axios
        .get('http://localhost:8000/characters/:id')
            .then(response => {
                console.log('response', response);
            })
            .catch (err => console.log('error occurred', err));
    }

    newCharacter(character){
        character = {
            name: String,
            occupation: String,
            cartoon: Boolean,
            weapon: String
        };

        axios
            .post('http://localhost:8000/characters', character)
                .then(response => {
                    const { name, occupation, weapon, cartoon } = response.data;
                    const newCharacterDiv = document.createElement('div');
                    newCharacterDiv.innerHTML = `<p>New character created - Name: ${response.data.name} ID: ${response.data.id}</p>`;
                    document.body.appendChild(newCharacterDiv);

                    console.log(`New character created - Name: ${response.data.name} ID: ${response.data.id}`);
                })
                .catch (err => {
                    if(typeof response.data.name !== 'string'){
                        console.log('Characters name must be a string.');

                        const errorNameDiv = document.createElement('div');
                        errorNameDiv.innerHTML = `<p>Characters name must be a string.</p>`;
                        document.body.appendChild(errorNameDiv);
                    }
                    if(typeof response.data.occupation !== 'string'){
                        console.log('Characters occupation must be a string.');

                        const errorOccupationDiv = document.createElement('div');
                        errorOccupationDiv.innerHTML = `<p>Characters occupation must be a string.</p>`;
                        document.body.appendChild(errorOccupationDiv);
                    } 
                    if(typeof response.data.cartoon !== 'boolean'){
                        console.log('Characters boolean must be true or false.');

                        const errorCartoonDiv = document.createElement('div');
                        errorCartoonDiv.innerHTML = `<p>Characters cartoon must be true or false.</p>`;
                        document.body.appendChild(errorCartoonDiv);
                    }
                    if(typeof response.data.weapon !== 'string'){
                        console.log('Characters weapon must be a string.');

                        const errorWeaponDiv = document.createElement('div');
                        errorWeaponDiv.innerHTML = `<p>Characters weapon must be a string.</p>`;
                        document.body.appendChild(errorWeaponDiv);
                    }
                });
    }

    deleteCharacter(characterId){
        characterId = req.params.id;

        axios
            .delete('http://localhost:8000/characters/:id')
                .then(response => {
                    console.log('Character has been successfully deleted.');
                })
                .catch(err => {
                    console.log('Character not found.');
                });
    }

    updateCharacter(characterId, updatedCharacter){
        characterId = req.params.id;

        updatedCharacter = {
            name: String,
            occupation: String,
            cartoon: Boolean,
            weapon: String
        };

        axios
            .patch('http://localhost:8000/characters/:id', updatedCharacter)
                .then(response => {
                    console.log('Character updated!');

                    const updatedCharacterDiv = document.createElement('div');
                    updatedCharacterDiv.innerHTML = `<p>Character updated!</p>`;
                    document.body.appendChild(updatedCharacterDiv);
                })
                .catch(err => {
                    if(err.response.status === 404) {
                        const errorDiv = document.createElement('div');
                        errorDiv.innerHTML = `<p>There's no character with id: ${characterId}</p>`;
                        document.body.appendChild(errorDiv);
                    }
                });
    }

}



getAllCharacters();