var Product = require("../models/product");
var moment = require("moment");


exports.view_product_add = function (req, res) {
  res.render("productadd.ejs");
};

exports.product_list = function (req, res) {
  Product.find({}, function (err, product) {
    if (err) return next(err);
    res.render("product.ejs", {
      products: product,
      moment: moment
    });
  });
};

exports.view_edit = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return next(err);
    res.render("productedit.ejs", {
      product: product,
      moment: moment
    });
  });
};

exports.edit_product = function (req, res) {
  Product.findByIdAndUpdate(req.params.id, {
    type: req.body.type,
    name: req.body.name,
    etat: req.body.etat,
    description: req.body.description,
    date: req.body.date
  }, function (err) {
    if (err) return next(err);
    res.redirect("/products");
  });
};

exports.product_create = function (req, res) {
  var product = new Product({
    type: req.body.type,
    name: req.body.name,
    etat: req.body.etat,
    description: req.body.description,
    date: req.body.date
  });

  product.save(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/products");
  });
};

exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return next(err);
    res.send(product);
  });
};

exports.product_delete = function (req, res) {
  Product.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send("Produit supprimé");
  });
};