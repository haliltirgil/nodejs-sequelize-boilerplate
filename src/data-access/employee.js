const db = require('../models');
const Employee = db.employee;

exports.createEmployee = (objectToBeCreate) => {
    return Employee.create(objectToBeCreate);
};

exports.getAllEmployees = () => {
    return Employee.findAll();
};

exports.getEmployeeById = (_id) => {
    return Employee.findOne({ where: { id: _id } });
};

exports.deleteEmployeeById = (_id) => {
    return Employee.destroy({ where: { id: _id } });
};

exports.updateEmployeeById = (_id, objectToBeUpdate) => {
    return Employee.update(objectToBeUpdate, { where: { id: _id } });
};


/* const db = require('../entities/api');
const Staff = db.staff;
const GroupOfRisk = db.groupOfRisk;

exports.createStaff = async (staffObject) => {
    return await Staff.create(staffObject);
};

exports.getAllStaffs = async () => {
    return await Staff.findAll({
        include: [
            {
                model: GroupOfRisk,
                as: 'groupOfRisks'
            }
        ]
    });
};

exports.getAllStaffsWithRelations = async () => {
    return await Staff.findAll({
        include: [db.bloodGroup, db.groupOfRisk]
    });
};

exports.getStaffWithRelations = async (staffId) => {
    return await Staff.findOne({
        where: { id: staffId },
        include: [db.bloodGroup, db.groupOfRisk]
    });
};

exports.getStaffById = async (staffId) => {
    return await Staff.findOne({
        where: { id: staffId },
        include: [
            {
                model: GroupOfRisk,
                as: 'groupOfRisks'
            }
        ]
    });
};

exports.deleteStaffById = async (staffId) => {
    return await Staff.destroy({ where: { id: staffId } });
};

exports.updateStaffById = async (staffId, staffObject) => {
    return await Staff.update(staffObject, { where: { id: staffId } });
};
 */