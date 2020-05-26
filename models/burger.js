const orm = require("../config/orm.js");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: (cb) => {
        orm.insertOne("burgers", (res) => {
            cb(res)
        });
    },
    updateOne: (cb) => {
        orm.updateOne("burgers", (res) => {
            cb(res);
        })
    }
};

module.exports = burger;