const express = require("express");
const testController = require("../controllers/test");

const router = express.Router();

router.get('/get', testController.createDevice);

module.exports = router; 