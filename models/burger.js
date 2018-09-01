// export the db functions for burger_controllers.js
module.exports = function(sequelize, DataTypes){
    var Burger = sequelize.define("Burger",{
        burgerType:DataTypes.STRING,
        devoured:DataTypes.BOOLEAN
    });
    return Burger;
};