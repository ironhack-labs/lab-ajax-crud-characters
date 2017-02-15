/* jshint esversion:6 */
class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }

    getFullList() {
        $.ajax({
            url: this.BASE_URL + "/characters/",
            method: "GET",
            dataType: "json",
            success: function(response) {
                console.log(response);
                return response;
            },
            error: function(err) {
                console.log(err);
            },
        });
    }

    getOneRegister(id) {
        $.ajax({
            url: this.BASE_URL + "/characters/"+ id,
            method: "GET",
            dataType: "json",
            success: function(response) {
                console.log(response);
                return response;
            },
            error: function(err) {
                console.log(err);
            },
        });
    }

    createOneRegister() {
        $.ajax({
            url: this.BASE_URL + "/characters/",
            method: "POST",
            dataType: "json",
            success: function(response) {
                console.log(response);
                return response;
            },
            error: function(err) {
                console.log(err);
            },
        });
    }

    updateOneRegister(id) {
        $.ajax({
            url: `http://ih-api.herokuapp.com/characters/${id}`,
            method: "PATCH/PUT",
            dataType: "json",
            success: function(response) {
                console.log(response);
                return response;
            },
            error: function(err) {
                console.log(err);
            },
        });
    }

    deleteOneRegister(id) {
        $.ajax({
            url: `http://ih-api.herokuapp.com/characters/${id}`,
            method: "DELETE",
            dataType: "json",
            success: function(response) {
                console.log(response);
                return response;
            },
            error: function(err) {
                console.log(err);
            },
        });
    }
}

var constructor = new APIHandler();
