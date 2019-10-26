const orm = require ('../config/orm')

module.exports = function (app) {
    app.get("/api/burgers", function(req,res) {
        orm.selectAll().then(result => {
            res.json(result)
        });
    })

    app.post("/api/burgers/", function(req, res) {
        orm.insertOne(req.body.name)
        res.end();
    })

    app.put("/api/burgers/", function(req, res) {
        orm.updateOne(req.body.id, 'devoured', true)
        res.end();
    })
}