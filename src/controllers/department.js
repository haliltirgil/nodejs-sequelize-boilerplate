const DepartmentDataAccess = require('../data-access/department');

const createDepartment = async (req, res) => {
    let department;

    try {
        department = await DepartmentDataAccess.createDepartment(req.body);
    } catch (error) {
        return res.status(400).send(error);
    }

    return res.status(201).send(department);
};

const getAllDepartments = async (_req, res) => {
    const allDepartments = await DepartmentDataAccess.getAllDepartments();

    return res.status(200).send(allDepartments);
};

const getDepartmentById = async (req, res) => {
    let department;

    try {
        department = await DepartmentDataAccess.getDepartmentById(req.params.id);
    } catch (error) {
        return res.status(400).send(error);
    }

    return res.status(200).send(department);

};

const updateDepartmentById = async (req, res) => {
    try {
        await DepartmentDataAccess.updateDepartmentById(req.params.id, req.body);
    } catch (error) {
        return res.status(400).send(error);
    }

    res.status(204).send({});
};

const deleteDepartmentById = async (req, res) => {
    try {
        await DepartmentDataAccess.deleteDepartmentById(req.params.id);
    } catch (error) {
        return res.status(400).send(error);
    }

    return res.status(204).send({});
};

module.exports = { createDepartment, getAllDepartments, getDepartmentById, updateDepartmentById, deleteDepartmentById };