var modelo = require("../models/ligacao");
var mongoose = require("mongoose");

module.exports.get = function (id) {
  return modelo.find({id:id}).exec();
};

module.exports.getOrigem = function (origem) {
  return modelo.find({origem:origem}).exec();
};

module.exports.getDistancia = function (dist) {
  return modelo.find({distância:{$gte:dist}}).exec();
};