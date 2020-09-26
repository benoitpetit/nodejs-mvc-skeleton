var express = require('express');
var router = express.Router();

/* --------------------------------- routes --------------------------------- */
// require controller
const controllerIndex = require('../controllers/indexController');
/* GET home page. */
router.get('/', controllerIndex.afficherPageIndex);
/* -------------------------------------------------------------------------- */


module.exports = router;