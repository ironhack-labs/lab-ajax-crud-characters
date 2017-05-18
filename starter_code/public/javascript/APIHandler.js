function showFeedback(postResponse) {
    console.log('Oh YES works');
    console.log(postResponse);
    var counter = 0;
    if (postResponse.length > 0) {
        postResponse.forEach((char) => {
            counter++;
            console.log(counter);
            var info;
if (counter === 1) {
   info = 'characterinfo';
   $('.name').append(`<label>  ${char.name}</label>`);
   $('.occupation').append(`<label>  ${char.occupation}</label>`);
   $('.debt').append(`<label>  ${char.debt}</label>`);
   $('.weapon').append(`<label>  ${char.weapon}</label>`);
   $('.id').append(`<label>  ${char.id}</label>`);
}else {
   info = 'characterinfo'+counter;
   $('.characters-container').append(`<div class= ${info}></div>`);
   $(`.${info}`).append(`<label class="name">Character Name:<label>  ${char.name}</label></label><br>`);
   $(`.${info}`).append(`<label class="occupation">Character Occupation:<label>  ${char.occupation}</label></label><br>`);
   $(`.${info}`).append(`<label class="debt">Character Debt:<label>  ${char.debt}</label></label><br>`);
   $(`.${info}`).append(`<label class="weapon">Character Weapon:<label>  ${char.weapon}</label></label><br>`);
   $(`.${info}`).append(`<label class="id">ID:<label>  ${char.id}</label></label><br>`);
}


        });
    } else {
        $('.name').append(`<label>  ${postResponse.name}</label>`);
        $('.occupation').append(`<label>  ${postResponse.occupation}</label>`);
        $('.debt').append(`<label>  ${postResponse.debt}</label>`);
        $('.weapon').append(`<label>  ${postResponse.weapon}</label>`);
        $('.id').append(`<label>  ${postResponse.id}</label>`);
    }
}

function handleError(err) {
    console.log('Oh no! Error:');
    console.log(err);
}

class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }


    getFullList() {
        $.ajax({
            method: 'GET',
            url: 'http://ih-api.herokuapp.com/characters',
            success: showFeedback,
            error: handleError
        });
    }

    getOneRegister(one) {
        $.ajax({
            method: 'GET',
            url: `http://ih-api.herokuapp.com/characters/${one}`,
            success: showFeedback,
            error: handleError
        });
    }

    createOneRegister(nam, occu, deb, weap) {

        const char = {
            name: nam,
            occupation: occu,
            debt: deb,
            weapon: weap
        };
        $.ajax({
            method: 'POST',
            url: 'http://ih-api.herokuapp.com/characters',
            data: char,
            success: showFeedback,
            error: handleError
        });
    }

    updateOneRegister(one, nam, occu, deb, weap) {
        $.ajax({
            method: 'PATCH',
            url: `http://ih-api.herokuapp.com/characters/${one}`,
            data: {
                name: nam,
                occupation: occu,
                debt: deb,
                weapon: weap
            },
            success: showFeedback,
            error: handleError
        });
    }

    deleteOneRegister(one) {
        $.ajax({
            method: 'DELETE',
            url: `http://ih-api.herokuapp.com/characters/${one}`,
            success: showFeedback,
            error: handleError
        });
    }
}
