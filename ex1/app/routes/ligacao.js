var express = require('express');
var router = express.Router();
const cidades = require('../controllers/controladorCidade');
const ligacoes = require('../controllers/controladorLigacao');
const ligacao = require('../models/ligacao');

/* GET users listing. */
router.get('/', function(req, res, next) {


  if (req.query.origem)
    ligacoes.getOrigem(req.query.origem)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
  else if (req.query.dist)
    ligacoes.getDistancia(req.query.dist)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
});

module.exports = router;
