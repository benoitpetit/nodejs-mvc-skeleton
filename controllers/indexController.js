const Index = require('../models/indexModel');

/**
 * fonction afficher la page index
 * @param {*} req 
 * @param {*} res rendu sur un fichier TWIG
 * @param {*} next 
 */
const afficherPageIndex = (req, res, next) => {
    res.render('index', {
        title: 'accueil'
    });
}


module.exports = {
    afficherPageIndex: afficherPageIndex
};