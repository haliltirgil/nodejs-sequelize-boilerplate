const express = require("express");
const cors = require("cors");
const router = require('./routes');
const { json } = require("body-parser");

const app = express();

app.disable('x-powered-by');
app.set('trust proxy', true);
app.use(cors());
app.use(json());

app.use('/api/v1', router);

module.exports = app;