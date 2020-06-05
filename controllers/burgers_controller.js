const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", (req, res) => {

    burger.selectAll((data) => {
        const hbsobject = {
            burgers: data
        };
        console.log("hbsobject " + hbsobject)
        res.render("index", hbsobject);
    });

});


module.exports = router;