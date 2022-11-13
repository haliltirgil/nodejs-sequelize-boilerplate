const ProjectDataAccess = require('../data-access/project');

const createProject = async (req, res) => {
    let project;

    try {
        project = await ProjectDataAccess.createProject(req.body);
    } catch (error) {
        return res.status(400).send(error);
    }

    return res.status(201).send(project);
};

const getAllProjects = async (_req, res) => {
    let allProjects;

    try {
        allProjects = await ProjectDataAccess.getAllProjects();
    } catch (error) {
        return res.status(400).send(error);
    }

    return res.status(200).send(allProjects);
};

const getProjectById = async (req, res) => {
    let project;

    try {
        project = await ProjectDataAccess.getProjectById(req.params.id);
    } catch (error) {
        return res.status(400).send(error);
    }

    return res.status(200).send(project);

};

const updateProjectById = async (req, res) => {
    try {
        await ProjectDataAccess.updateProjectById(req.params.id, req.body);
    } catch (error) {
        return res.status(400).send(error);
    }

    res.status(204).send({});
};

const deleteProjectById = async (req, res) => {
    try {
        await ProjectDataAccess.deleteProjectById(req.params.id);
    } catch (error) {
        return res.status(400).send(error);
    }

    return res.status(204).send({});
};

module.exports = { createProject, getAllProjects, getProjectById, updateProjectById, deleteProjectById };