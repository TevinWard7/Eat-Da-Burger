const orm = require("../config/orm.js");

const burger = {
    createBurger: () => {
        orm.insertOne()
    },
    updateBurger: () => {
        orm.updateOne()
    },
    allBurgers: () => {
        orm.selectAll()
    }
};

module.exports = burger;