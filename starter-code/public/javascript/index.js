const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
    document.getElementById('fetch-all').onclick = function () {

        charactersAPI.getFullList().then((fullList) => {
            //    return fullList;
            console.log(fullList)
            
            document.querySelector('.character-info .id').innerText = `Id : ${fullList[0].id}`;
            document.querySelector('.character-info .name').innerText = `Name : ${fullList[0].name}`;
            document.querySelector('.character-info .occupation').innerText = `Occupation :${fullList[0].occupation}`;
            document.querySelector('.character-info .cartoon').innerText = `Cartoon : ${fullList[0].cartoon}`;
            document.querySelector('.character-info .weapon').innerText = `Weapon : ${fullList[0].weapon}`;

        }).catch((err) => {
            console.log(error)
        })

    }

    document.getElementById('fetch-one').onclick = function () {
        let characterId = document.querySelector('.operation input').value;
        charactersAPI.getOneRegister(characterId).then((oneCharacter) => {
                console.log(oneCharacter);
                document.querySelector('.character-info .id').innerText = `Id : ${oneCharacter.id}`;
                document.querySelector('.character-info .name').innerText = `Name : ${oneCharacter.name}`;
                document.querySelector('.character-info .occupation').innerText = `Occupation :${oneCharacter.occupation}`;
                document.querySelector('.character-info .cartoon').innerText = `Cartoon : ${oneCharacter.cartoon}`;
                document.querySelector('.character-info .weapon').innerText = `Weapon : ${oneCharacter.weapon}`;
            })
            .catch((err) => {
                console.log(error)
            })
    }

    document.getElementById('delete-one').onclick = function () {
        let characterId = document.querySelector('.delete input').value
        console.log(characterId)
        charactersAPI.deleteOneRegister(characterId).then((deleted) => {
                console.log(deleted);
            })
            .catch((err) => {
                console.log(error)
            })
    }

    document.getElementById('edit-data').onclick = function () {
        let editCharacter = {};
        editCharacter.id = document.getElementsByName('chr-id')[0].value;
        editCharacter.name = document.getElementsByName('name')[1].value;
        editCharacter.occupation = document.getElementsByName('occupation')[1].value;
        editCharacter.weapon = document.getElementsByName('weapon')[1].value;
        editCharacter.cartoon = document.getElementsByName('cartoon')[1].value;
        // console.log(editCharacter);
        charactersAPI.updateOneRegister(editCharacter).then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(error)
            })
    }

    document.getElementById('send-data').onclick = function () {
        let newCharacter = {};
        newCharacter.name = document.getElementsByName('name')[0].value
        newCharacter.occupation = document.getElementsByName('occupation')[0].value
        newCharacter.weapon = document.getElementsByName('weapon')[0].value
        newCharacter.cartoon = document.getElementsByName('cartoon')[0].value

        charactersAPI.createOneRegister(newCharacter).then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(error)
            })
    }
})