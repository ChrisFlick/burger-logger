const orm = require('../config/orm')

module.exports = function (app) {
    app.get("/", function (req, res) {
        orm.selectAll().then(burgers => {

            console.log(burgers)

            res.render("index", {burgers:burgers});
        })
        
    });
}

