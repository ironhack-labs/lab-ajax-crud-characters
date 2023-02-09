const axios = require("axios");

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () => {
    return this.api.get("/list");
  };

  getOneRegister (registerId) => {
   return this.api.get(`/register/${registerId}`);
  };

  createOneRegister (registerInfo) => {
    return this.api.post(`/register`,registerInfo);
  };

  updateOneRegister (registerId) => {
    return this.api.update(`/registerId/${registerId}`, registerInfo`);

  };

  deleteOneRegister (registerId) => {
    return this.api.delete(`/registerId/${registerId}`, registerInfo)
  };


module.exports = ApiService;