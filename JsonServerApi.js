const axios = require("axios");


class JsonServerApi {
    constructor(){
        this.api = axios.create({
            baseURL: "http://localhost:8000"
        });
    }
    getAll (){
       return this.api.get("/characters");
    }

    getOne (id){
        return this.api.get(`/characters/${id}`);
    }

    createOne(data){
        return this.api.post(`/characters`, data);
    }

    editOne(id, data){
        return this.api.put(`/characters/${id}`, data);
    }

    deleteOne(id){
        return this.api.delete(`/characters/${id}`);
    }
}

module.exports = JsonServerApi;