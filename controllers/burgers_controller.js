const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();
const connection = require("../config/connection.js")

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

router.post("/", (req, res) => {
    const newBurgerName = req.body.burger;
    const query = `INSERT INTO burgers (burger_name, devoured) VALUES (?, false);`
    connection.query(query, [newBurgerName], (err, result) => {
        if (err) throw err;
    });
    res.redirect("/");
    console.log(`you sent ${newBurgerName}`)
})

router.put("/api/burgers/:id", (req, res) => {
    // const id = req.params.id;
    // const query = "UPDATE burgers SET devoured = true  WHERE id =?";
    // connection.query(query, [id]);
});




module.exports = router;