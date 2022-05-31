const mongoose = require('mongoose');

const nome = "cidade"

var schema = new mongoose.Schema({
    id: String,
    nome: String,
    população: Number,
    descrição: String,
    distrito: String
})

module.exports = mongoose.model(nome,schema,"cidades");