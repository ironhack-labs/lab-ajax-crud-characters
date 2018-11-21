const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
    document.getElementById('fetch-all').onclick = function () {

        charactersAPI.getFullList().then((fullList) => {
            let htmlTemplate = "";
            for (let i = 0; i < fullList.length; i++) {
                htmlTemplate+=  ` <div class="character-info">
                  <div class="id">Id: ${fullList[i].id}</div>
                  <div class="name">Name: ${fullList[i].name}</div>
                  <div class="occupation">Occupation: ${fullList[i].occupation}</div>
                  <div class="cartoon">Cartoon: ${fullList[i].cartoon}</div>
                  <div class="weapon">Weapon: ${fullList[i].weapon}</div>
                </div>`
            }
           
          
            document.querySelector('.characters-container').innerHTML=htmlTemplate
          
        }).catch((err) => {
            console.log(err)
        })

    }

    document.getElementById('fetch-one').onclick = function () {
        document.querySelector('.characters-container').innerHTML =""
        let characterId = document.querySelector('.operation input').value;
        charactersAPI.getOneRegister(characterId).then((oneCharacter) => {    
               document.querySelector('.characters-container').innerHTML=` <div class="character-info">
                 <div class="id">Id: ${oneCharacter.id}</div>
                 <div class="name">Name: ${oneCharacter.name}</div>
                 <div class="occupation">Occupation: ${oneCharacter.occupation}</div>
                 <div class="cartoon">Cartoon: ${oneCharacter.cartoon}</div>
                 <div class="weapon">Weapon: ${oneCharacter.weapon}</div>
               </div>`
            })
            .catch((err) => {
                document.querySelector('.characters-container').innerHTML=`<p>
                The number Element is not in the datbase
                </p>`
                console.log(error)
            })
    }

    document.getElementById('delete-one').onclick = function () {
        let characterId = document.querySelector('.delete input').value
        charactersAPI.deleteOneRegister(characterId).then((deleted) => {
                if(!deleted){
                    document.querySelector('.characters-container').innerHTML=`<p>
                    The number Element is not in the datbase
                    </p>`
                }
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
        editCharacter.cartoon = document.getElementsByName('cartoon')[1].checked;
        // console.log(editCharacter);
        charactersAPI.updateOneRegister(editCharacter).then((result) => {
            document.querySelector('#edit-data').style.backgroundColor = "green";
                console.log(result);
            })
            .catch((err) => {
                document.querySelector('#edit-data').style.backgroundColor = "red";
                console.log(error)
            })
    }

    document.getElementById('send-data').onclick = function () {
        let newCharacter = {};
        newCharacter.name = document.getElementsByName('name')[0].value
        newCharacter.occupation = document.getElementsByName('occupation')[0].value
        newCharacter.weapon = document.getElementsByName('weapon')[0].value
        newCharacter.cartoon = document.getElementsByName('cartoon')[0].checked;

        charactersAPI.createOneRegister(newCharacter).then((result) => {
                console.log(result);
                document.querySelector('#send-data').style.backgroundColor = "green";
            })
            .catch((err) => {
                console.log(error)
                document.querySelector('#send-data').style.backgroundColor = "red";
            })
    }
})