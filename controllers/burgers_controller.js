const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render("index", hbsObject);
    });
});

router.get("/api/burgers", (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data
        };
        res.json(hbsObject)
    });
});

router.put("/api/burgers/:id", (req, res) => {
    burger.updateOne((data) => {

    })
})


module.exports = router;