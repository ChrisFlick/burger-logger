const orm = require('../config/orm')

module.exports = function (app) {
    app.get("/", function (req, res) {
        orm.selectAll().then(burgers => {
           
            
            for (let i = 0; i < burgers.length; i++) {
                if (burgers[i].devoured === 0) {
                    burgers[i].eaten = false
                } else {
                    burgers[i].eaten = true;
                }
            }

            console.log(burgers)

            res.render("index", {burgers:burgers});
        })
        
    });
}

