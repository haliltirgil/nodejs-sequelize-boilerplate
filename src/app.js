const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const router = require('./routes');

const app = express();

app.disable('x-powered-by');
app.set('trust proxy', true);
app.use(cors());
app.use(json());

app.use('/api/v1', router);

module.exports = app;
