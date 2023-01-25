const db = require('../models');
const Employee = db.employee;
const Project = db.project;

exports.createEmployee = (objectToBeCreate) => {
  return Employee.create(objectToBeCreate);
};

exports.getAllEmployees = () => {
  return Employee.findAll({
    include: [
      {
        model: Project,
        as: 'projects',
        through: {
          attributes: [],
        },
      },
    ],
  });
};

exports.getEmployeeById = (_id) => {
  return Employee.findOne({
    where: { id: _id },
    include: [
      {
        model: Project,
        as: 'projects',
        through: {
          attributes: [],
        },
      },
    ],
  });
};

exports.deleteEmployeeById = (_id) => {
  return Employee.destroy({ where: { id: _id } });
};

exports.updateEmployeeById = (_id, objectToBeUpdate) => {
  return Employee.update(objectToBeUpdate, { where: { id: _id } });
};
