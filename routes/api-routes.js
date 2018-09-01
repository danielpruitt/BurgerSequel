// requires the models
var db = require("../models");

module.exports = function (app) {

    //Get Route, gets ll the burgers
    app.get("/api/burgers", function (req, res) {
        db.Burger.findAll({}).then(function (dbBurger) {
            res.json(dbBurger)
        });
    });

    //Post Route, saves a new burger
    app.post("/api/burgers", function (req, res) {
        db.Burger.create({
            burgerType: req.body.burgerType,
            devoured: req.body.devoured
        }).then(function (dbBurger) {
            res.json(dbBurger)
        });
    });

    app.put("/api/burgers", function (req, res) {
        // Update takes in two arguments, an object describing the properties we want to update,
        // and another "where" object describing the todos we want to update
        db.Todo.update({
            burgerType: req.body.burgerType,
            devoured: req.body.devoured
        }, {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbBurger) {
                res.json(dbBurger);
            });

    });

    app.delete("/api/burgers/:id", function (req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (delBurger) {
            res.json(delBurger)
        });
    });



};