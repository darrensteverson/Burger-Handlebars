var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgerObject = {
            burgers: data,
        };
        console.log(burgerObject);
        res.render(burgerObject);
    });
});

router.post("/api/burger", function (req, res) {
    burger.insert(
        ["burger_name", "devoured"], 
        [req.body.name, req.body.devoured],
        function (result) {
            res.json({ id: result.insertId });
        });
});