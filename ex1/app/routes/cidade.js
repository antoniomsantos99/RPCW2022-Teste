var express = require('express');
var router = express.Router();
const cidades = require('../controllers/controladorCidade');


/* GET users listing. */
router.get('/', function(req, res, next) {
  if(!req.query.distrito)
    cidades.listar()
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
  else
    cidades.getByDistrict(req.query.distrito)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
});

router.get('/nomes', function(req, res, next) {
  cidades.nomes()
  .then(dados => res.status(200).jsonp(dados))
  .catch(e => res.status(500).jsonp({error: e}))
});

router.get('/:id', function(req, res, next) {
  cidades.get(req.params.id)
  .then(dados => res.status(200).jsonp(dados))
  .catch(e => res.status(500).jsonp({error: e}))
});


module.exports = router;
