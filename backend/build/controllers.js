"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLogin = exports.getLogin = void 0;
var getLogin = function (req, res) {
    var _a = req.body, name = _a.name, password = _a.password;
    res.send({ name: name, password: password });
};
exports.getLogin = getLogin;
var postLogin = function (req, res) {
    var _a = req.body, name = _a.name, password = _a.password;
    res.send({ name: name, password: password });
};
exports.postLogin = postLogin;
