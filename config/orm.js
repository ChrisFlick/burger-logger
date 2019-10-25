const connection = require('./connection')

const orm = {
    selectAll: function() {
        return new Promise((resolve, reject) => {
            let queryString = "SELECT * FROM burgers"
            connection.query(queryString, function(err, res) {
                if (err) throw err;
                resolve(res);
            })
        })
        
    },

    insertOne(name) {
        return new Promise((resolve, reject) => {
            let queryString = `INSERT INTO burgers (burger_name) VALUES ('${name}')`
            connection.query(queryString, function (err, res) {
                if (err) throw err;
                resolve(res)
            })
        })

    },

    updateOne(id, set, to) {
        return new Promise ((resolve, reject) => {
            let queryString = `
                UPDATE burgers
                SET ${set} = ${to}
                WHERE id = ${id}
            `

            connection.query(queryString, function(err, res) {
                if (err) throw err;
                resolve(res)
            })
        })
    }
}

module.exports = orm;
