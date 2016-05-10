var express = require('express');
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
    var fileUrl;
    if (req.url == '/') fileUrl = '/index.html';
    else fileUrl = req.url;
    var filePath = path.resolve('./public'+fileUrl);
  res.sendFile(filePath);
});

module.exports = router;
