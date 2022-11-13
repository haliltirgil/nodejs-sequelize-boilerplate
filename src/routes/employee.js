const express = require("express");
const { createEmployee, getAllEmployees, getEmployeeById, updateEmployeeById, deleteEmployeeById } = require("../controllers/employee");

const router = express.Router();

router.post('/create-employee', createEmployee);
router.get('/get-all-employees', getAllEmployees);
router.get('/get-employee-by-id/:id', getEmployeeById);
router.put('/update-employee-by-id/:id', updateEmployeeById);
router.delete('/delete-employee-by-id/:id', deleteEmployeeById);

module.exports = router; 