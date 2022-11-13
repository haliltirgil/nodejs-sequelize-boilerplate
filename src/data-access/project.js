const db = require('../models');
const Project = db.project;

exports.createProject = (objectToBeCreate) => {
    return Project.create(objectToBeCreate);
};

exports.getAllProjects = () => {
    return Project.findAll();
};

exports.getProjectById = (_id) => {
    return Project.findOne({ where: { id: _id } });
};

exports.deleteProjectById = (_id) => {
    return Project.destroy({ where: { id: _id } });
};

exports.updateProjectById = (_id, objectToBeUpdate) => {
    return Project.update(objectToBeUpdate, { where: { id: _id } });
};
