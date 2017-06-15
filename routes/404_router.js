var express = require("express");
var root = express.Router();

root.get(/\/(.*)/, function(req, res) {
  var slug = req.params[0];
  res.render("404", {
        zoekopdracht: slug
      });
});

module.exports = root;
