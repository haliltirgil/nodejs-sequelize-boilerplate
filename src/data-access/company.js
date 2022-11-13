const db = require('../models');
const Company = db.company;

exports.createCompany = (objectToBeCreate) => {
    return Company.create(objectToBeCreate);
};

exports.getAllCompanies = () => {
    return Company.findAll();
};

exports.getCompanyById = (_id) => {
    return Company.findOne({ where: { id: _id } });
};

exports.deleteCompanyById = (_id) => {
    return Company.destroy({ where: { id: _id } });
};

exports.updateCompanyById = (_id, objectToBeUpdate) => {
    return Company.update(objectToBeUpdate, { where: { id: _id } });
};
