const express = require('express');
require('./project/db/mongoose');
const app = express();
const port = 3000;
const router = require('./project/routes/routes')
const bodyParser = require('body-parser')
// app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, token, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
  }));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(router);
app.listen(port,() => console.log(`app listening on port ${port}`));