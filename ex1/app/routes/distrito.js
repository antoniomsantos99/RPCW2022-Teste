var express = require('express');
var router = express.Router();
const cidades = require('../controllers/controladorCidade');

/* GET home page. */
router.get('/', function(req, res, next) {
  cidades.all()
  .then(dados =>{
    var distritos = {}
    dados.forEach(function(cidade){
      if (cidade.distrito in distritos)
        distritos[cidade.distrito].push({nome:cidade.nome,id:cidade.id})
      else
      distritos[cidade.distrito]= [{nome:cidade.nome,id:cidade.id}]
    })
    res.status(200).jsonp(distritos)
  })
  .catch(e => {console.log(e);res.status(500).jsonp({error: e})})
});

module.exports = router;
