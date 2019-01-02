var Product = require('../models/product');
var moment = require('moment');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.render('productadd.ejs');
};

exports.list = function(req, res) {
    Product.find({}, function(err, product) {
        if (err) return next(err);
        res.render('product.ejs', {
            products: product,
            moment: moment

        })
    })

};

exports.product_create = function (req, res) {
    var product = new Product(
        {
            name: req.body.name,
            type: req.body.type,
            etat: req.body.etat,
            description: req.body.description,
            date: req.body.date
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/products');
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};