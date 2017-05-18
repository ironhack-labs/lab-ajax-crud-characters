function showFeedback(postResponse) {
    console.log('Oh YES works');
    console.log(postResponse);
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

    createOneRegister(nam,occu,deb,weap) {
        $.ajax({
            method: 'POST',
            url: 'http://ih-api.herokuapp.com/characters',
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

    updateOneRegister(one,nam,occu,deb,weap) {
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
