require('dotenv/config');
const express = require('express');

const employeeRouter = require('./employee');
const companyRouter = require('./company');
const departmentRouter = require('./department');
const projectRouter = require('./project');

const router = express.Router();

router.use('/employees', employeeRouter);
router.use('/companies', companyRouter);
router.use('/departments', departmentRouter);
router.use('/projects', projectRouter);

module.exports = router;
