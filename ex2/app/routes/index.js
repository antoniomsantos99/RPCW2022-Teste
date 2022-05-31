var express = require('express');
var router = express.Router();
var axios = require('axios')
var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTRlY2VhNmI1ZDVjMjQ3NmNmMDhiMSIsImxldmVsIjozLjUsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InJwY3cyMDIyQGdtYWlsLmNvbSIsImlhdCI6MTY1NDAxNzY3OCwiZXhwIjoxNjU0MDQ2NDc4fQ.TdsdcS_IVImWUmnle5uhJZUPYZoQQZ0bpDfw5biiJaE1GnER8NTsl7ma9ih1fJOmZjp4E_9kZcdttszS57bQQYC9P3-LddQQWGHuY_c18o_zhXILO5Dx5c-Vfmh8-Dtw5PXeU7wCh-n-RP3LCJLg-uTEd33A88JUvMzdmwBYtrB4rgC9gCONavZj7JHs6GzOYd_BeHgZbtQw25kI8M3vOou-2rtPkvc21jrfLMUQK774LewKpX8Pc2tRkIs5mFIrDGYl4_7d8BE8jMOOM9EmYRk0TqM0ylCSPhnLuMJBZVgj8FKrObXSed8OGOUNapeztDKmhE9mNG5FEKh2szO0Jg"
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render("index")
  .catch((err) => {
    res.render("error", { error: err });
  });
});


router.get('/classes', function(req, res, next) {
  axios
  .get(`http://clav-api.di.uminho.pt/v2/classes?token=${token}&nivel=1`)
  .then((response) => {
    var classes = response.data;
    res.render("classes", {
      classes: classes,
    });
  })
  .catch((err) => {
    res.render("error", { error: err });
  });
});

router.get('/termos', function(req, res, next) {
  axios
  .get(`http://clav-api.di.uminho.pt/v2/termosIndice?token=${token}`)
  .then((response) => {
    var termos = response.data;
    res.render("termos", {
      termos: termos,
    });
  })
  .catch((err) => {
    res.render("error", { error: err });
  });
});



router.get('/classe/:codigo', function(req, res, next) {
  axios
  .get(`http://clav-api.di.uminho.pt/v2/classes/c${req.params.codigo}?token=${token}`)
  .then((response) => {
    var classe = response.data;
    res.render("classe", {
      classe: classe,
    });
  })
  .catch((err) => {
    res.render("error", { error: err });
  });
});


module.exports = router;
