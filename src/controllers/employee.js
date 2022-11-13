const EmployeeDataAccess = require('../data-access/employee');

const createEmployee = async (req, res) => {
    let employee;

    try {
        employee = await EmployeeDataAccess.createEmployee(req.body);
    } catch (error) {
        return res.status(400).send(error);
    }

    return res.status(201).send(employee);
};

const getAllEmployees = async (_req, res) => {
    let allEmployees;

    try {
        allEmployees = await EmployeeDataAccess.getAllEmployees();
    } catch (error) {
        return res.status(400).send(error);
    }

    return res.status(200).send(allEmployees);
};

const getEmployeeById = async (req, res) => {
    let employee;

    try {
        employee = await EmployeeDataAccess.getEmployeeById(req.params.id);
    } catch (error) {
        return res.status(400).send(error);
    }

    return res.status(200).send(employee);

};

const updateEmployeeById = async (req, res) => {
    try {
        await EmployeeDataAccess.updateEmployeeById(req.params.id, req.body);
    } catch (error) {
        return res.status(400).send(error);
    }

    res.status(204).send({});
};

const deleteEmployeeById = async (req, res) => {
    try {
        await EmployeeDataAccess.deleteEmployeeById(req.params.id);
    } catch (error) {
        return res.status(400).send(error);
    }

    return res.status(204).send({});
};

module.exports = { createEmployee, getAllEmployees, getEmployeeById, updateEmployeeById, deleteEmployeeById };