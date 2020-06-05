const connection = require("../config/connection.js");

const orm = {
    selectAll: (tableName, cb) => {
        const query = `SELECT * FROM ${tableName}`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res);
            // console.log(res);
        });
    },
    insertOne: (newBurgerName, cb) => {
        const query = `INSERT INTO burgers (burger_name) VALUES ${newBurgerName}`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res);
            // console.log(res);
        });
    },
    updateOne: (burgerId, cb) => {
        const query = `UPDATE burgers SET devoured = true  WHERE id = ${burgerId}`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res);
            // console.log(res);
        });
    }
};

module.exports = orm;