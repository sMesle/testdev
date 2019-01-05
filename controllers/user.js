var User = require("../models/user");

exports.user_view_register = function (req, res) {
    res.render("register.ejs");
};

exports.user_view_login = function (req, res) {
    res.render("login.ejs");
};

exports.user_register = function (req, res) {
    if()
    var user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        rePassword: req.body.rePassword,
    });

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
};
