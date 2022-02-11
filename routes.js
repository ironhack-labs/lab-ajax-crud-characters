const express = require("express");
const router = express.Router();
const JsonServerApi = require("./JsonServerApi");
const jsonServerApi = new JsonServerApi("http://localhost:8000");

router.get("/characters", async (req, res, next)=> {
    try {
        const response = await jsonServerApi.getAll();
        console.log("Response.data getAll: ", response.data);
        res.send(response.data)
    } catch (error) {
        console.log(error);
    }   
});

router.get("/characters/:id", async (req, res, next)=> {
    try {
        const response = await jsonServerApi.getOne(req.params.id);
        console.log("Response.data getOne: ", response.data);
        res.send(response.data);
    } catch (error) {
        console.log(error);
    }
});

router.post("/characters", async (req, res, next) => {
    try {
        const response = await jsonServerApi.createOne(req.body);
        console.log("Response.data createOne: ", response.data);
        res.send(response.data);
    } catch (error) {
        console.log(error);
    }
});

router.put("/characters/:id", async (req, res, next) => {
    try {
        const response = await jsonServerApi.editOne(req.params.id, req.body);
        console.log("Response.data editOne: ", response.data);
        res.send(response.data);
    } catch (error) {
        console.log(error);
    }
});

router.delete("/characters/:id", async (req, res, next) => {
    try {
        const response = await jsonServerApi.deleteOne(req.params.id);
        console.log("Response.data editOne: ", response.data);
        res.send(response.data);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;




