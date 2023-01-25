const db = require('../models');
const Department = db.department;

exports.createDepartment = (objectToBeCreate) => {
  return Department.create(objectToBeCreate);
};

exports.getAllDepartments = () => {
  return Department.findAll();
};

exports.getDepartmentById = (_id) => {
  return Department.findOne({ where: { id: _id } });
};

exports.deleteDepartmentById = (_id) => {
  return Department.destroy({ where: { id: _id } });
};

exports.updateDepartmentById = (_id, objectToBeUpdate) => {
  return Department.update(objectToBeUpdate, { where: { id: _id } });
};
