var orm = require("../config/orm");

var burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    insert: function(cb) {
        orm.selectAll("burgers", cols, vals, function(res){
            cb(res);
        });
    },

    update: function(cb) {
        orm.selectAll("burgers", objColVals, condition,  function(res){
            cb(res);
        });
    }
};

module.exports = burger;