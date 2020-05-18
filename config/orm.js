const connection = require("../config/connection.js");

const orm = {
    selectAll: () => {
        const query = "SELECT * FROM ?";
        connection.query(query, (err, res) => {

        });
    },
    insertOne: () => {
        const query = "INSERT INTO burgers (burger_name) VALUES (?);";
        connection.query(query, (err, res) => {

        });
    },
    updateOne: () => {
        const query = "UPDATE burgers SET devoured = ?  WHERE id = ?;";
        connection.query(query, (err, res) => {

        });
    }
};

module.exports = orm;