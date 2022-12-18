const express = require("express");
const { createProject, getAllProjects, getProjectById, updateProjectById, deleteProjectById } = require("../controllers/project");

const router = express.Router();

router.post('/create-project', createProject);
router.get('/get-all-projects', getAllProjects);
router.get('/get-project-by-id/:id', getProjectById);
router.put('/update-project-by-id/:id', updateProjectById);
router.delete('/delete-project-by-id/:id', deleteProjectById);

module.exports = router; 