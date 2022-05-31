var modelo = require("../models/cidade");
var mongoose = require("mongoose");

module.exports.listar = function () {
  return modelo.find({},{_id:0,id:1,nome:1,distrito:1}).exec();
};

module.exports.all = function () {
  return modelo.find({}).exec();
};

module.exports.get = function (id) {
  return modelo.find({id:id}).exec();
};

module.exports.nomes = function () {
  return modelo.find({},{nome:1,_id:0}).sort({nome:1}).distinct("nome").exec();
};

module.exports.getByDistrict = function (distrito) {
  return modelo.find({distrito:distrito},{nome:1,_id:0}).exec();
};
