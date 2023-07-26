var express = require('express');
var router = express.Router();

router.get('/', function (req,res,next){
    res.send('Hola soy la pagina de nosotros pero esta controlada desde el controlador nosotros,js')
})


module.exports = router;
