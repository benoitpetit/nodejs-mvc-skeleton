const Index = require('../models/indexModel');

exports.showIndexPage = (req, res, next) => {
    res.render('index', {
        title: 'Express'
    });
}