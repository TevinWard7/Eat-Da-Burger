const connection = require("../config/connection.js");

const orm = {
    selectAll: (tableName) => {
        const query = "SELECT * FROM ?";
        connection.query(query, [tableName], (err, res) => {
            if (err) throw err;
            console.log(res);
        });
    },
    insertOne: (newBurgerName) => {
        const query = "INSERT INTO burgers (burger_name) VALUES ?;";
        connection.query(query, [newBurgerName], (err, res) => {
            if (err) throw err;
            console.log(res);
        });
    },
    updateOne: (trueOrFalse, burgerId) => {
        const query = "UPDATE burgers SET devoured = ?  WHERE id = ?;";
        connection.query(query, [trueOrFalse, burgerId], (err, res) => {
            if (err) throw err;
            console.log(res);
        });
    }
};

module.exports = orm;