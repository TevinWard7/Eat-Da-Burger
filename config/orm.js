const connection = require("../config/connection.js");

const orm = {
    selectAll: () => {
        const query = "SELECT * FROM ?";
        connection.query(query, (err, res) => {

        });
    },
    insertOne: () => {
        const query = "";
        connection.query(query, (err, res) => {

        });
    },
    updateOne: () => {
        const query = "";
        connection.query(query, (err, res) => {

        });
    }
};

module.exports = orm;