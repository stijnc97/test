var express = require("express");
var nieuws = express.Router();

nieuws.get('/items/:id', function(req, res) {
  var nieuwsFile = req.app.get('nieuwsFile');
  var id = req.params.id;
  var teller = 0;
  var item = "";
  var slug = req.params[0];
  while (teller < nieuwsFile.nieuws.length ) {
    if (nieuwsFile.nieuws[teller].id == id) {
      item = nieuwsFile.nieuws[teller];
    }
    teller++;
  }
  if (item !== "") {
    res.render("nieuws", {
      item: item
    });
  } else {
    res.render("404", {
        zoekopdracht: slug
    });
  }
});

module.exports = nieuws;
