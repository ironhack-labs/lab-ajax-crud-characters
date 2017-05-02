class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }

    getFullList(callbackFunction) {
        this.doAJAXRequest("GET", this.BASE_URL + "/characters", callbackFunction);
    }

    getOneRegister(id, callbackFunction) {
        this.doAJAXRequest("GET", this.BASE_URL + "/characters/" + id, callbackFunction);
    }

    createOneRegister() {

    }

    updateOneRegister() {

    }

    deleteOneRegister(id, callbackFunction) {
        this.doAJAXRequest("DELETE", this.BASE_URL + "/characters/" + id, callbackFunction);
    }

    doAJAXRequest(method, url, successCallback) {
        $.ajax({
            method: method,
            url: url,
            success: successCallback,
            error: this.errorCallback
        });
    }

    errorCallback(error) {
        console.log(error);
        alert("Ups!!! We have a problem: " + JSON.parse(error.responseText).error);
    }
}
