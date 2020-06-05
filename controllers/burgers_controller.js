const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", (req, res) => {
    const burgers = {
        burgers: burger.selectAll
    }
    console.log(burgers)
    res.render("index", burgers);
});


module.exports = router;