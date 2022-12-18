const express = require("express");
const { createDepartment, getAllDepartments, getDepartmentById, updateDepartmentById, deleteDepartmentById } = require("../controllers/department");

const router = express.Router();

router.post('/create-department', createDepartment);
router.get('/get-all-departments', getAllDepartments);
router.get('/get-department-by-id/:id', getDepartmentById);
router.put('/update-department-by-id/:id', updateDepartmentById);
router.delete('/delete-department-by-id/:id', deleteDepartmentById);

module.exports = router; 