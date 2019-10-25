const orm = require ('../config/orm')

module.exports = function (app) {
    app.get("/api/all", function(req,res) {
        orm.selectAll().then(result => {
            res.json(result)
        });
    })
}