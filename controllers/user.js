var User = require("../models/user");

exports.user_view_register = function (req, res) {
    res.render("register.ejs");
};

exports.user_view_login = function (req, res) {
    res.render("login.ejs");
};

exports.user_register = function (req, res, next) {

    if(req.body.password != req.body.rePassword) {
        var err = new Error("Mot de passe non identique");
        err.status = 400;
        res.send("Mot de passe non identique");
        return next(err);
    }

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

exports.user_login = function (req,res) {

}
