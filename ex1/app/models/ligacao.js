const mongoose = require('mongoose');

const nome = "ligacao"

var schema = new mongoose.Schema({
    id: String,
    origem: String,
    destino: String,
    distância: Number
})

module.exports = mongoose.model(nome,schema,"ligacoes");