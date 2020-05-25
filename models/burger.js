const orm = require("../config/orm.js");

const burger = {
    createBurger: (cb) => {
        orm.insertOne("burgers", (res) => {
            cb(res)
        });
    },
    updateBurger: (cb) => {
        orm.updateOne("burgers", (res) => {
            cb(res);
        })
    },
    allBurgers: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        })
    }
};

module.exports = burger;